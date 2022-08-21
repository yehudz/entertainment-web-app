<script lang="ts">
  import data from '../data.json'
  import TrendingSection from '$lib/ui/TrendingSection/index.svelte'
  import AllContent from '$lib/views/AllContent.svelte'
  import Searchbar from '$lib/ui/Searchbar.svelte';
  
  let trending = data.filter(item=>item.isTrending === true)
  let allContent = data.filter(item=>item.isTrending === false)
</script>
<Searchbar />

<TrendingSection data={trending}/>
<AllContent 
  sectionTitle="Recommend for you"
  movies={allContent}
/>