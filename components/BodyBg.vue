<!--
Copyright © 2022 Adnan-Aidan Taha and William Ao
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
  <div class="has-bg" :style="getStyle">
    <HeadLine :titre="$props.titre" :noarrow="$props.noarrow" />
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgimg: require(`~/assets/img/${this.image}.png`)
    };
  },
  props: {
    titre: {
      type: String,
      default: 'Projet Patriotes'
    },
    image: {
      type: String,
      default: 'arriere-plans/papineau'
    },
    noarrow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getStyle() {
      return {
        backgroundImage: 'url(' + this.bgimg + ')'
      };
    }
  }
};
</script>

<style lang="scss">
.has-bg {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
