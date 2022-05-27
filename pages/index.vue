<template>
  <div>
    <NavBar />
    <BodyBg titre="Projet Patriotes" :noarrow="true">
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
    const page = await $content('index').fetch();
    return { page };
  }
};
</script>

<style lang="scss">
.markdown-content {
  color: $text;
  background-color: $second-background;
  border-radius: 1vw;
  padding: 2.5rem;
}
</style>
