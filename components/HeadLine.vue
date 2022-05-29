<!--
Copyright © 2022-present Adnan-Aidan Taha and William Ao
This file is part of "Projet Patriotes".

"Projet Patriotes" is free software: you can redistribute it and/or modify it under the terms
of the GNU General Public License as published by the Free Software Foundation,
either version 3 of the License, or (at your option) any later version.

"Projet Patriotes" is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with "Projet Patriotes".
If not, see <https://www.gnu.org/licenses/>.
-->

<template>
  <section class="headline" :style="getStyle">
    <div class="items">
      <h1 :class="{ titre: true, logo: $props.titre === 'Projet Patriotes' }">
        {{ $props.titre }}
      </h1>
      <p>
        Projet fait par William Ao et Adnan Taha
        <br />
        Sous la direction de Mme. Déry (histoire) et de Mme. Roussel (français)
      </p>
    </div>
    <div
      v-show="$props.arrow"
      v-scroll-to="'#premiereSection'"
      class="scroll-button"
    >
      <ArrowDownIcon />
    </div>
  </section>
</template>

<script>
import ArrowDownIcon from '~/components/icons/ArrowDownIcon.vue';

export default {
  components: { ArrowDownIcon },
  props: {
    titre: {
      type: String,
      default: 'Projet Patriotes'
    },
    arrow: {
      type: Boolean,
      default: true
    }
  }
};
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
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 1.3rem;
  }
  .items {
    padding: 1em;
    background-color: rgba($selection-background, 0.75);

    h1 {
      text-align: center;
    }

    p {
      color: $selection-foreground;
      text-align: center;
    }
  }
}
</style>
