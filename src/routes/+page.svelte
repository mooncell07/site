<style>

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


</style>

<div class="container">
  <div class="container-title">Welcome!</div>
  <div class="container-content"> Hey, this is nova/mooncell07, welcome to my personal blogging site. I developed this
  site as part of learning Web Development. My main interests include Emulator
  Development and Network Programming though i do enjoy exploring other areas in tech. I also love playing games, currently i am actively playing Warframe,
  SCP: Roleplay and Fate/Grand Order.<br><br>

  This site uses the SvelteKit Frontend framework and color scheme is a combination of Rose Pine and Catppuccin.
  I think both the color schemes work well together.
  </div>

  <div class="index">
    <div class="index-entry">
      <a href="/Projects"><div class="index-projects">Projects</div></a>
      <div class="index-comment">(Some of my open source projects.)</div>
    </div>

    <div class="index-entry">
      <a href="/Posts"><div class="index-posts">Posts</div></a>
      <div class="index-comment">(Some random chatrooms.)</div>
    </div>
  </div>

  <div class="container-content" style="margin-top:0.5em;">
  Any issues/pull requests to this site are welcomed.
  You can find the repository for this site <a href="https://github.com/mooncell07/site">here</a>.<br>

  </div>


  <img src="assets/red-panda-cute.png" alt="" width=100vh height=100vh style="margin-top: 0.5em; margin-bottom: 2em">


</div>
