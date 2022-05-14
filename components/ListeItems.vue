<template>
  <section id="premiereSection" class="liste">
    <ul>
      <li v-for="(item, index) in items" :key="index" class="personnage">
        <h2>{{ item['nom'] }}</h2>
        <img :src="item['image']" :alt="'Image de ' + item['nom']" />
        <p>{{ item['description'] }}</p>
      </li>
    </ul>
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    categorie: {
      type: String,
      default: 'personnages',
    },
  },
  data() {
    return {
      items: [],
    };
  },
  async fetch({ $content }) {
    this.items = await $content(this.props.categorie).fetch();
  },
});
</script>

<style lang="scss">
.liste#premiereSection {
  height: auto;
  padding: 1vw;
  ul {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    list-style-type: none;
    li {
      flex: 0 0 auto;
    }
  }
}
</style>
