<template>
  <nav class="nav">
    <div class="logo">
      <span class="green">Proje</span>
      <span class="white">t Patr</span>
      <span class="red">iotes</span>
    </div>
    <ul class="nav-items">
      <li class="nav-item"><NuxtLink to="/">Accueil</NuxtLink></li>
      <li class="nav-item">
        <DropDown titre="Batailles importantes" :items="listeDesBatailles" />
      </li>
      <li class="nav-item">
        <DropDown
          titre="Personnages"
          :items="[
            { title: 'Anglais', path: '/personnages/anglais' },
            { title: 'Français', path: '/personnages/francais' }
          ]"
        />
      </li>
      <li class="nav-item">
        <NuxtLink to="/bibliographie">Bibliographie</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return { listeDesBatailles: [] };
  },
  async fetch() {
    this.listeDesBatailles = await this.$content('batailles')
      .only(['title', 'path'])
      .fetch();
  }
});
</script>

<!-- ok, so you dumbass forgot that it was the nav wrapper that needed the z-index and not the nav bar -->
<style lang="scss">
.nav {
  z-index: 1;
  width: 100%;
  position: -webkit-sticky; // Safari
  position: sticky;
  top: 0;
  background-color: $second-background;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 5rem;
  color: $text;
  .logo {
    color: $selection-background;
    padding: 2rem;
    font-size: 1.2rem;
    span {
      margin-left: -0.25rem;
    }
    .green {
      color: #368b48;
    }
    .white {
      color: #ffffff;
    }
    .red {
      color: #c30026;
    }
  }
  .nav-items {
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

      &:last-of-type {
        margin-right: 1rem;
      }

      a,
      button {
        color: $text;
        text-decoration: none;
        border: 1px solid $text;
        border-radius: 0.75rem;
        padding: 0.75rem 1.5rem;
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
}
</style>
