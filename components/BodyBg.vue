<template>
  <div class="has-bg" :style="getStyle">
    <HeadLine :title="$props.title" :title="$props.title" />
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgimg: require(`~/assets/img/${this.image}.png`)
    };
  },
  props: {
    titre: {
      type: String,
      default: 'Projet Patriotes'
    },
    image: {
      type: String,
      default: 'arriere-plans/papineau'
    },
    noarrow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getStyle() {
      return {
        backgroundImage: 'url(' + this.bgimg + ')'
      };
    }
  }
};
</script>

<style lang="scss">
.has-bg {
  background: url('/assets/img/arriere-plans/papineau.png') fixed center;
  background-size: cover;
}
</style>
