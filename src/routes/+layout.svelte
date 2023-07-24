<script>
	import '@picocss/pico';
	import '../app.postcss';
</script>

<svelte:head>
	<title>Arbor Web Design</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" >
	<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap" rel="stylesheet">
</svelte:head>

<main>
	<div class="container">
		<slot />
	</div>
</main>

<style lang="postcss">
	main {
		min-height: calc(100dvh - 180px);
		padding-block: 3rem 6rem;
	}
</style>
