<template>
  <div class="nav-wrapper">
    <nav class="navbar">
      <span>Projet Patriotes</span>
      <ul class="nav">
        <li class="nav-item">
          <NuxtLink to="/">Liste des batailles</NuxtLink>
        </li>
        <li class="nav-item"><NuxtLink to="/a-propos">A propos</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/credits">Credits</NuxtLink></li>
      </ul>
      <button
        class="hamburger-menu"
        @click="alert('nothing to see here folks')"
      >
        <HamburgerIcon />
      </button>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    alert: window.alert.bind(window),
  },
};
</script>

<!-- ok, so you dumbass forgot that it was the nav wrapper that needed the z-index and not the nav bar -->
<style lang="scss">
.hamburger-menu {
  display: none;
  border: none;
  background: transparent;
  margin-left: auto;
  padding: 1rem;
}

.nav-wrapper {
  z-index: 1;
  width: 100%;
  position: -webkit-sticky; // Safari
  position: sticky;
  top: 0;
  background-color: $second-background;
}

.navbar {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: $hauteur-nav;
  overflow: hidden;
  color: $text;
  > span {
    color: $text;
    padding: 2rem;
    font-size: 1.2rem;
  }
  ul.nav {
    display: flex;
    list-style: none;
    flex-direction: row;
    margin-left: auto;
    .nav-item {
      text-align: center;
      margin-right: 1rem;
      a {
        color: $text;
        text-decoration: none;
        border: 1px solid $text;
        border-radius: 10px;
        padding: 10px 30px;
        &:hover {
          color: $selection-foreground;
          background-color: $selection-background;
        }
      }
    }
    &:last-child {
      margin-right: 1vw;
    }
  }
  @media only screen and (hover: none) and (pointer: coarse) {
    ul.nav {
      display: none;
    }
    .hamburger-menu {
      display: block;
    }
  }
}
</style>
