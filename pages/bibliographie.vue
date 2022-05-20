<template>
  <div>
    <NavBar />
    <HeadLine titre="Bibliographie" />
    <ParagrapheTexte>
      <NuxtContent class="markdown-content" :document="page"></NuxtContent>
    </ParagrapheTexte>
    <FooterBar />
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $content }) {
    const page = await $content('bibliographie').fetch();
    return { page };
  }
});
</script>

<style lang="scss">
.markdown-content a {
  text-decoration: underline;
  &:hover {
    font-weight: bold;
    text-decoration: underline double;
  }
}
</style>
