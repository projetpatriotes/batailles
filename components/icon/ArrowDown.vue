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
  <!-- https://fonts.google.com/icons?selected=Material+Symbols+Rounded:expand_more -->
  <svg xmlns="http://www.w3.org/2000/svg" class="arrow-downward-icon">
    <path
      d="M24 30.15Q23.7 30.15 23.45 30.05Q23.2 29.95 22.95 29.7L13.05 19.8Q12.65 19.4 12.675 18.725Q12.7 18.05 13.1 17.65Q13.6 17.15 14.175 17.225Q14.75 17.3 15.2 17.7L24 26.5L32.8 17.7Q33.2 17.3 33.875 17.25Q34.55 17.2 34.95 17.7Q35.45 18.1 35.375 18.75Q35.3 19.4 34.9 19.85L25.05 29.7Q24.8 29.95 24.55 30.05Q24.3 30.15 24 30.15Z"
      :class="{ reversed: $props.reversed }"
    />
  </svg>
</template>

<script>
export default {
  props: {
    reversed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.arrow-downward-icon {
  height: 48px;
  width: 48px;

  .reversed {
    transform: rotate(180deg);
    transform-origin: 50% 50%;
  }
}
</style>
