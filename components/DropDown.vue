<!--
Copyright © 2022-present Adnan-Aidan Taha and William Ao
This file is part of "Projet Patriotes".

"Projet Patriotes" is free software: you can redistribute it and/or modify it under the terms
of the GNU General Public License as published by the Free Software Foundation,
either version 3 of the License, or (at your option) any later version.

"Projet Patriotes" is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with "Projet Patriotes".
If not, see <https://www.gnu.org/licenses/>.
-->

<template>
  <div class="dropdown-menu">
    <button
      @click="dropdownOpen = !dropdownOpen"
      :class="{ active: dropdownOpen }"
    >
      {{ titre }}
    </button>
    <ul v-show="dropdownOpen">
      <li v-for="(item, index) in items" :key="index">
        <NuxtLink :to="item.path">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    titre: {
      type: String,
      default: () => 'Caca'
    },
    items: {
      type: Array,
      required: true
    }
  },

  // thank you https://laracasts.com/discuss/channels/vue/close-dropdown-when-click-another-element#best-reply-401904
  // you have my regards, kind stranger
  data: () => ({
    dropdownOpen: false
  }),

  created() {
    window.addEventListener('click', this.close); // eslint-disable-line nuxt/no-globals-in-created
  },

  beforeDestroy() {
    window.removeEventListener('click', this.close);
  },
  // yet another kind stranger https://stackoverflow.com/a/66897888
  watch: {
    $route() {
      this.dropdownOpen = false;
    }
  },
  methods: {
    close(event) {
      if (!this.$el.contains(event.target)) {
        this.dropdownOpen = false;
      }
    }
  }
};
</script>

<style lang="scss">
.dropdown-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  button {
    background-color: transparent;
    font-size: 1rem;
    cursor: pointer;
  }

  ul {
    width: 100%;
    top: 2.1rem;
    background-color: $selection-background;
    position: absolute;
    list-style-type: none;
    visibility: visible;
    border-radius: 0 0 1rem 1rem;

    &.dropdown-hidden {
      visibility: hidden;
    }

    li {
      padding: 1rem;

      a {
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
