<style>
.container {
  display: flex;
  flex-direction: column;
  font-weight: 400;
  text-align: center;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}

.container-title {
  font-size: 2.25em;
}

.container-content {
  padding-top: 1em;
  font-size: 1em;
  max-width: 55%;
}

@media screen and (max-width: 768px) {
  .container-content {
    max-width: 100%;
  }
}

.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-overlay);
  width: 50%;
  height: 25%;
  margin-top: 2em;
  margin-bottom: 2em;
  border-radius: 10px;
  position: relative;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.index::after,
.index::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: conic-gradient(from var(--angle), var(--color-nav1), var(--color-nav2), var(--color-nav1));
  z-index: -1;
  padding: 0.175em;
  border-radius: 10px;
  animation: 5s spin linear infinite;
}

.index-entry {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
}

.index-projects {
  background: radial-gradient(circle, var(--color-projects2), var(--color-projects1));
  font-size: 1.5em;
  font-weight: 600;
  animation: scroll 2s linear infinite;
  background-size: 200% 200%;
  background-clip: text;
  color: transparent;
  text-decoration: underline;
}

.index-posts {
  background: radial-gradient(circle, var(--color-posts1), var(--color-posts2));
  font-size: 1.5em;
  font-weight: 600;
  animation: scroll 2s linear infinite;
  background-size: 200% 200%;
  background-clip: text;
  color: transparent;
}

.index-comment {
  color: var(--color-muted);
  font-size: 1em;
  font-style: italic;
}
</style>

<div class="container">
  <div class="container-title">Welcome!</div>
  <div class="container-content"> Hey, this is nova/mooncell07, welcome to my personal blogging site. I developed this
  site as part of my journey into Web Development. My main interests lie in Emulator
  Development and Network Programming though i do enjoy exploring other areas in tech. I also love playing games, currently i am actively playing Warframe,
  SCP: Roleplay and Fate/Grand Order.<br><br>

  This site uses the SvelteKit Frontend framework and color scheme is a combination of Rose Pine and Catppuccin.
  I think both the color schemes work well together.
  </div>

  <div class="index">
    <div class="index-entry">
      <div class="index-projects">Projects</div>
      <div class="index-comment">(Some of my open source projects.)</div>
    </div>

    <div class="index-entry">
      <div class="index-posts">Posts</div>
      <div class="index-comment">(Some mini-notes of what i did on a specific date.)</div>
    </div>
  </div>

  <div class="container-content">
  Any issues/pull requests to this site are welcomed.
  You can find the repository for this site <a href="https://github.com/mooncell07/site">here</a>.<br>
  </div>

  <img src="assets/red-panda-cute.png" alt="" width=100vh height=100vh style="margin-top: 2em;">

</div>
