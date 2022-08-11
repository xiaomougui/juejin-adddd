<template>
  <div>
    <v-md-preview :text="mdata" height="2000px"></v-md-preview>
    <button @click="getdata">点我2</button>
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
              that.mdata = data.essay;
              console.log(that.mdata);
            }, 500);
          }
        }
      };
      xhr.open("GET", "http://127.0.0.1:8081/list", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send("");
    },
  },
};
</script>

<style>
</style>