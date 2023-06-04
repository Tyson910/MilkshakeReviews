import { derived, writable } from "svelte/store";
import type { SortMethodOptions } from "@assets/milkshake-data";
import { milkshakeReviews, sortReviews } from "@assets/milkshake-data";

const sortMethod = writable<SortMethodOptions>("rating-desc");
const searchQuery = writable<string>("");

const searchResults = derived<[typeof sortMethod, typeof searchQuery], typeof milkshakeReviews>(
  [sortMethod, searchQuery],
  ([$sortMethod, $searchQuery], set) => {
    // first filter reviews based on search query
    const filteredReviews = milkshakeReviews.filter(({ dishName }) =>
      dishName.toLowerCase().includes($searchQuery.toLowerCase())
    );
    // then sort by selected method
    const sortedAndFilteredReviews = sortReviews($sortMethod, [
      ...filteredReviews,
    ]);
    set(sortedAndFilteredReviews);
  },
);

export { searchQuery, searchResults, sortMethod };
