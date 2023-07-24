<script lang="ts">
  export let data;
  const { post } = data;
</script>

<h1>{ post.title }</h1>

<p>{ post.body }</p>

<a href="/blog">{'<<'} Back</a>
