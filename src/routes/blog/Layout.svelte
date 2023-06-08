<script>
    export let title;
    export let date;
</script>

<div class="container page-overloads">
    <emoticon>{title}</emoticon>
    <date>Date: {date}</date>
    <set-wrap><slot /></set-wrap>
</div>

<style>
    date {
        padding-left: 20%;
        opacity: 50%;
    }
    .page-overloads {
        margin-top: 20%;
        justify-content: unset;
    }
    set-wrap {
        max-width: var(--max-word-lim-blg);
    }

</style>
