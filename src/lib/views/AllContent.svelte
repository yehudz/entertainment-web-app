<script lang="ts">
  import type {Movie} from '../../typings/common.types';
  import Thumbnail from '$lib/ui/Thumbnail.svelte';
  export let movies: Movie[]
  export let sectionTitle:  string
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
  {sectionTitle}
</div>
<div
  data-testid="all-content"
  class="
    flex
    flex-row
    flex-wrap
    content-container 
    pl-4
    gap-6
  "
>
  {#each movies as content}
    <Thumbnail 
      title={content.title}
      image={content.thumbnail.regular.large}
      year={content.year}
      category={content.category}
      rating={content.rating}
      bookmark={content.isBookmarked}
    />
  {/each}
</div>