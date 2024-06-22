let development = process.env.NODE_ENV !== 'production'

export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: "0.0.0.0",
    port: "1020"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Devavrata Absensi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css", rel: "stylesheet" },
      { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' },
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', type: 'text/javascript' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bootstrap/dist/css/bootstrap.css",
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "~/plugins/bootstrap.js", mode : "client"},
    {src: "~/plugins/cookies.client.js", mode : "client"},
    {src: "~/plugins/moment.js", mode : "client"},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/Home',
      '~/components/Table',
      '~/components/Modals',
      '~/components/Modals/DataKaryawan',
      '~/components/Modals/RiwayatAbsensi',
      '~/components/Modals/AbsensiKaryawan',


    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://816qzlgink.execute-api.ap-southeast-1.amazonaws.com/prod/',
    mode: "cors"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    middleware: ['auth']
  },
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'IdToken',
          maxAge: 15,
          global: true,
        },
        refreshToken: {
          property: 'RefreshToken',
          data: 'RefreshToken',
          maxAge: false
        },
        endpoints: {
          login: { url: 'signin-account', method: 'post' },
          refresh: { url: 'refresh-token', method: 'post' },
          user: { url: 'get-account', method: 'get' },
          logout: { url: 'signout-account', method: 'post' }
        },
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    }
  }
}
