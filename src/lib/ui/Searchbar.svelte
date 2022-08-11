<script lang="ts">
  let value: string = ''
</script>
<div 
  class="
    search-bar-container 
    flex 
    flex-row 
    items-center"
  >
  <div class="icon pr-4">
    <img 
      src="images/icon-search.svg" 
      alt="Search"
    >
  </div>
  <input 
    bind:value={value} 
    placeholder="Search" 
    class="
      search-bar 
      text-white 
      text-md-light 
      py-2"
    >
</div>