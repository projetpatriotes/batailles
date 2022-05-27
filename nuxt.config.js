const description =
  "La rébellion des patriotes est survenue durant les années 1837 et 1838. Ce conflit, malgré avoir eu lieu tant au Haut-Canada qu'au Bas-Canada, a été beaucoup plus violent et meurtrier au Bas-Canada. Dans ce site internet, nous allons donc parler des grands évènements et personnages ayant participé dans le conflit au Bas-Canada. Ce conflit est en grande partie le résultat de la distribution du pouvoir dans les colonies du Canada. En effet, malgré la majorité franco-canadienne au Bas-Canada, toutes les lois proposées par leur assemblée n'étaient que refusée par le gouverneur général. Celui-ci avait un droit absolu sur tout le gouvernement. La majorité des sièges de l'assemblée est occupée par le Parti Canadien (78/84 sièges), mais malgré cela, aucune de leurs propositionss de loi sont acceptées.";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Acceuil',
    titleTemplate: 'Projet Patriotes | %s',
    htmlAttrs: {
      lang: 'fr_CA',
      prefix: 'og: https://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'theme-color', content: '#e0a96d' },
      // Open Graph protocol: https://ogp.me
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Projet Patriotes'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      { hid: 'og:locale', property: 'og:locale', content: 'fr_CA' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/favicon.png'
      },
      // Twitter (https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: '/favicon.png'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/_basic.scss',
    '~/assets/scss/_headings.scss',
    '~/assets/scss/_scrollbar.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'vue-scrollto/nuxt',
      {
        duration: 500,
        offset: -75,
        easing: 'ease-in-out'
      }
    ]
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: ['~/assets/scss/_variables.scss']
  },

  generate: {
    fallback: true
  },

  loadingIndicator: {
    name: 'folding-cube',
    color: '#e0a96d',
    background: '#2a373e'
  }
};
