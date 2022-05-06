<template>
  <section id="premiereSection" class="paragraphe markdown-content">
    <slot />
  </section>
</template>

<style lang="scss">
.markdown-content a {
  text-decoration: underline;
  &:hover {
    font-weight: bold;
    text-decoration: underline double;
  }
}

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
