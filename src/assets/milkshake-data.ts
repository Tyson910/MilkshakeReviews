interface Rating {
  0: string;
  1: string;
  2: string;
  3: string;
  "-1": string;
  "-2": string;
  "-3": string;
}

const foodEmojis = {
  "grapes": "\u{1F347}",
  "melon": "\u{1F348}",
  "watermelon": "\u{1F349}",
  "tangerine": "\u{1F34A}",
  "lemon": "\u{1F34B}",
  "banana": "\u{1F34C}",
  "pineapple": "\u{1F34D}",
  "red apple": "\u{1F34E}",
  "green apple": "\u{1F34F}",
  "pear": "\u{1F350}",
  "peach": "\u{1F351}",
  "cherries": "\u{1F352}",
  "strawberry": "\u{1F353}",
  "kiwi fruit": "\u{1F95D}",
  "avocado": "\u{1F951}",
  "coconut": "\u{1F965}",
  "mango": "\u{1F96D}",
  "banana bread": "\u{1F96C}",
  "cupcake": "\u{1F9C1}",
  "birthday cake": "\u{1F382}",
  "shortcake": "\u{1F370}",
  "pie": "\u{1F967}",
  "chocolate bar": "\u{1F36B}",
  "candy": "\u{1F36C}",
  "lollipop": "\u{1F36D}",
  "custard": "\u{1F36E}",
  "popcorn": "\u{1F37F}",
  "doughnut": "\u{1F369}",
  "cookie": "\u{1F36A}",
  "peanuts": "\u{1F95C}",
  "blueberries": "\u{1FAD0}",
  "shamrock": "\u{2618}",
};

export const ratingObj: Rating = {
  "-3":
    "Do not try this. Ever. If they are out of everything else on the menu you should just go home.",
  "-2":
    "Awful. Would only recommend this if they are out of everything else on the menu",
  "-1": "Bad. try this dish at your own risk",
  0: "Unremarkable. Wouldn't recommend",
  1: "Good not great. Would recommend if you're not sure what else to get",
  2: "Great. Would recommend to everyone to try at least once if they get a chance",
  3: "Excellent. Splendid. Marvelous. You should go out of your way to try this",
};

export interface MilkshakeReview {
  /** Between -3 and 3 */
  stars: -3 | -2 | -1 | 0 | 1 | 2 | 3;
  dishName: string;
  /** Explain why you gave the rating **/
  explanation: string;
  dateOfReview: Date;
  imgURL?: string;
}

export const milkshakeReviews: MilkshakeReview[] = [
  {
    stars: 0,
    dishName: `Banana ${foodEmojis["banana"]} `,
    explanation:
      `Banana is a classic shake flavor but there's nothing about this shake that sticks out in my mind. Maybe it's just me, but I feel
  like banana shines best as a sidekick or complimentary flavor.`,
    dateOfReview: new Date(2023, 2, 10),
  },
  {
    stars: 2,
    dishName: `Classic Chocolate ${foodEmojis["chocolate bar"]}`,
    explanation:
      "Timeless. Immortal. It’s a classic shake flavor for a reason.",
    dateOfReview: new Date(2023, 2, 13),
  },
  {
    stars: 2,
    dishName: `Banana Berry ${foodEmojis["banana"]}${
      foodEmojis["blueberries"]
    } `,
    explanation:
      `The shake has a nice balance of flavors between the sweet bananas and the tart berries,
     which create a unique and enjoyable taste. Overall, the Banana Berry shake is a pretty good option`,
    dateOfReview: new Date(2023, 2, 14),
  },
  {
    stars: 3,
    dishName: `Banana Fudge ${foodEmojis["banana"]}${
      foodEmojis["chocolate bar"]
    } `,
    explanation:
      `The shake is like a banana split, but better. The fudge is a perfect compliment to the banana flavor in this shake.
     Arguably, the best shake at cookout`,
    dateOfReview: new Date(2023, 2, 19),
  },
  {
    dateOfReview: new Date(2023, 2, 21),
    stars: 0,
    dishName: `Banana Nut ${foodEmojis["banana"]} ${foodEmojis["peanuts"]}`,
    explanation:
      "This shake really reminded me of a good banana bread. Tastes good but would only recommend if you're in the mood for banana bread",
  },
  {
    dateOfReview: new Date(2023, 2, 24),
    stars: -1,
    dishName: `Double Chocolate ${foodEmojis["chocolate bar"]} ${
      foodEmojis["chocolate bar"]
    }`,
    explanation:
      "I know what it sounds like but too much chocolate. This is just the regular chocolate shake with twice the amount of syrup as Classic Chocolate. Probably would’ve been better with chocolate chips or a CHOCOLATE ICE CREAM BASE instead of an double the amount of syrup.",
  },
  {
    dateOfReview: new Date(2023, 2, 26),
    stars: -2,
    dishName: `Chocolate Cherry${foodEmojis["chocolate bar"]} ${
      foodEmojis["cherries"]
    }`,
    explanation:
      "The chocolate totally overpowers the cherry and the cherries were too tart (granted I had this shake in late March but my point still stands), which is a shame because this shake had so much potential. Wouldn't recommend",
  },
  {
    dateOfReview: new Date(2023, 3, 2),
    stars: 0,
    dishName: `Chocolate Malt ${foodEmojis["chocolate bar"]}`,
    explanation:
      "The chocolate dominates the experience. There's barely any taste of malt in this shake. Wouldn't recommend",
  },
  {
    dateOfReview: new Date(2023, 3, 5),
    stars: 1,
    dishName: `Chocolate Chip Mint ${foodEmojis["chocolate bar"]} ${
      foodEmojis["shamrock"]
    }`,
    explanation:
      "Not as good as a Girl Scout Thin Mint cookie, but only a few things are. Only downside to this dish is I almost choked on a chocolate chip. That being said would recommend",
  },
  {
    dateOfReview: new Date(2023, 3, 7),
    stars: 2,
    dishName: `Butterfinger ${foodEmojis["chocolate bar"]} ${
      foodEmojis["peanuts"]
    }`,
    explanation:
      "Peanut butter that's kinda sweet. Chocolate. What's not to love? Would strongly recommend",
  },
  // {
  //   dateOfReview: new Date(2023, 3, 7),
  //   stars: 0,
  //   dishName: `Blueberry Cheesecake ${foodEmojis["blueberry"]} ${
  //     foodEmojis["cheesecake"]
  //   }`,
  //   explanation:
  //     "",
  // },
];

/** Remember: Ascending is lowest to highest, Descending is highest to lowest */
export type SortMethodOptions =
| 'name-asc'
| 'name-desc'
| 'rating-desc'
| 'rating-asc';

export function sortReviews(sortMethod: SortMethodOptions, arr: MilkshakeReview[]) {
  // highest to lowest
  if (sortMethod == 'rating-desc') {
    return arr.sort((a, b) => b.stars - a.stars);
  } else if (sortMethod == 'rating-asc') {
    return arr.sort((a, b) => a.stars - b.stars);
  } else if (sortMethod == 'name-desc') {
    return arr.sort((a, b) => {
      const nameA = a.dishName.toUpperCase(); // ignore upper and lowercase
      const nameB = b.dishName.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  } else if (sortMethod == 'name-asc') {
    return arr.sort((a, b) => {
      const nameA = a.dishName.toUpperCase(); // ignore upper and lowercase
      const nameB = b.dishName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }
}