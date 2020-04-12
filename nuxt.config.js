import app from './configs/app'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s｜${app.name}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'nIhwJuNUwb4e4HNJVVDTrI49oTwKxgATVuD0pV0eLJg'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+JP:wght@400;700;900&display=swap'
      }
    ]
  },
  meta: {
    lang: app.lang,
    name: app.name,
    author: app.author,
    description: app.description,
    theme_color: app.theme_color,
    mobileAppIOS: true,
    viewport: 'width=device-width,initial-scale=1,user-scalable=no',
    ogType: 'website',
    ogSiteName: app.name,
    ogTitle: app.name,
    ogDescription: app.description,
    ogHost: app.host,
    ogImage: {
      path: 'ogp.png'
    },
    ogUrl: app.url,
    twitterCard: 'summary_large_image',
    nativeUI: true,
  },
  manifest: {
    name: app.name,
    short_name: app.name,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: app.theme_color,
    description: app.description
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/base.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
