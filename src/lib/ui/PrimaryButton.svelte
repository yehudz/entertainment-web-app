<script lang="ts">
  export let buttonText: string = ''
</script>

<button 
  data-testid="login-button" 
  class="
    text-white
    text-body-m 
    bg-red 
    primary-button 
    rounded-lg 
    hover:bg-white 
    hover:text-black 
    w-full
    mt-10
    mb-6
  "
  >
    {buttonText}
</button>