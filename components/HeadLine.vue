<template>
  <section class="headline" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="items">
      <h1 class="titre"><slot /></h1>
      <p>Projet fait par William Ao, Ilian Stamm et Adnan Taha</p>
    </div>
    <div class="scroll-button" v-scroll-to="'#premiereSection, 75px'">
      <ArrowDownIcon />
    </div>
  </section>
</template>

<script lang="ts">
// @ts-nocheck

export default {
  props: {
    image: {
      type: String,
      default: '/img/papineau.png',
    },
  },
  data(): object {
    const image = this.image;
    return { bgImage: image };
  },
};
</script>

<style lang="scss">
@keyframes updown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1vw);
  }
}

.titre {
  font-size: 4rem;
}

.scroll-button {
  z-index: 0;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  svg {
    fill: white;
    animation: updown 1s linear infinite;
    animation-play-state: running;
    display: block;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      animation-play-state: paused;
    }
  }
}

.headline {
  width: 100%;
  height: calc(100vh - $hauteur-nav);
  min-height: 350px;
  background: url('/img/papineau.png') fixed center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 1.3rem;
  }
  .items {
    padding: 1em;
    background-color: rgba($selection-background, 0.5);
    h1,
    p {
      color: $selection-foreground;
      text-align: center;
    }
  }
}
</style>
