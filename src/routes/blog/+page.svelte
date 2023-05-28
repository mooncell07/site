<script>
    export let data;
</script>

<div class="container blog-overloads">
    <h2><emoticon>….〆(･ω･。)</emoticon></h2>

    {#each data.blogs as blog}
        <div class="postcard">
            <a href={blog.path}>
                <h1>{blog.meta.title}</h1>
                {blog.meta.description}
            </a>
        </div>
    {/each}
</div>

<style>
    .postcard {
        display: flex;
        padding: 20px 20px 20px 20px;
        border-radius: 25px;
        background-color: #181825;
        flex-direction: column;
        margin-bottom: 2%;
        max-width: 90%;
        transition: 0.5s ease;
        cursor: pointer;
    }

    .postcard a {
        color: unset;
    }

    .blog-overloads {
        margin-top: 10%;
        font-size: large;
        justify-content: unset;
    }

    h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: bold;
        font-size: xx-large;
    }
    .postcard:hover {
        transform: scale(1.01);
        box-shadow: 5px 5px 15px #181825;
    }
</style>
