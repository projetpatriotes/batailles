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

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('bibliographie').fetch();
    return { page };
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
