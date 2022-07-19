import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const prod = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null,
		}),
		paths: {
			base: prod ? '/bouhm.github.io' : ''
		},
		prerender: {
			default: true
		}
        // hydrate the <div id="svelte"> element in src/app.html
        // target: "#svelte"
	}
};

export default config;
