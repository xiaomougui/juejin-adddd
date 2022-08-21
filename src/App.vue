<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="Nav">
      <Nav />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Nav from "./views/home/childrenComps/Nav.vue";

export default {
  name: "App",
  components: {
    Header,
    Nav,
  },
  methods: {},
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  height: 60px;
  display: flex;
  justify-content: center;
}
</style>
