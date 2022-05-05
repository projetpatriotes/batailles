const description =
  "Ceci est un site web fait par William et Adnan comme un Projet Patriotes, qui est un projet inter-disciplinaire entre les cours d'histoire et de francais.";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Projet Patriotes - Batailles',
    htmlAttrs: {
      lang: 'fr_CA',
      prefix: 'og: https://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#e0a96d' },
      // Open Graph protocol: https://ogp.me
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Projet Patriotes - Batailles',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      { hid: 'og:locale', property: 'og:locale', content: 'fr_CA' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/img/papineau.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Le discours de Louis-Joseph Papineau.',
      },
      // Twitter
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: '/img/papineau.png',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/static/scss/_basic.scss', '~/static/scss/_headings.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/vuetify',
      {
        /* module options */
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'vue-scrollto/nuxt',
      {
        duration: 500,
        easing: 'ease-in-out',
      },
    ],
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    scss: ['./static/scss/_variables.scss'],
  },

  generate: {
    fallback: '404.html',
  },
};
