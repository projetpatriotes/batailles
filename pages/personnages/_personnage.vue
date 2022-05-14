<template>
  <div>
    <NavBar />
    <HeadLine :titre="document.title" :image="document.image" />
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
    const document = await $content('personage', params.personnage).fetch();

    return { document };
  },
});
</script>

<style lang="scss" scoped>
</style>
