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
      'https://github.com/projetpatriotes/projetpatriotes.github.io/raw/master/LICENSE.md'
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
