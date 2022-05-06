<template>
  <v-menu
    open-on-hover
    offset-y
    close-on-content-click
    close-on-click
    transition="slide-y-transition"
  >
    <template #activator="{ attrs, on }">
      <slot v-bind="attrs" v-on="on" />
    </template>
    <v-list>
      <v-list-item v-for="item in items" :key="item">
        <v-list-item-title v-text="item"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: () => [
        { name: 'item 1', url: 'https://example.com' },
        { name: 'item 2', url: 'https://example.com' },
        { name: 'item 3', url: 'https://example.com' },
        { name: 'item 4', url: 'https://example.com' },
      ],
    },
  },
});
</script>
