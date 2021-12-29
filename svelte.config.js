import adapter from '@sveltejs/adapter-static'
import postcssNesting from 'postcss-nesting'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: {
      plugins: [postcssNesting(/* pluginOptions */)]
    }
  }),

  kit: {
    adapter: adapter({}),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
}

export default config
