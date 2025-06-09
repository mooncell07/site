<script>
  let color_rust1 = "#f5a97f"
  let color_rust2 = "#ed8796"

  let color_c1 = "#939ab7"
  let color_c2 = "#8caaee"

  let color_python1 = color_c2
  let color_python2 = "#f9e2af"
  
  let projects = [
  {
    name: "gb.c",
    desc: "A Nintendo Gameboy Emulator in C.",
    link: "https://github.com/mooncell07/gb.c",
    color1: color_c1,
    color2: color_c2
  },
  {
    name: "Azaka",
    desc: "An Asynchronous (Unofficial) API Wrapper for VNDB in Python.",
    link: "https://github.com/mooncell07/Azaka",
    color1: color_python1,
    color2: color_python2
  },
  {
    name: "Mayuri",
    desc: "An Asynchronous WebSocket client library written in Rust.",
    link: "https://github.com/mooncell07/mayuri",
    color1: color_rust1,
    color2: color_rust2
  },
  {
    name: "Devnull",
    desc: "A Discord Bot for assembling and disassembling through Keystone and Capstone in Python.",
    link: "https://github.com/mooncell07/devnull",
    color1: color_python1,
    color2: color_python2
  }
  ]
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 6em;
    margin: 0.75em;
    background-color: var(--color-overlay);
    transition: background-color 0.2s ease;
    position: relative;
    border-radius: 10px;
  }

  .card::after,
  .card::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: conic-gradient(from var(--angle), var(--color-accent1), var(--color-accent2), var(--color-accent1));
    z-index: -1;
    padding: 0.2em;
    animation: 2s spin linear infinite;
    border-radius: 10px;
  }

  .card:hover {
    background: var(--color-accent1);
    color: var(--color-overlay);
   }

  .card:hover a {
    color: var(--color-overlay);
    text-decoration: underline;
  }

  a {
    color: var(--color-accent2);
  }

  .card-title {
    font-weight: 600;
    font-size: 1.25em;
  }
  .card-content {
    padding-top: 0.5em;
    font-size: 0.75em;
    font-weight: 500;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .container-content {
    font-size: 0.75em;
  }

  @media screen and (min-width: 768px) {
    .card {
      width: 35%;
      height: 10em;
    }
    .card-title{
      font-size: 1.75em;
    }
    .card-content {
      font-size: 1.25em;
    }
    .container-content{
      font-size: 1.25em;
    }
}

</style>


<div class="container">

{#each projects as item, index}
<div class="card" style="--color-accent1: {item.color1}; --color-accent2: {item.color2};">
<div class="card-title">
  <a href={item.link}>{item.name}</a>
</div>
<div class="card-content">
    {item.desc}
</div>
</div>
{/each}
<div class="container-content" style="margin-top: 1em">
  Checkout more of my projects @ <a href="https://github.com/mooncell07" style="color: var(--color-link)">github/mooncell07</a>
</div>
<img src="assets/red-panda-painter.png" alt="" width=100vh height=100vh style="margin-top: 0.5em;margin-bottom: 2em;">

</div>
