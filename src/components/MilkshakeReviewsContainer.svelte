<script lang="ts">
  import MilkshakeReview from '@components/MilkshakeReview.svelte';
  import { searchResults } from '@utils/stores';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-8">
  {#each $searchResults as { explanation, dishName, stars }}
    <MilkshakeReview {explanation} {dishName} {stars} />
  {/each}
</div>
