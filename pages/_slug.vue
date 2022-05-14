<template>
  <div>
    <NavBar />
    <HeadLine :titre="page.title" :image="page.image" />
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
  async asyncData({ $content, params }) {
    const page = await $content('page', params.slug).fetch();
    return { page };
  },
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
