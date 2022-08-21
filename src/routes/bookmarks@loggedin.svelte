<script lang="ts">
  import data from '../data.json'
  import AllContent from '$lib/views/AllContent.svelte'
  import Searchbar from '$lib/ui/Searchbar.svelte';
  let bookmarkMovies = data.filter(item=>{
    if (item.isBookmarked && item.category === 'Movie') return item
  })
  let bookmarkShows = data.filter(item=>{
    if (item.isBookmarked && item.category === 'TV Series') return item
  })
</script>
<div 
  data-testid="bookmarks-section"
  class="bookmarks-section"
>
  <Searchbar />
  <AllContent 
    movies={bookmarkMovies}
    sectionTitle="Bookmarked Movies"
  />
  <AllContent 
  movies={bookmarkShows}
  sectionTitle="Bookmarked TV Series"
/>
</div>