<script lang="ts">
  let value: string = ''
  export let placeholderText: string = "Search for movies and tv shows"
</script>
<div 
  data-testid="searchbar"
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
    data-testid="searchbar-placeholder"
    bind:value={value} 
    placeholder={placeholderText}
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