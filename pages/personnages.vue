<template>
  <div>
    <NavBar />
    <HeadLine titre="Personnages" />
    <FooterBar />
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $content }) {
    const personnages = await $content('personnages').fetch();
    return { personnages };
  },
});
</script>

<style lang="scss">
</style>
