import { JSDOM } from 'jsdom';
import { readFileSync, writeFileSync } from 'fs';
// im gonna hate this file in 3 months

function main() {
  const htmlFile = readFileSync('src/assets/AZ_Central_best_restaurants.html', 'utf8');
  const jsDom = new JSDOM(htmlFile);

  const restaurantsArr: {
    review: string;
    name: string;
    websiteURL: string | null;
    address: string | null;
    phone: string | null;
    metro: string;
  }[] = [];

  const citiesArr = [];

  // avoid walking the ENTIRE dom
  const mainArticle = jsDom.window.document.querySelector('div.gnt_ar_b');

  // remove ads
  mainArticle.querySelectorAll('aside').forEach((ad) => ad.remove());

  // these figure elements are out of (expected) place, easier to remove them than to try to navigate around them
  mainArticle.querySelectorAll('figure').forEach((weirdFigureEl) => {
    if (
      weirdFigureEl.nextElementSibling.tagName == 'H2' &&
      weirdFigureEl.previousElementSibling.tagName == 'H2'
    ) {
      weirdFigureEl.remove();
    } else if (
      weirdFigureEl.nextElementSibling.tagName == 'H2' &&
      weirdFigureEl.previousElementSibling.tagName == 'P'
    ) {
      // append to next element sibling
      const clone = weirdFigureEl.cloneNode(true);
      // @ts-expect-error transform Node to Element
      weirdFigureEl.nextElementSibling.insertAdjacentElement('afterend', clone);
      // remove
      weirdFigureEl.remove();
    }
  });

  let currentMetro = '';

  // TODO: could probably just mainArticle.querySelectorAll('h2') instead of this loop
  for (const child of mainArticle.children) {
    if (child.tagName != 'H2' && child.tagName != 'P') continue;

    const childsSibling = child.nextElementSibling;

    if (childsSibling == null) continue;

    // child == a location
    if (childsSibling.tagName == 'H2' && child.tagName == 'H2') {
      const formattedCityName = child.textContent
        .replace(/restaurants/i, '')
        .replace(' in ', '')
        .replace(':', '-')
        .trim();
      console.log(`Now fetching ${formattedCityName} eateries`);
      currentMetro = formattedCityName;
      citiesArr.push(formattedCityName);
      continue;
    } else if (
      child.tagName == 'H2' &&
      (childsSibling.tagName == 'FIGURE' || childsSibling.tagName == 'P')
    ) {
      // child == a restaurant
      const name = child.textContent;

      // childsSibling is a figure OR a P tag
      // grab the review blurb & details siblings
      // TODO: grab image from figure ndoe
      // const figureNode = childsSibling;

      // review lives in a p tag next to figures or the p tag after an h2
      const reviewNode =
        childsSibling.tagName == 'P' ? childsSibling : childsSibling.nextElementSibling;
      const reviewText = reviewNode.textContent;

      // details lives in a p tag after reviews
      const detailsNode = reviewNode.nextElementSibling;
      // make sure this has an anchor tag inside
      if (detailsNode?.firstElementChild?.tagName == 'EM') continue;

      // get info from p tag
      const restaurantInfo = parseRestaurantInfo(detailsNode as HTMLParagraphElement);
      restaurantsArr.push({
        ...restaurantInfo,
        review: reviewText,
        name,
        metro: currentMetro,
      });
    }
  }

  currentMetro = '';

  console.log('Fetched all data');
  console.log('Writing data to file system');
  writeFileSync('data.json', JSON.stringify(restaurantsArr), 'utf8');
  console.log('Done!');
  process.exit(0);
}

// interface RestaurantInfo {
//   websiteName: string;
//   websiteURL: URL | null;
//   address: string;
//   phone: string;
// }

function parseRestaurantInfo(element: HTMLParagraphElement) {
  // Extract text content from the provided HTML element
  // Remove unwanted strong text content using a regular expression
  const textContent = element.textContent.replace('Details:', '').trim() || '';
  // if (!element.textContent) throw new Error('Missing text content!');

  // Use DOM manipulation to get the website URL
  const websiteLink = element.querySelector('a');
  const websiteURL = getURL(websiteLink);

  // Use regex to find a string that matches the phone number format XXX-XXX-XXXX
  const phoneRegex = /\b\d{3}-\d{3}-\d{4}\b/;
  const phoneMatch = textContent.match(phoneRegex);
  const phoneStartingIndex = textContent.search(phoneRegex);
  const phone = phoneMatch ? phoneMatch[0] : null;

  const address = textContent.substring(0, phoneStartingIndex).trim() || null;

  return {
    websiteURL,
    address: address,
    phone,
  };
}

function getURL(anchorTag?: HTMLAnchorElement | undefined): string | null {
  if (!anchorTag) return null;
  const websiteURL = anchorTag.getAttribute('href');
  if (websiteURL?.includes('protect-us.mimecast.com')) {
    // some urls have this structure...idk why
    // "http://protect-us.mimecast.com/s/1dmJCPNKOZS59G3j0ijR-7y?domain=crutacos.com"
    const webURLDerivedFromProcectUSMimecast = new URL(websiteURL).searchParams.get('domain');
    // one website was just a google.com link
    if (webURLDerivedFromProcectUSMimecast == 'google.com') {
      return null;
    } else return `https://${webURLDerivedFromProcectUSMimecast}`;
  } else return websiteURL;
}

main();
