<script lang="ts">
  import LoginSignupForm from "$lib/views/LoginSignupForm.svelte";
</script>

<div 
  class="
    login-container 
    flex 
    justify-center 
    items-center
    h-screen
    w-screen
  "
  >
  <LoginSignupForm 
    title="Login" 
    message="Don't have an account?"
    messageBtnText="Sign Up"
  />
</div>