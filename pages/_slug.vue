<template>
  <div>
    <NavBar />
    <HeadLine>{{ document.title }}</HeadLine>
    <ParagrapheTexte>
      <NuxtContent class="texte" :document="document" />
    </ParagrapheTexte>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({
    $content,
    params,
  }: {
    $content: any;
    params: { slug: string };
  }) {
    const document = await $content(params.slug).fetch();

    return { document };
  },
};
</script>

<style lang="scss"></style>
