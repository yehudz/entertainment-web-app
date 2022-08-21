<script lang="ts">
  import data from '../data.json'
  import AllContent from '$lib/views/AllContent.svelte'
  
  let movies = data.filter(item=>item.category === 'Movie')
</script>
<div 
  data-testid="movies-section"
  class="movies-section"
>
  <AllContent 
    movies={movies}
    sectionTitle="Movies"
  />
/>
</div>