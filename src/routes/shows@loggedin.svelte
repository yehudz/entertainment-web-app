<script lang="ts">
  import data from '../data.json'
  import AllContent from '$lib/views/AllContent.svelte'
  import Searchbar from '$lib/ui/Searchbar.svelte';
  let series = data.filter(item=>item.category === 'TV Series')
</script>
<div 
  data-testid="shows-section"
  class="shows-section"
>
  <Searchbar />
  <AllContent 
    movies={series}
    sectionTitle="TV Series"
  />
/>
</div>