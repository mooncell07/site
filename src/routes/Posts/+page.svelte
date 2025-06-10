<script>

	let { data } = $props();

	function clean(line){
		let struct = line.split(":", 2);
		struct[0] = "<h1>"
		return struct.join("");
	}

</script>

<style>
	.posts-container{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--color-base);
		align-content: center;
		height: 100vh;
	}
	.posts-main{
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		height: 100vh;
		width: 50vw;
		text-align: left;
		background-color: var(--color-overlay);
		flex: 1;
}

	.entry{
		display: flex;
		flex-direction: row;
	}

	.text {
  	background-color: #313244;
		color: var(--color-text);
 		padding: 0.75em;
 		border-radius: 10px;
		margin-top: 1em;
		height: max-content;

		font-size: 0.25em;
		font-weight: 300em;
	}

	pad {
		width: 6vh;
	}

	img {
		height: 6vh;
		width: 6vh;
	}

  @media screen and (min-width: 768px) {
    .text {
      font-size: 0.5em;
    }
    img {
    	height: 12vh;
    	width: 12vh;
    }
    pad {
    	width: 12vh
    }
}
</style>

<div class="posts-container">
	<div class="posts-main">
		{#each data.html as h, i}
			{#if h.startsWith("<h1>")}
				<div class="entry">

					{#if i == (data.html.length-2)}
					<img src="assets/red-panda-smiling.png" alt="">
					{:else}
					<pad></pad>
					{/if}
					
					<div class="text">
					{@html clean(h)}
					</div>
	
				</div>
			{/if}
		{/each}

	</div>

</div>

