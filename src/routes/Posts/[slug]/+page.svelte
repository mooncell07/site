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
		margin-top: 2em;
		margin-bottom: 4em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 90vw;
		height: 100%;
		background-color: var(--color-overlay);
		outline: 0.1em solid var(--color-nav2);
}
	.posts-title{
		padding-bottom: 0.5em;
		padding-top: 0.5em;
		font-size: clamp(1em, 1.75vw, 5em);
		font-style: italic;
		color: var(--color-muted);
	}

	.sub-entry{
		display: flex;
		max-width: 80%;
		margin-top: clamp(0.75em, 1vw, 3em);
	}

	.text {
  	background-color: var(--color-surface);
		color: var(--color-text);
 		padding: 1em;
 		border-radius: 10px;
		height: max-content;

		font-size: clamp(0.75em, 1vw, 3em);
	}

	img {
  	width: clamp(2em, 3.5vw, 8em);
  	height: clamp(2em, 3.5vw, 8em);
	}

  @media screen and (min-width: 768px) {
  	.posts-main {
  		width: 60vw;
  		height: 100%;
  	}  
}

	pad {
		padding-top: 0.5em;
	}
</style>

<div class="posts-container">
	<div class="posts-main">
		<center class="posts-title">Chatroom: {data.name}</center>
		{#each data.lines as l, i}
			{#if l.startsWith("<h1>")}
				{#if is_main(l)}
					<div class="sub-entry">
						<img src="/assets/red-panda-smiling.png" alt="">
						<div class="text">
							{@html clean(l)}
						</div>
					</div>

				{:else}
					<div class="sub-entry" style="justify-content: right;max-width: 100%;padding-left: 20%;">
						<div class="text">
							{@html clean(l)}
						</div>
						<img src="/assets/red-panda-running.png" alt="">
					</div>

				{/if}

			{/if}
	
		{/each}
		<pad></pad>

	</div>

</div>

