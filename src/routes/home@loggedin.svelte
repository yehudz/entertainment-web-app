<script lang="ts">
  import data from '../data.json'
  import TrendingSection from '$lib/ui/TrendingSection/index.svelte'
  import AllContent from '$lib/views/AllContent.svelte'
  import Searchbar from '$lib/ui/Searchbar.svelte';
  
  let searchQuery = ''

  let trending = data.filter(item=>item.isTrending === true)
  let allContent = data.filter(item=>item.isTrending === false)
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
<Searchbar 
  {onChange}
/>

{#if !searchQuery}
  <TrendingSection data={trending}/>
{/if}

<AllContent 
  sectionTitle={
    !searchQuery ? 
    "Recommend for you" : 
    `Found ${searchResults.length} 
    results for 
    "${searchQuery}"`
  }
  movies={
    !searchQuery ? 
    allContent : 
    searchResults
  }
/>
 
