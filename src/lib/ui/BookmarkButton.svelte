<script lang="ts">
  export let bookmark: boolean = false
</script>

<div 
    class="
      bookmark-icon
      flex
      flex-row
      justify-center
      items-center
      absolute
      top-2
      right-4
      w-8
      h-8
      bg-black/[.4]
      hover:bg-black/[.7]
      rounded-full
      cursor-pointer
      z-50
    "
  >
    <img 
      data-testid="bookmark-button"
      src={
      !bookmark ? 
      'images/icon-bookmark-empty.svg' :
      'images/icon-bookmark-full.svg'
      } alt="">
  </div>