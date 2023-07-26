<script lang="ts">
  import type { ActionData } from './$types';
  export let form: ActionData;
  import { enhance } from "$app/forms";
  let isLogin = true;

  const removeError = (e) => {
    const input = e.target.closest('input');
    input.classList.remove('inputError');
  }

  const handleSubmit = () => {
    return () => {
      if (!isLogin) {
        window.location.href = '/login?registered=true';
      }
    }
  }
</script>


<form method="post" use:enhance>
  <h1>{isLogin ? "Log In" : "Sign Up"}</h1>

  {#if form?.missing}
    <p class="textError">Email and password fields are required</p>
  {/if}
  {#if form?.mismatch}
    <p class="textError">Your emails do not match</p>
  {/if}
  {#if form?.success}
    <p class="textSuccess">Success!</p>
  {/if}

  <input on:input={removeError} type="text" class:inputError={form?.missing} name="email" id="email" placeholder="Email">
  {#if !isLogin }
    <input on:input={removeError} type="text" class:inputError={form?.missing} name="emailconfirm" id="emailconfirm" placeholder="Confirm email...">
  {/if}
  <input on:input={removeError} type="password" class:inputError={form?.missing} name="password" id="password" placeholder="Password">
  {#if isLogin}
    <input type="submit" formaction="?/loginUser" value="Log In">
    <p>Don't have an account? <a on:click={() => isLogin = false} href="javascipt:;">Sign up here</a></p>
  {:else}
    <input type="submit" formaction="?/registerUser" value="Sign up">
    <p>Already have an account? <a on:click={() => isLogin = true} href="javascipt:;">Log in here</a></p>
  {/if}
  
</form>

<style lang="postcss">
  .textError {
    color: darkred;
  }
  .textSuccess {
    color: yellowgreen;
  }
  .inputError {
    box-shadow: 0 0 4px 4px #8b000088;
  }
</style>
