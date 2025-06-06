

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.rMruUgLA.js","_app/immutable/chunks/Bj7gxxQb.js","_app/immutable/chunks/DGWfHUJN.js","_app/immutable/chunks/phJVDUCB.js"];
export const stylesheets = ["_app/immutable/assets/2.Dk_WDX59.css"];
export const fonts = [];
