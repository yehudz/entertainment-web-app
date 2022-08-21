<script lang="ts">
  import data from '../data.json'
  import AllContent from '$lib/views/AllContent.svelte'
  import Searchbar from '$lib/ui/Searchbar.svelte';
  let movies = data.filter(item=>item.category === 'Movie')

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
      .toLowerCase())) 
      return item
  })
</script>
<div 
  data-testid="movies-section"
  class="movies-section"
>
  <Searchbar 
    placeholderText="Search for movies"
    {onChange}

  />
  <AllContent 
    movies={ 
      !searchQuery ? 
      movies : 
      searchResults
    }
    sectionTitle={
      !searchQuery ? 
      "Movies" : 
      `Found ${searchResults.length} 
      results for 
      "${searchQuery}"`
    }
  />
</div>