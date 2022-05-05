<template>
  <p>Redirection a la page d'acceuil...</p>
</template>

<script>
export default {
  asyncData({ redirect }) {
    return redirect('/');
  },
};
</script>
