<script lang="ts">
  import data from '../data.json'
  import AllContent from '$lib/views/AllContent.svelte'
  
  let allContent = data.filter(item=>item.isBookmarked === true)
</script>

<AllContent 
  movies={allContent}
/>