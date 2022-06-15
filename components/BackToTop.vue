<template>
  <transition name="fade" mode="out-in">
    <div
      key="1"
      v-show="scrollToTopVisible"
      v-scroll-to="{ el: '#premiereSection', offset: -75 }"
      class="scroll-button to-top"
    >
      <IconArrowUp />
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    scrollToTopVisible: false
  }),

  methods: {
    listenOutOfBounds() {
      const elem = document.getElementById('premiereSection');
      const bounds = elem.getBoundingClientRect();
      this.scrollToTopVisible = bounds.top < 0 ? true : false;
    }
  },

  mounted() {
    window.addEventListener('scroll', this.listenOutOfBounds);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.listenOutOfBounds);
  }
};
</script>

<style lang="scss">
// many nice strangers https://stackoverflow.com/q/42019828
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.scroll-button.to-top {
  position: fixed;
  display: flex;
  right: 1rem;
  bottom: 1rem;
  background-color: $selection-background;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
  }
  .arrow-up-icon {
    fill: $selection-foreground;
  }
}
</style>
