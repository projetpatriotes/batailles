<template>
  <div>
    <NavBar />
    <HeadLine
      :titre="document.title"
      :image="document.image ?? '/img/pappineau.png'"
    />
    <ParagrapheTexte>
      <NuxtContent class="markdown-content" :document="document" />
    </ParagrapheTexte>
    <FooterBar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $content, params }) {
    const document = await $content('page', params.slug).fetch();
    return { document };
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
