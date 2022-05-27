<template>
  <div>
    <NavBar />
    <BodyBg :titre="page.description" :image="page.image">
      <ParagrapheTexte>
        <NuxtContent class="markdown-content" :document="page" />
      </ParagrapheTexte>
    </BodyBg>
    <FooterBar />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('batailles', params.bataille).fetch();

    return { page };
  }
};
</script>

<style lang="scss">
.markdown-content {
  background-color: $second-background;
  border-radius: 1vw;
  padding: 2.5rem;
  text-align: justify;

  a {
    text-decoration: underline;
    &:hover {
      font-weight: bold;
      text-decoration: underline double;
    }
  }
}
</style>
