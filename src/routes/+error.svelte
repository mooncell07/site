<script>
    // @ts-nocheck
    import emote from "/src/lib/headings.json";
    import { page } from "$app/stores";
</script>

<div class="error-content">
    <div class="error-para">
        <b><err>{$page.status}</err> {$page.error.message}</b>
    </div>
    <emoticon>{emote["error"]}</emoticon>
</div>

<style>
    err {
        font-style: italic;
        color: var(--lnkbase);
    }
</style>
