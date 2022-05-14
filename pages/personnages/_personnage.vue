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
    const page = await $content('personnages', params.personnage).fetch();

    return { page };
  },
});
</script>

<style lang="scss"></style>
