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
  <section class="footer">
    <footer>
      <div class="credits">
        Ce site web est un projet inter-disciplinaire de l'École internationale
        de Montréal, avec collaboration entre les cours d'histoire et de
        français de secondaire 3 de l'année scolaire 2021-2022.
      </div>
      <br />
      <div class="copyright">
        Copyright © 2022-present William Ao et Adnan Taha. Ce travail est
        licensé sous la
        <a :href="licenseUrl" target="_blank"> License Publique DBAD </a>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  data: () => ({
    licenseUrl:
      'https://github.com/projetpatriotes/projetpatriotes.github.io/blob/master/LICENSE.md'
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
  font-size: 0.9em;
}
</style>
