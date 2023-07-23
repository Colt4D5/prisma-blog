<script>
	import '@picocss/pico';
	import '../app.postcss';
</script>

<svelte:head>
	<title>Arbor Web Design</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap" rel="stylesheet">
</svelte:head>


<header>
	<div class="inner">
		<nav>
			<ul>
				<li id="nav-title">Arbor Web Design</li>
			</ul>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>

<main>
	<div class="container">
		<slot />
	</div>
</main>

<footer>
	<div class="container">
		copyright &copy; { new Date().getFullYear() } | Arbor Web Design | All rights reserved
	</div>
</footer>

<style lang="postcss">
	header {
		& .inner {
			padding: 1rem 4rem;
		}
	}

	main {
		min-height: calc(100dvh - 180px);
		padding-block: 3rem 6rem;
	}

	footer {
		background-color: #ffffff08;
		padding: 1rem;
		text-align: center;
	}
</style>
