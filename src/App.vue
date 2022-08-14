<template>
  <div id="app">
    <md></md>
  </div>
</template>

<script>
import md from "./components/test/md.vue";
import Article from "./components/Article.vue";
export default {
  name: "App",
  components: {
    md,
    Article,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
