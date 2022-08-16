<template>
  <div id="app">
    <Header />
    <Nav />
    <Home />
  </div>
</template>

<script>
import md from "./components/test/md.vue";
import Nav from "./components/Nav/index.vue";
import Header from "./components/Header/index.vue";
import Article from "./components/Article.vue";
import Home from "./views/home/Home.vue";

export default {
  name: "App",
  components: {
    md,
    Nav,
    Header,
    Article,
    Home,
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
