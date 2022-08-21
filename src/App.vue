<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div
      class="Nav"
      v-if="$route.path != `/article`"
      :class="{ fixedNav: isfixTab }"
    >
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
  data() {
    return {
      isfixTab: false,
    };
  },
  components: {
    Header,
    Nav,
  },
  methods: {
    handleTabFix() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector(".header").offsetTop;
      scrollTop > offsetTop ? (this.isfixTab = true) : (this.isfixTab = false);
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleTabFix, true);
  },
};
</script>








<style>
@import "./style/style.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
HEAD html {
  background-color: #f4f5f5;
}

.header {
  height: 60px;
  display: flex;
  justify-content: center;
}

.nav {
  position: sticky;
  top: 10px;
}
.fixedNav {
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 2032;
  top: 0;
  left: 0;
  padding-bottom: 0px;
}
</style>
