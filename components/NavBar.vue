<!--
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
  <nav class="nav">
    <span class="logo">Projet Patriotes</span>
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
.logo {
  color: transparent;
  background: linear-gradient(#368b48 0 50%, #ffffff 50% 65%, #c30026 65% 100%);
  background-clip: text;
}

.nav {
  z-index: 1;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: $second-background;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 5rem;
  color: $text;
  .logo {
    max-width: fit-content;
    margin-left: 1.5rem;
    font-size: 2rem;
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
        &:focus,
        &.active {
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
