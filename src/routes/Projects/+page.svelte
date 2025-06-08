<script>
  let color_rust = "#f5a97f"
  let color_c = "#939ab7"
  let color_python = "#8aadf4"
  let projects = [
  {
    name: "gb.c",
    desc: "A Nintendo Gameboy Emulator in C.",
    link: "https://github.com/mooncell07/gb.c",
    color: color_c
  },
  {
    name: "Azaka",
    desc: "An Asynchronous (Unofficial) API Wrapper for VNDB in Python.",
    link: "https://github.com/mooncell07/Azaka",
    color: color_python
  },
  {
    name: "Mayuri",
    desc: "An Asynchronous WebSocket client library written in Rust.",
    link: "https://github.com/mooncell07/mayuri",
    color: color_rust
  },
  {
    name: "Devnull",
    desc: "An Discord Bot for assembling and disassembling through Keystone and Capstone in Python.",
    link: "https://github.com/mooncell07/devnull",
    color: color_python
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
    height: 20vh;
    margin: 0.75em;
    background-color: var(--color-overlay);
    outline: 3px solid var(--accent-color);
    transition: background-color 0.2s ease;
  }

  .card:hover {
    background-color: var(--accent-color);
    color: var(--color-overlay);
  }

  .card:hover a {
    color: var(--color-overlay);
    text-decoration: underline;
  }

  a {
    color: var(--accent-color);
  }

  .card-title {
    font-weight: 600;
    font-size: 1em;
  }
  .card-content {
    padding-top: 0.5em;
    font-size: 0.5em;
    font-weight: 500;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    .card {
      width: 35%;
    }
    .card-title{
      font-size: 1.5em;
    }
    .card-content {
      font-size: 1em;
    }
}

</style>


<div class="container">

{#each projects as item, index}
<div class="card" style="--accent-color: {item.color};">
<div class="card-title">
  <a href={item.link}>{item.name}</a>
</div>
<div class="card-content">
    {item.desc}
</div>
</div>
{/each}

<img src="assets/red-panda-painter.png" alt="" width=100vh height=100vh style="margin-top: 1em;">

</div>
