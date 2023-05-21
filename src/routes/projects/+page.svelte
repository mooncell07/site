<script lang="ts">
    const USER = "mooncell07";
    let base = "https://github-readme-stats.vercel.app/api/pin/";
    let defaults = {
        username: USER,
        title_color: "181825",
        text_color: "4c4f69",
        hide_border: true,
        cache_seconds: "86400",
    };
    let prjcts = {
        lemon: "f9e2af",
        site: "cba6f7",
        "binary-river": "89b4fa",
        Azaka: "f5c2e7",
    };
    let cards: URL[] = [];

    function applyDefaults(urlObj: URL) {
        for (let i in defaults) {
            urlObj.searchParams.set(
                encodeURIComponent(i),
                encodeURIComponent(defaults[i as keyof typeof defaults])
            );
        }
    }

    function genCards() {
        for (let p in prjcts) {
            let urlObj = new URL(base);
            applyDefaults(urlObj);
            urlObj.searchParams.set("repo", p);
            urlObj.searchParams.set(
                "bg_color",
                prjcts[p as keyof typeof prjcts]
            );
            cards.push(urlObj);
        }
    }

    genCards();
</script>

<div class="container">
    <emoticon>(⌐■_■)</emoticon>
    Some of my projects on GitHub
    <div class="cardDiv">
        {#each cards as card}
            <p>
                <a
                    href="https://github.com/{USER}/{card.searchParams.get(
                        'repo'
                    )}"
                >
                    <img
                        src={card.toString()}
                        alt="mooncell07/{card.searchParams.get('repo')}"
                    />
                </a>
            </p>
        {/each}
    </div>
</div>

<style>
    .cardDiv {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        gap: 5%;
    }

    .cardDiv img {
        max-width: 100%;
        height: auto;
        transition: 0.5s ease;
        cursor: pointer;
    }

    .cardDiv img:hover {
        transform: scale(1.05);
        box-shadow: 5px 5px 15px #181825;
    }
</style>
