<template>
  <div class="dropdown-menu">
    <button @click="dropdownOpen = !dropdownOpen">
      {{ titre }}
    </button>
    <ul v-show="dropdownOpen">
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.url">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    titre: {
      type: String,
      default: () => 'Caca',
    },
    items: {
      type: Array,
      default: () => [
        { name: 'work 1', url: 'https://example.com' },
        { name: 'play 2', url: 'https://example.com' },
        { name: 'sleep 3', url: 'https://example.com' },
        { name: 'eat 4', url: 'https://example.com' },
      ],
    },
  },
  // thank you https://laracasts.com/discuss/channels/vue/close-dropdown-when-click-another-element#best-reply-401904
  // you have my regards, kind stranger
  data: () => ({
    dropdownOpen: false,
  }),

  created() {
    window.addEventListener('click', this.close); // eslint-disable-line nuxt/no-globals-in-created
  },

  beforeDestroy() {
    window.removeEventListener('click', this.close);
  },

  methods: {
    close(event: MouseEvent) {
      const elem = event.target as HTMLElement;
      if (!this.$el.contains(elem)) {
        this.dropdownOpen = false;
      }
    },
  },
});
</script>

<style lang="scss">
.dropdown-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  ul {
    width: 100%;
    top: 2rem;
    background-color: $selection-background;
    position: absolute;
    list-style-type: none;
    visibility: visible;
    border-radius: 0 0 1rem 1rem;
    &.dropdown-hidden {
      visibility: hidden;
    }
    li {
      padding: 1rem 1.5rem;
      a,
      button {
        &:hover,
        &:active,
        &:focus {
          border-color: $selection-foreground !important;
          color: $selection-background !important;
          background-color: $selection-foreground !important;
        }
      }
      &:first-of-type {
        margin-top: 0.625rem;
      }
      &:last-of-type {
        margin-bottom: 0.625rem;
      }
    }
  }
}
</style>
