<script lang="ts">
  import Menu from "$lib/ui/Menu.svelte";
import Searchbar from "$lib/ui/Searchbar.svelte";
</script>

<div class="loggedin-container">
  <Menu />
  <div class="content overflow-hidden">
    <slot />
  </div>
</div>