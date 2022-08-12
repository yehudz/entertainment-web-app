<script lang="ts">
  import data from '../data.json'
  import TrendingSection from '$lib/ui/TrendingSection/index.svelte'
  
  let trending = data.filter(item=>item.isTrending === true)
</script>

<TrendingSection data={trending}/>