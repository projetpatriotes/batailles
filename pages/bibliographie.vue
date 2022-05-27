<template>
  <div>
    <NavBar />
    <BodyBg titre="Bibliographie">
      <ParagrapheTexte>
        <NuxtContent class="markdown-content" :document="page" />
      </ParagrapheTexte>
    </BodyBg>
    <FooterBar />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('bibliographie').fetch();
    return { page };
  },
  head() {
    return { title: 'Bibliographie' };
  }
};
</script>

<style lang="scss">
.markdown-content {
  color: $text;
  background-color: $second-background;
  border-radius: 1vw;
  padding: 2.5rem;

  a {
    text-decoration: underline;
    &:hover {
      font-weight: bold;
      text-decoration: underline double;
    }
  }

  :visited {
    color: #9b59b6;
  }
}
</style>
