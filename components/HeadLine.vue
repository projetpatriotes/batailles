<template>
  <section
    class="headline"
    :style="{ backgroundImage: `url(${$props.image})` }"
  >
    <div class="items">
      <h1 class="titre">{{ $props.titre }}</h1>
      <p>Projet fait par William Ao et Adnan Taha</p>
    </div>
    <div v-scroll-to="'#premiereSection'" class="scroll-button">
      <ArrowDownIcon />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import ArrowDownIcon from '~/components/icons/ArrowDownIcon.vue';

export default Vue.extend({
  components: { ArrowDownIcon },
  props: {
    titre: {
      type: String,
      default: 'Projet Patriotes',
    },
    image: {
      type: String,
      default: '/img/arriere-plans/papineau.png',
    },
  },
});
</script>

<style lang="scss">
@keyframes updown {
  0%,
  100% {
    transform: translateY(0.5rem);
  }
  50% {
    transform: translateY(-0.5rem);
  }
}

.titre {
  font-size: 4rem;
}
.scroll-button {
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -90%);

  &:hover {
    cursor: pointer;
  }
  svg {
    fill: $selection-background;
    animation: updown 1s linear infinite;
    animation-play-state: running;
    &:hover {
      animation-play-state: paused;
    }
  }
}

.headline {
  width: 100%;
  height: calc(100vh - 5rem);
  min-height: 350px;
  background: url('/img/arriere-plans/papineau.png') fixed center;
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
