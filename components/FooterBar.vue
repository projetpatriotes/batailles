<!-- TODO this shit -->
<template>
  <section class="footer">
    <footer>
      <div class="credits">
        C'est un projet inter-disciplinaire de l'École internationale de
        Montréal, en collaboration entre les cours d'histoire et de français de
        secondaire 3, de l'année scolaire 2021-2022.
      </div>
      <br />
      <div class="copyright">
        Copyright © 2021-present William Ao et Adnan Taha. Ce travail est
        licensé sous la
        <a :href="licenseUrl" target="_blank"> License Publique DBAD </a>
      </div>
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    licenseUrl:
      'https://github.com/philsturgeon/dbad/raw/master/translations/LICENSE-fr.md',
  }),
});
</script>

<style lang="scss">
footer {
  background-color: #201e20;
  color: white;
  text-align: center;
  font-size: 1rem;
  padding: 1.5rem;
  font-family: 'Comic Mono', monospace;
  a {
    color: #4c307a;
    transition-duration: 0.25s;
    &:hover {
      color: #6f49ad;
    }
  }
}
.copyright {
  font-size: 0.9em;
}
</style>
