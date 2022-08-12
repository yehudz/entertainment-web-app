<script lang="ts">
  import Menu from "$lib/ui/Menu.svelte";
</script>

<div class="loggedin-container">
  <Menu />
  <div class="content overflow-hidden">
    <slot>
      
    </slot>
  </div>
</div>