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
  <div>
    <NavBar />
    <BodyBg :titre="page.description" :image="page.image">
      <ParagrapheTexte>
        <NuxtContent class="markdown-content" :document="page" />
      </ParagrapheTexte>
    </BodyBg>
    <FooterBar />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('batailles', params.bataille).fetch();

    return { page };
  },

  head() {
    return { title: this.page.description };
  }
};
</script>

<style lang="scss">
.markdown-content {
  background-color: $second-background;
  border-radius: 1vw;
  padding: 2.5rem;
}
</style>
