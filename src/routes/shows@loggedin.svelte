<script lang="ts">
  import data from '../data.json'
  import AllContent from '$lib/views/AllContent.svelte'
  import Searchbar from '$lib/ui/Searchbar.svelte';
  let series = data.filter(item=>item.category === 'TV Series')

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
  data-testid="shows-section"
  class="shows-section"
>
  <Searchbar 
    placeholderText="Search for TV series"
    {onChange}
  />
  <AllContent 
    movies={
      !searchQuery ? 
      series : 
      searchResults}
    sectionTitle={
      !searchQuery ? 
      "TV series" : 
      `Found ${searchResults.length} 
      results for 
      "${searchQuery}"`
    }
  />
</div>