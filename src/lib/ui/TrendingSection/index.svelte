<script lang="ts">
  import type {Movie} from '../../../typings/common.types'
  export let data: Movie[]
  import TrendingSectionItem from "./TrendingSectionItem.svelte";
</script>
<div 
  class="
    text-md-light
    md:text-lg
    text-white 
    pl-4 
    my-4
  "
>
  Trending
</div>
<div 
  data-testid="trending-section" 
  class="
    flex
    flex-row
    trending-section
    overflow-x-scroll
    gap-6
    pl-4
  "
>
    {#each data as item}
      <TrendingSectionItem 
        title={item.title}
        image={item.thumbnail.regular.small}
        bookmarked={item.isBookmarked}
        rating={item.rating}
        year={item.year}
        category={item.category}
      />
    {/each}

</div>