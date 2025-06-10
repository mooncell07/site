<script>
	let { data } = $props();
	function clean_blog_name(name){
		return name.replace(".md", "");
	}

	function build_blog_url(qname){
		return "/Posts/" + qname;
	}

</script>

<style>
.index-item {
  background-color: var(--color-projects2);
  color: var(--color-overlay);
  font-size: 1.5em;
  font-weight: 600;
  padding: 0.25em;
  border-radius: 10px;
}
</style>

<div class="container">
<div class="container-title">
	Chatrooms:
</div>

	<div class="index">
	{#each data.blogs as b, i}
		<div class="index-entry">
		<a href={build_blog_url(b[0])}>
			<div class="index-item">{clean_blog_name(b[0])}
			</div>
		</a>
		{#if (i == 0)}
				<div class="index-comment">(latest)</div>
		{/if}
		</div>
	{/each}
	</div>

</div>
