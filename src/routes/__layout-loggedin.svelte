<script lang="ts">
  import Menu from "$lib/Menu.svelte";
</script>

<div class="loggedin-container">
  <Menu />
  <div class="content">
    <slot>
      
    </slot>
  </div>
</div>