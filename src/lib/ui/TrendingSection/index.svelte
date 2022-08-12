<script lang="ts">
  import type {Movie} from '../../../typings/common.types'
  export let data: Movie[]
  import TrendingSectionItem from "./TrendingSectionItem.svelte";
</script>
  
<div 
  data-testid="trending-section" 
  class="trending-section"
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