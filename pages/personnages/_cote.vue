<template>
  <div>
    <NavBar />
    <HeadLine :titre="'Personnages ' + cote" />
    <section id="premiereSection" class="liste">
      <ul>
        <li
          v-for="(personnage, index) in personnages"
          :key="index"
          class="personnage"
        >
          <div class="text">
            <h2>{{ personnage.nom }}</h2>
            <NuxtContent class="markdown-content" :document="personnage" />
          </div>
          <img
            :style="{
              float: index % 2 === 0 ? 'right' : 'left',
            }"
            :src="personnage.image"
          />
        </li>
      </ul>
    </section>
    <FooterBar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async asyncData({ $content, params }) {
    const personnages = await $content('personnages', params.cote).fetch();
    let cote = params.cote;
    if (params.cote === 'francais') {
      cote = 'français';
    }
    return { personnages, cote };
  },
});
</script>

<style lang="scss">
.liste#premiereSection {
  height: auto;
  padding: 1vw;
  ul {
    display: flex;
    flex-flow: column nowrap;
    list-style-type: none;
  }
}
.personnage {
  @media only screen and (hover: none) and (pointer: coarse) {
    flex-flow: column nowrap;
    align-items: cen;
  }
  display: inline-flex;
  flex-flow: row nowrap;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  background-color: $second-background;
  &:last-of-type {
    margin-bottom: 0;
  }
  .text {
    padding: 0 1em 1em 1em;
    overflow: hidden;
  }
  img {
    width: 15em;
    border-radius: 1rem;
  }
}
</style>
