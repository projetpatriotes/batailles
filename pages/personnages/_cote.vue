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
            <figure>
              <img
                :src="getImage(personnage.image || 'portraits/default')"
                :alt="personnage.alt"
                :style="getImageMargin(index)"
              />
              <figcaption>{{ personnage.alt }}</figcaption>
            </figure>
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
  height: fit-content;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  background-color: $second-background;
  flex-wrap: nowrap;

  &:last-of-type {
    margin-bottom: 0;
  }

  /* nvm its fine, he's not that stretched anyway and I'm done with his text*/
  // stretch is gone :DDDDDDDD
  .text {
    padding: 0 1em 1em 1em;
    overflow: hidden;
    margin-right: auto;
    .markdown-content {
      padding: 0;
    }
  }
  figure {
    height: auto;
    display: inline-flex;
    flex-direction: column;
    max-width: auto;
    margin-top: auto;
    margin-bottom: auto;
    img {
      height: 20rem;
      border-radius: 1rem;
      transition: border-radius 0.2s ease-in-out 0.2s;
    }

    figcaption {
      width: auto;
      overflow: hidden;
      padding: 0.5rem;
      border-radius: 0 0 1rem 1rem;
      text-align: center;
      color: $selection-foreground;
      background-color: $selection-background;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &:hover {
      img {
        border-radius: 1rem 1rem 0 0;
      }
      figcaption {
        opacity: 1;
      }
    }
  }
}
</style>
