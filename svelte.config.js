import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex'
import path from 'path'
import * as url from 'url';
import toc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';

const dirname = path.resolve(url.fileURLToPath(import.meta.url), '../')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	rehypePlugins: [rehypeSlug, toc],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: path.join(dirname, './src/routes/blog/Layout.svelte')
		})
	],

	kit: {
		adapter: adapter()
	},
};

export default config;
