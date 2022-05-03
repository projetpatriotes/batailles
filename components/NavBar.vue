<!-- everything in <template> is the html -->
<template>
  <div class="nav-wrapper">
    <nav class="navbar">
      <span>Projet Patriotes</span>
      <ul class="nav">
        <li class="nav-item"><NuxtLink to="/">Acceuil</NuxtLink></li>
        <li class="nav-item">
          <NuxtLink to="/personnages/britanniques">Britanniques</NuxtLink>
        </li>
        <li class="nav-item"><NuxtLink to="/a-propos">A propos</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/credits">Credits</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<!-- ok, so you dumbass forgot that it was the nav wrapper that needed the z-index and not the nav bar -->
<style lang="scss">
.nav-wrapper {
  z-index: 1;
  width: 100%;
  position: -webkit-sticky; // Safari
  position: sticky;
  top: 0;
  background-color: $second-background;
}

.navbar {
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: $hauteur-nav;
  overflow: hidden;
  color: $text;
  span {
    margin-left: 2vw;
    color: $text;
    font-size: 1.2vw;
    justify-self: start;
  }
  ul.nav {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    justify-self: end;
    .nav-item {
      text-align: center;
      margin-left: 10px;
      a {
        padding: 10px 30px;
        color: $text;
        text-decoration: none;
        &:hover {
          color: $selection-foreground;
          background-color: $selection-background;
          border-radius: 10px;
        }
      }
    }
    &:last-child {
      margin-right: 1vw;
    }
  }
}
</style>
