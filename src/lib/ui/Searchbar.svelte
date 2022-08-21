<script lang="ts">
  let value: string = ''
</script>
<div 
  class="
    search-bar-container 
    flex 
    flex-row 
    items-center
    p-4
  "
  >
  <div class="icon pr-4">
    <img 
      src="images/icon-search.svg" 
      alt="Search"
    >
  </div>
  <input 
    bind:value={value} 
    placeholder="Search for movies and tv shows" 
    class="
      search-bar 
      text-white 
      text-md-light 
      py-2
      placeholder:text-sm
      md:placeholder:text-md-light
    "
    >
</div>