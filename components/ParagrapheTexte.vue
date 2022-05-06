<template>
  <section id="premiereSection" class="paragraphe">
    <slot />
  </section>
</template>

<style lang="scss">
.paragraphe {
  height: auto;
  padding: 1vw;
  color: $text;
  ul {
    padding-left: 1.5vw;
  }

  h1,
  h2,
  h3,
  p,
  li {
    margin-bottom: 0.5rem;
  }
}
</style>
