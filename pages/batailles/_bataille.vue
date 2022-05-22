<template>
  <div>
    <NavBar />
    <HeadLine :titre="page.description" :image="image" />
    <ParagrapheTexte>
      <NuxtContent class="markdown-content" :document="page" />
    </ParagrapheTexte>
    <FooterBar />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('batailles', params.bataille).fetch();
    const image = require(page.image);

    return { page, image };
  }
};
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
