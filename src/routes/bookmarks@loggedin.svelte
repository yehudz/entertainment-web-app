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

  let searchQuery = ''

  function onChange(e: any) {
    searchQuery = e.target.value
  }
  
  $: searchResults = data.filter(item=> {
    if (!searchQuery) return item
    else if (
      item.title
      .toLowerCase()
      .includes(searchQuery
      .toLowerCase()) &&
      item.isBookmarked === true
      ) 
      return item
  })
</script>
<div 
  data-testid="bookmarks-section"
  class="bookmarks-section"
>
  <Searchbar 
    placeholderText="Search for bookmarked shows"
    {onChange}
  />
  {#if searchQuery}
    <AllContent 
      sectionTitle={
        !searchQuery ? 
        "" : 
        `Found ${searchResults.length} 
        results for 
        "${searchQuery}"`
      }
      movies={
         !searchQuery ? 
         bookmarkMovies : 
          searchResults
      }
    />
  {:else}
    <AllContent 
      movies={bookmarkMovies}
      sectionTitle="Bookmarked Movies"
    />
    <AllContent 
      movies={bookmarkShows}
      sectionTitle="Bookmarked TV Series"
    />
  {/if}
</div>