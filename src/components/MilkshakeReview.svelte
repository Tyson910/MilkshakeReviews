<script lang="ts">
  import type { MilkshakeReview } from '@assets/milkshake-data';
  import { ratingObj } from '@assets/milkshake-data';
  export let dishName: MilkshakeReview['dishName'] = '';
  export let stars: MilkshakeReview['stars'];
  export let explanation: MilkshakeReview['explanation'] = '';
  let showTooltip = false;
</script>

<div class="rounded-sm bg-white p-5 shadow-sm scroll-mt-10" id={dishName}>
  <div class="">
    <p class="text-xl font-semibold text-gray-900">{dishName}</p>
    <p class="text-sm text-gray-500 mt-1">
      {stars} stars
    </p>
    <button
      type="button"
      class="sm:w-max text-sm text-gray-500 italic cursor-pointer underline"
      on:mouseenter={() => (showTooltip = true)}
      on:mouseleave={() => (showTooltip = false)}
      on:click={() => (showTooltip = !showTooltip)}
    >
      What does this mean?
    </button>

    {#if showTooltip}
      <div
        class="text-sm p-2.5 border-black border w-64 bg-gray-900 text-white rounded-sm opacity-100 absolute"
      >
        {ratingObj[stars]}
      </div>
    {/if}
    <p class="mt-3 text-base text-gray-600">{explanation}</p>
  </div>
</div>
