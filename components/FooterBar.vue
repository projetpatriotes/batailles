<!-- TODO this shit -->
<template>
  <section class="footer">
    <footer>
      <div class="copyright">
        Copyright © 2022-present William Ao et Adnan Taha. Ce travail est
        licensé sous la
        <a :href="licenseUrl" target="_blank"> License Publique GLWTS </a>
      </div>
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    licenseUrl:
      'https://github.com/me-shaon/GLWTPL/raw/master/translations/NSFW_LICENSE_fr-FR',
  }),
});
</script>

<style lang="scss" scoped>
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
</style>
