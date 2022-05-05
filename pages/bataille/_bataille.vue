<template>
  <div>
    <NavBar />
    <HeadLine>{{ document.title }}</HeadLine>
    <ParagrapheTexte>
      <NuxtContent class="texte" :document="document" />
    </ParagrapheTexte>
    <FooterBar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $content, params }) {
    const document = await $content('bataille', params.bataille).fetch();

    return { document };
  },
});
</script>

<style lang="scss"></style>
