<script>

	let { data } = $props();

	function clean(line){
		let index = line.indexOf(":");
		return "<h3>" + line.substring(index+1, line.length);
		}

		function is_main(line){
			let struct = line.split(":", 2);
			return struct[0][4] == "0";
		}

</script>

<style>
	.posts-container{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex: 1;
	}

	.posts-main{
		padding-top: 1em;
		padding-bottom: 1em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 75vw;
		height: 100%;
		background-color: var(--color-overlay);
}

	.sub-entry{
		display: flex;
		max-width: 80%;
		margin-top: 0.75em;
	}

	.text {
  	background-color: #313244;
		color: var(--color-text);
 		padding: 1em;
 		border-radius: 10px;
		height: max-content;

		font-size: 0.75em;
	}

	img {
		height: 2em;
		width: 2em;
	}

  @media screen and (min-width: 768px) {
  	.posts-main {
  		width: 60vw;
  		height: 100%;
  	}
    img {
    	height: 4em;
    	width: 4em;
    }
}
</style>


<div class="posts-container">
	<div class="posts-main">
		{#each data.lines as l, i}
			{#if l.startsWith("<h1>")}
				{#if is_main(l)}
					<div class="sub-entry">
						<img src="assets/red-panda-smiling.png" alt="">
						<div class="text">
							{@html clean(l)}
						</div>
					</div>

				{:else}
					<div class="sub-entry" style="justify-content: right;max-width: 100%;padding-left: 20%;">
						<div class="text">
							{@html clean(l)}
						</div>
						<img src="assets/red-panda-running.png" alt="">
					</div>

				{/if}

			{/if}
	
		{/each}

	</div>

</div>

