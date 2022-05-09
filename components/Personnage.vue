<template>
  <section id="premiereSection" class="personages">
    <ul class="liste-de-personnages">
      <li
        v-for="(personnage, index) in personnages"
        :key="index"
        class="personnage"
      ></li>
    </ul>
    <slot />
  </section>
</template>

<script lang="ts">
// @ts-nocheck
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      personnages: [],
    };
  },
  async fetch() {
    this.personnages = await this.$content('personnage').fetch();
  },
});
</script>

<style lang="scss">
.personnages {
  height: auto;
  padding: 1vw;
  ul {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    list-style-type: none;
    li {
      flex: 0 0 auto;
    }
  }
}
</style>
