<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Sansita+Swashed:wght@300..900&display=swap" rel="stylesheet">

<script>
  import '../app.css'
</script>

<style>
.nav {
  background: radial-gradient(circle, var(--color-nav1) 20%, var(--color-nav2) 100%);
  animation: scroll 5s linear infinite;
  padding: 0.5em 0em 0.5em 1.5em;
  background-size: 200% 200%;
}

.nav-title {
  color: var(--color-text);
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 1.25em;
  text-shadow: var(--color-text) 0px 0px 30px;
  -webkit-font-smoothing: antialiased;
}

footer {
  background-color: var(--color-overlay);
  bottom: 0;
  padding: clamp(0.25rem, 0.5vw, 1rem);
  font-size: clamp(0.5rem, 1vw, 1rem);
  width: 100%;
  position: fixed;
}

</style>

<div class="nav">
  <div class="nav-title"> Mooncell07 </div>
</div>

<slot />
<br>

<footer>
  © 2025 mooncell07
  |
  <a href="https://www.flaticon.com/free-stickers/red-panda" title="red panda stickers">Red panda stickers created by Surfsup.Vector - Flaticon</a>
</footer>
