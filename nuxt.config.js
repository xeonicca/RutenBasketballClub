const isDev = process.env.NODE_ENV !== 'production'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ruten Basketball Club',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Oswald'
      }
    ],
    bodyAttrs: {
      class: 'bg-grey-lighter'
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuesax/dist/vuesax.css',
    '~/assets/css/style.css',
    // '~/assets/css/content.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vuesax',
    '@/plugins/injectRepository.js',
    '@/plugins/injectModelFactory.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['@nuxtjs/google-gtag', {
      id: 'G-90R5ZRKMSK',
      debug: isDev
    }]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  },

  env: {
    AIRTABLE_KEY: 'keyPagIg3OoIgDKz6',
    AIRTABLE_BASE: 'appJ7T6puTExvrt9X'
  },

  generate: {
    interval: 1000
  },

  pwa: {
    manifest: {
      name: 'Ruten Basketball Club',
      short_name: 'RBC',
      description: '露天籃球社推廣網站',
      lang: 'zh-Hant-TW',
      useWebmanifestExtension: false,
      background_color: '#2f365f'
    }
  }
}
