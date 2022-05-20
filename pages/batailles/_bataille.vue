<template>
  <div>
    <NavBar />
    <HeadLine :titre="page.description" :image="page.image" />
    <ParagrapheTexte>
      <NuxtContent class="markdown-content" :document="page" />
    </ParagrapheTexte>
    <FooterBar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $content, params }) {
    const page = await $content('batailles', params.bataille).fetch();

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
