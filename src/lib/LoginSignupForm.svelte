<script lang="ts">
  import Input from "./ui/Input.svelte";
  import PrimaryButton from "./ui/PrimaryButton.svelte";
  export let title: string;
  export let message: string;
  export let messageBtnText: string
</script>

<div 
  data-testid="login-container" 
  class="
    login-container 
    bg-dark-grey 
    flex 
    flex-col 
    rounded-lg 
    p-8
    max-w-sm
    md:max-w-md
  "
>
  <div 
    data-testid="form-title" 
    class="text-lg text-white mb-4"
  >
    {title}
  </div>
  <Input 
    testId="email-input" 
    placeholder="Email sddress" 
    inputType="email"
  />
  <Input 
    testId="password-input" 
    placeholder="Password" 
    inputType="password"
  />
  <PrimaryButton />
  <div 
    data-testid="signup-container" 
    class="
      signup-container 
      flex 
      flex-row 
      items-center
      justify-center
    "
  >
    <div class="text-white text-body-m mr-6">{message}</div>
    <a 
      data-testid="signup-button" 
      href="/signup" 
      class="text-red text-body-m"
    >
      {messageBtnText}
    </a>
  </div>
</div>