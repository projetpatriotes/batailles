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
          <h2>{{ personnage.nom }}</h2>
          <NuxtImg
            :src="
              personnage.image ? personnage.image : '/img/portraits/default.png'
            "
          />
          <NuxtContent class="markdown-content" :document="personnage" />
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
    li {
      flex: 0 0 auto;
    }
  }
}
.personnage {
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  background-color: $second-background;
  &:last-of-type {
    margin-bottom: 0;
  }
  img:nth-child(even) {
    float: right;
  }
  img:nth-child(odd) {
    color: left;
  }
}
</style>
