<script lang="ts">
  import type {Movie} from '../../typings/common.types';
  import Thumbnail from '$lib/ui/Thumbnail.svelte';
  export let movies: Movie[]
</script>

<div
  data-testid="all-content"
  class="content-container"
>
  {#each movies as content}
    <Thumbnail 
      title={content.title}
      image={content.thumbnail.regular.small}
      year={content.year}
      category={content.category}
      rating={content.rating}
      bookmark={content.isBookmarked}
    />
  {/each}
</div>