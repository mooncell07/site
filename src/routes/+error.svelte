<script>
    // @ts-nocheck
    import emote from "/src/lib/headings.json";
    import { page } from "$app/stores";
</script>

<div class="error-container">
    <b><err>{$page.status}</err> {$page.error.message}</b>
    <emoticon>{emote["error"]}</emoticon>
</div>

<style>
    err {
        font-style: italic;
        color: var(--lnkbase);
    }

    .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        animation: fade 0.5s;

        font-size: calc(3vw + 3vh);
        color: var(--maintxt);
        width: 100%;
        height: 100%;
    }
</style>
