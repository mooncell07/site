<script>
    import { page } from "$app/stores";
</script>

<div class="error-content">
    <div class="error-para">
        <b><err>{$page.status}</err> {$page.error.message}</b>
    </div>
    <div class="error-emoticon">(¯―¯ ٥)</div>
</div>

<style>
    err {
        font-style: italic;
        color: #f38ba8;
    }
</style>
