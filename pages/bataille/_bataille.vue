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
    params: { bataille: string };
  }) {
    const document = await $content('batailles', params.bataille).fetch();

    return { document };
  },
};
</script>

<style lang="scss"></style>
