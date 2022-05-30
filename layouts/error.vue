<!-- -->

<!-- Pris de https://github.com/nuxt/nuxt.js/blob/2.x/packages/vue-app/template/components/nuxt-error.vue -->

<template>
  <div class="error-page">
    <div class="error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        viewBox="0 0 48 48"
      >
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
        />
      </svg>

      <div class="title">{{ message }}</div>
      <a
        v-if="hasPreviousPage"
        @click="backToPreviousPage"
        class="description error-link"
      >
        Retourner à la page précédente
      </a>
      <NuxtLink v-else class="description error-link" to="/">
        Retourner à la page d'accueil
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      const replaceGuide = {
        'This page could not be found': 'Cette page est introuvable',
        'Not Found': 'Cette page est introuvable',
        'Server error': 'Erreur du serveur',
        'An error occurred while rendering the page. Check developer tools console for details.':
          "Une erreur s'est produite dans l'application et votre page n'a pas pu être servie. Si vous êtes le propriétaire de l'application, consultez les logs pour plus de détails."
      };
      return replaceGuide[this.error.message] || this.error.message;
    },
    hasPreviousPage() {
      return window.history.length > 2;
    }
  },
  methods: {
    backToPreviousPage() {
      window.history.go(-1);
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.error-page {
  position: absolute;
  background: $second-background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .error {
    a {
      color: $foreground;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    svg {
      fill: $selection-background;
    }

    .title {
      font-size: 1.5rem;
      margin-top: 1rem;
      color: $text;
      margin-bottom: 0.5rem;
    }

    .description {
      line-height: 1.5rem;
      margin-bottom: 0.75rem;
    }
  }
}
</style>
