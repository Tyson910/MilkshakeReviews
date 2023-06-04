<script>
  import { searchQuery, sortMethod } from '@utils/stores';
</script>

<form class="fixed w-full bg-primary top-0 z-50 shadow">
  <div class="max-w-screen-lg mx-auto py-2 px-4 flex">
    <input
      type="text"
      class="border-gray-300 py-2 px-4 flex-grow rounded-sm mr-2"
      placeholder="Search for milkshake..."
      bind:value={$searchQuery}
    />
    <select class="border-gray-300 mr-2 shadow-sm" bind:value={$sortMethod}>
      <option selected value="name-desc">Name (Z-A)</option>
      <option value="name-asc">Name (A-Z)</option>
      <option value="rating-desc">Rating (High to Low)</option>
      <option value="rating-asc">Rating (Low to High)</option>
    </select>
    <a href="#" class="bg-secondary py-2 px-4 text-white rounded">Search</a>
  </div>
</form>
