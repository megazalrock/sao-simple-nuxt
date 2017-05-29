module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '<%= site_name %>',
    // titleTemplate: '%s - 株式会社なすび',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '<%= site_description %>' },
      { hid: 'theme-color', name: 'theme-color', content: '#F0F0F0' },
      { hid: 'og:title', property: 'og:title', content: '<%= site_name %>' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: '<%= site_url %>' },
      { hid: 'og:image', property: 'og:image', content: '/assets/images/ogp-logo.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: '<%= site_name %>' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/assets/images/favicon.png' },
      { rel: 'apple-touch-icon', href: '/assets/images/apple-touch-icon.png' },
      { rel: 'manifest', href: '/static/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
    script: [
    ],
  },
  plugins: [
    { src: 'plugins/ga.js', ssr: false },
  ],
  transition: 'router-content',
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '<%= site_theme_color %>' },
  css: [
    { src: 'normalize.css', lang: 'scss' },
    { src: 'assets/styles/main.scss', lang: 'scss' },
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      Object.assign(config.resolve.alias, {
        plugins: config.resolve.alias['~plugins'],
      })
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
