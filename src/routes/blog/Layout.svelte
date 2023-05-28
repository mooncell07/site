<script>
    export let title;
    export let date;
</script>

<div class="container page-overloads">
    <emoticon>{title}</emoticon>
    <date>Date: {date}</date>

    <slot />
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
</style>
