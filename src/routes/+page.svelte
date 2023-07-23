<script lang="ts">
  const text: String = 'TypeScript';
</script>


<h1>Welcome to { text }</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form action="?/createNewPost" method="post">
  <input type="text" name="title" id="title" placeholder="Title...">
  <textarea name="body" id="body" cols="30" rows="10" placeholder="Post Content..."></textarea>
  <input type="submit" value="Create Post">
</form>

<style lang="postcss">
  h1 {
    color: darkolivegreen;
  }
</style>
