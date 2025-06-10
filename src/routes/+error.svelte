<script>
	import { page } from '$app/state';
</script>

<style>
  .error-container{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    
  }
  .error-content {
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: clamp(0.5em, 2em, 2.5em);
    padding-right: 0.2em;
    margin-top: -1em;
  }
  status {
    color: var(--color-nav1);
    font-weight: 700;
  }
</style>


<div class="error-container">

  <img src="/assets/red-panda-log.png" alt="" width=150vh height=150vh>
  <div class="error-content">
    <status>{page.status}</status>
    {page.error.message}
  </div>
</div>
