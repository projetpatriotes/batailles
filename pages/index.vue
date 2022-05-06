<template>
  <div>
    <NavBar />
    <HeadLine>Liste des batailles</HeadLine>
    <ParagrapheTexte>
      <ul>
        <li v-for="(bataille, index) in batailles" :key="index">
          <NuxtLink :to="bataille.path">{{ bataille.title }}</NuxtLink>
        </li>
      </ul>
    </ParagrapheTexte>
    <FooterBar />
  </div>
</template>
<!-- -->

<script lang="ts">
// @ts-nocheck
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      batailles: [],
    };
  },
  async fetch() {
    this.batailles = await this.$content('bataille').fetch();
  },
});
</script>

<style lang="scss" scoped></style>
