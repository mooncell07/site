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
  padding: 0.5em 0em 0.5em 1.5em;
  font-size: 0.75em;
  width: 100%;
  position: fixed;
}

.webring {
width:max-content;
border-radius: 5px;
color: var(--color-base);
padding: 2.5px;
}

.ctp {
  background: linear-gradient(120deg, var(--color-nav1), var(--color-nav2), var(--color-posts1), var(--color-posts2), var(--color-projects1), var(--color-projects2));
}

.threet1t {
  background: linear-gradient(120deg, var(--color-projects2), var(--color-flamingo));
}

.arrow {
  font-size: 1.5em;
}

@media screen and (min-width: 768px) {
  footer {
    font-size: 1em;
  }
  .arrow {
    font-size: 1em;
  }
}

</style>

<div class="main">
<div class="nav">
  <div class="nav-title"><a href="/" style="color: var(--color-text)">Mooncell07</a></div>
</div>

<slot />
<br>
<footer>
  © 2025 mooncell07
  |
  <a href="https://ctp-webr.ing/nova/previous" class="arrow">&larr;</a
><a href="https://ctp-webr.ing/" class="webring ctp">ctp-webring</a
><a href="https://ctp-webr.ing/nova/next" class="arrow">&rarr;</a>
  |
 <a href="https://3t1t.neocities.org/nova/previous" class="arrow">&larr;</a
><a href="https://3t1t.neocities.org/" class="webring threet1t">3t1t-webring</a
><a href="https://3t1t.neocities.org/nova/next" class="arrow">&rarr;</a>
  |
  <a href="/">Home</a>
  |
   <a href="/Projects">Projects</a>
  |
   <a href="/Posts">Posts</a>
  |
  <a href="https://www.flaticon.com/free-stickers/red-panda" title="red panda stickers">Red panda stickers created by Surfsup.Vector - Flaticon</a>
</footer>
</div>
