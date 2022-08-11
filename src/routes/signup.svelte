<script lang="ts">
  import LoginSignupForm from "$lib/LoginSignupForm.svelte";
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
    title="Sign Up" 
    message="Already have an account?"
    messageBtnText="Login"
  />
</div>