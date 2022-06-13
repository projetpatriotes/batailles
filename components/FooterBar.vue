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
  <section class="footer">
    <footer>
      <div class="credits">
        Ce site web est un projet inter-disciplinaire de l'École internationale
        de Montréal, avec collaboration entre les cours d'histoire et de
        français de secondaire 3 de l'année scolaire 2021-2022.
      </div>
      <div class="copyright">
        Copyright © 2022 Adnan-Aidan Taha et William Ao. Ce travail est licensé
        sous la
        <a :href="licenseUrl" target="_blank">
          <img :src="licenseLogo" :alt="licenseName" />
        </a>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  data: () => ({
    licenseName: 'GNU General Public License v3.0',
    licenseUrl: 'https://www.gnu.org/licenses/gpl-3.0.html',
    licenseLogo: 'https://www.gnu.org/graphics/gplv3-or-later-sm.png'
  })
};
</script>

<style lang="scss">
footer {
  background-color: #201e20;
  color: white;
  text-align: center;
  font-size: 1rem;
  padding: 1.5rem;
}

.copyright {
  display: inline-flex;
  font-size: 0.95rem;
  align-items: center;

  img {
    margin: 0.5rem 0 0 0.5rem;
  }
}
</style>
