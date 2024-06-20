let development = process.env.NODE_ENV !== 'production'
export default {
  server: {
    host: "0.0.0.0",
    port: 1010
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Devavrata Sinergi - Office',
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
      { rel: 'icon', type: 'image/x-icon', href: '/infranote.ico' },
      { href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round", rel: "stylesheet" },
      { href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700", rel: "stylesheet", type: "text/css" }
    ],
    script: [
      { src: "https://kit.fontawesome.com/42d5adcbca.js", crossorigin: "anonymous" },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', type: 'text/javascript' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',
    "@/assets/css/nucleo-icons.css",
    "@/assets/css/nucleo-svg.css",
    "@/assets/css/material-dashboard.css",
    "@/assets/css/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/main.client.js' },
    { src: '@/plugins/bootstrap.js', mode: 'client' },
    { src: '@/plugins/cookies.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/dashboard',
      '~/components/pegawai',
      '~/components/location',
      '~/components/dashboard/request',
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

  // middleware
  router: {
    middleware: ['auth']
  },

  // authentication
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'IdToken',
          maxAge: 1800,
          global: true,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'RefreshToken',
          data: 'RefreshToken',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: false,
          autoFetch: true
        },
        // api yang dipanggil
        endpoints: {
          login: { url: 'signin-account', method: 'post' },
          refresh: { url: 'refresh-token', method: 'post' },
          user: { url: 'get-account', method: 'get' },
          logout: { url: 'signout-account', method: 'post' }
        },
        // autoLogout: false
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: false
    }
  }

}
