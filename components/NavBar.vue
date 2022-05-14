<template>
  <div class="nav-wrapper">
    <nav class="navbar">
      <span>Projet Patriotes</span>
      <ul class="nav">
        <li class="nav-item"><NuxtLink to="/">Accueil</NuxtLink></li>
        <li class="nav-item">
          <DropDown titre="Liste des batailles" :items="listeDesBatailles" />
        </li>
        <li class="nav-item"><NuxtLink to="/a-propos">À propos</NuxtLink></li>
        <li class="nav-item">
          <NuxtLink to="/bibliographie">Bibliographie</NuxtLink>
        </li>
        <li class="nav-item"><NuxtLink to="/credits">Crédits</NuxtLink></li>
      </ul>
      <Slide right>
        <details>
          <summary>Liste des batailles</summary>
          <ul>
            <li>
              <NuxtLink to="https://example.com">example.com</NuxtLink>
            </li>
          </ul>
        </details>
        <NuxtLink to="/">Liste des batailles</NuxtLink>
        <NuxtLink to="/a-propos">À propos</NuxtLink>
        <NuxtLink to="/bibliographie">Bibliographie</NuxtLink>
        <NuxtLink to="/credits">Crédits</NuxtLink>
      </Slide>
    </nav>
  </div>
</template>

<script>
// @ts-nocheck
import Vue from 'vue';
import { Slide } from 'vue-burger-menu';
import DropDown from '~/components/subcomponents/DropDown.vue';

export default Vue.extend({
  components: { Slide, DropDown },
  data() {
    return { listeDesBatailles: [] };
  },
  async fetch({ $content }) {
    this.listeDesBatailles = await $content('bataille')
      .only(['title', 'path'])
      .fetch();
  },
});
</script>

<!-- ok, so you dumbass forgot that it was the nav wrapper that needed the z-index and not the nav bar -->
<style lang="scss">
ul.nav + div {
  display: none;
}

.bm-burger-button {
  margin-top: -0.5rem;
  > .bm-burger-bars.line-style {
    border-radius: 1rem;
    background-color: $background;
  }
}
.bm-menu {
  background-color: $second-background;
  border-left: 0.3rem solid $border;
  .cross-style {
    margin-top: 0.5rem;
  }
  .bm-cross {
    background: $background;
  }
  .bm-item-list > a {
    margin-right: 2rem;
    margin-bottom: 1rem;
    color: $text;
    text-decoration: none;
    border: 1px solid $text;
    border-radius: 10px;
    padding: 10px 30px;

    &:hover,
    &:active,
    &:focus {
      border-color: $selection-background;
      color: $selection-foreground;
      background-color: $selection-background;
    }
  }
}

.nav-wrapper {
  z-index: 1;
  width: 100%;
  position: -webkit-sticky; // Safari
  position: sticky;
  top: 0;
  background-color: $second-background;
}

.navbar {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 5rem;
  color: $text;
  > span {
    color: $text;
    padding: 2rem;
    font-size: 1.2rem;
  }
  ul.nav {
    display: flex;
    list-style: none;
    flex-direction: row;
    margin-left: auto;
    align-items: center;
    align-content: center;

    .nav-item {
      text-align: center;
      margin: 0.5rem;
      position: relative;

      a,
      button {
        color: $text;
        text-decoration: none;
        border: 1px solid $text;
        border-radius: 0.625rem;
        padding: 0.625rem 1.875rem;
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

        &:hover,
        &:active,
        &:focus {
          border-color: $selection-background;
          color: $selection-foreground;
          background-color: $selection-background;
        }
      }
    }

    &:last-child {
      margin-right: 1vw;
    }
  }

  @media only screen and (hover: none) and (pointer: coarse) {
    ul.nav {
      display: none;
      + div {
        display: block;
      }
    }
  }
}
</style>
