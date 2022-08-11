<script lang="ts">
  import { onMount } from "svelte";

  export let placeholder: string = ''
  export let inputType: string = 'text'
  export let testId: string = ''
  let value: string = ''
  let error: boolean = false
  let inputElement: HTMLInputElement
  
  onMount(()=> {
    inputElement.type = inputType
  })

  function checkInputValidation() {
    if (!value) emptyInput()
  }

  function removeError() {
    if (value) {
      error = false
      inputElement.classList.remove('error')
    }
  }

  function emptyInput() {
    error = true
    inputElement.classList.add('error')
  }
</script>

<div class="input-container relative flex items-center text-body-m">
  <input 
    data-testid={testId}
    on:keyup={removeError}
    on:blur={()=> checkInputValidation()}
    bind:value={value}
    bind:this={inputElement} 
    type="text" 
    placeholder={placeholder} 
    class="input py-4 text-white pl-4"
  >
  {#if error}
    <div class="text-red absolute top-4 right-4 text-body-m">Can't be empty</div>
  {/if}
</div>