export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","assets/red-panda-cute.png","assets/svelte.svg","red-panda.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.YyzHZ9U4.js",app:"_app/immutable/entry/app.81HTz5iX.js",imports:["_app/immutable/entry/start.YyzHZ9U4.js","_app/immutable/chunks/Ce4ZZ9fd.js","_app/immutable/chunks/DGWfHUJN.js","_app/immutable/chunks/C6HXeCmf.js","_app/immutable/entry/app.81HTz5iX.js","_app/immutable/chunks/DGWfHUJN.js","_app/immutable/chunks/BJDs4knq.js","_app/immutable/chunks/Bj7gxxQb.js","_app/immutable/chunks/C6HXeCmf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
