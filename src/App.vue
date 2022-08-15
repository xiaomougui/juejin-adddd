<template>
  <div id="app">
    <Article />
  </div>
</template>

<script>
import md from "./components/test/md.vue";
import Nav from "./components/Nav";
import Article from "./components/Article.vue";

export default {
  name: "App",
  components: {
    md,
    Nav,
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
