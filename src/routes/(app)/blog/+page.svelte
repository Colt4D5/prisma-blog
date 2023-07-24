<script lang="ts">
  export let data;
</script>


<h1>Blog & stuff</h1>

{#each data.posts as post }
  <div class="post">
    <h2>{ post.title }</h2>
    <p>{ post.body }</p>
    <a role="button" href="/blog/{post.id}">Read Post</a>
  </div>
{/each}

<style lang="postcss">
  .post {
    background-color: #ffffff08;
    border-radius: 1rem;
    margin-bottom: 1rem;
    padding: 1.5rem 1rem 1rem;
  }
</style>
