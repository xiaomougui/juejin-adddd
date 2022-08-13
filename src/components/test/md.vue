<template>
  <div>
    <v-md-preview :text="mdata" height="2000px"></v-md-preview>
    <button @click="getdata">home</button>
    <button @click="post">article</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mdata: "### 什么鬼",
    };
  },
  methods: {
    getdata() {
      let xhr = new XMLHttpRequest();
      let that = this;
      xhr.onreadystatechange = function (res) {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            setTimeout(() => {
              let data = JSON.parse(xhr.responseText);
              console.log(data);
              that.mdata = data.essay;
            }, 500);
          }
        }
      };
      xhr.open("POST", "http://127.0.0.1:3000/data/home", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send("category=" + "后端");
    },
    post() {
      let xhr = new XMLHttpRequest();
      let that = this;
      xhr.onreadystatechange = function (res) {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            setTimeout(() => {
              let data = JSON.parse(xhr.responseText);
              console.log(data);
              that.mdata = data.essay;
            }, 500);
          }
        }
      };
      xhr.open("POST", "http://127.0.0.1:3000/data/article", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send("index=" + "6");
    },
  },
};
</script>

<style>
</style>