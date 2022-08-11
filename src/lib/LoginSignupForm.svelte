<script lang="ts">
  import Input from "./ui/Input.svelte";
  import PrimaryButton from "./ui/PrimaryButton.svelte";
  export let title: string;
</script>

<div data-testid="login-container" class="login-container bg-dark-grey flex flex-col rounded-lg">
  <div data-testid="form-title" class="text-lg text-white">{title}</div>
  <Input testId="email-input" placeholder="Email sddress" inputType="email"/>
  <Input testId="password-input" placeholder="Password" inputType="password"/>
  <PrimaryButton />
  <div data-testid="signup-container" class="signup-container flex flex-row items-center">
    <div class="text-white text-sm">Don't have an account?</div>
    <a data-testid="signup-button" href="/signup" class="text-red text-sm">Sign Up</a>
  </div>
</div>