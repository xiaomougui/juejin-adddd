<template>
  <div class="top">
    <div class="left" :style="activeStyle1" @click="toLeft">推荐</div>
    <div class="middle" :style="activeStyle2" @click="toMiddle">最新</div>
    <div class="right" :style="activeStyle3" @click="toRight">热榜</div>
  </div>
</template>

<script>
import Menu from "../../../components/Menu.vue";
export default {
  props: {
    index: {
      type: String,
      default: "1",
    },
    upper: String,
  },
  computed: {
    activeStyle1() {
      return this.index == "1" ? { color: "rgb(0,127,255)" } : {};
    },
    activeStyle2() {
      return this.index == "2" ? { color: "rgb(0,127,255)" } : {};
    },
    activeStyle3() {
      return this.index == "3" ? { color: "rgb(0,127,255)" } : {};
    },
  },
  methods: {
    toMiddle() {
      console.log(this.upper);
      this.$router.push("/" + this.upper + "/" + "newest");
    },
    toLeft() {
      console.log(this.upper);
      this.$router.push("/" + this.upper + "/" + "recommend");
    },
    toRight() {
      console.log(this.upper);
      this.$router.push("/" + this.upper + "/" + "hot");
    },
  },
  components: { Menu },
};
</script>


<style scoped>
.top {
  margin-top: 0px;
  display: flex;
  font-size: 14px;
  color: #999;
  padding-left: 20px;
  height: 20px;
  line-height: 20px;
  padding-bottom: 10px;
  padding-top: 15px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.left {
  padding-right: 20px;
  border-right: 1px solid #eee;
}

.left:hover,
.middle:hover,
.right:hover {
  color: rgb(0, 127, 255);
}

.middle {
  padding-left: 20px;
  padding-right: 20px;
  border-right: 1px solid #eee;
}

.right {
  padding-left: 20px;
}
</style>