<template>
  <div>
    <NavBar />
    <BodyBg :titre="'Personnages ' + cote" :image="images[cote]">
      <section id="premiereSection" class="liste">
        <ul>
          <li
            v-for="(personnage, index) in personnages"
            :key="index"
            :style="{
              'flex-direction': index % 2 === 0 ? 'row' : 'row-reverse'
            }"
            class="personnage"
          >
            <div class="text">
              <h2>{{ personnage.nom }}</h2>
              <NuxtContent class="markdown-content" :document="personnage" />
            </div>
            <img
              :src="getImage(personnage.image || 'portraits/default')"
              :alt="personnage.alt"
              :style="getImageMargin(index)"
            />
          </li>
        </ul>
      </section>
    </BodyBg>
    <FooterBar />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const personnages = await $content('personnages', params.cote).fetch();
    let cote = params.cote;
    if (params.cote === 'francais') {
      cote = 'français';
    }
    return {
      personnages,
      cote,
      images: {
        anglais: 'arriere-plans/capitulation-montreal',
        français: 'arriere-plans/papineau'
      }
    };
  },
  methods: {
    getImage(image) {
      return require(`~/assets/img/${image}.png`);
    },
    getImageMargin(index) {
      return index % 2 === 0 ? { marginLeft: 'auto' } : {};
    }
  }
};
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
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  background-color: $second-background;
  flex-wrap: nowrap;

  &:last-of-type {
    margin-bottom: 0;
  }

  /* nvm its fine, he's not that stretched anyway and I'm done with his text*/
  .text {
    padding: 0 1em 1em 1em;
    overflow: hidden;
    margin-right: auto;
    .markdown-content {
      padding: 0;
    }
  }
  img {
    width: 15em;
    height: auto;
    border-radius: 1rem;
    transition: 0.2s;
    &:hover {
      border-radius: 1rem 1rem 0 0;
    }
    &:hover::after {
      content: attr(alt, 'Aucune description de plus sur ce portrait.');
      position: absolute;
      z-index: 1;
      left: 0;
      top: 2rem;
      width: 15rem;
      border-radius: 0 0 1rem 1rem;
      font-size: inherit;
      color: $selection-foreground;
      background-color: $selection-background;
    }
  }
}
</style>
