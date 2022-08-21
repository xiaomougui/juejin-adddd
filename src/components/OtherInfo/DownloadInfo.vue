<template>
  <div class="app-link">
    <span>
      <img src="http://47.92.2.163:80/images/QR.png" alt="">
    </span>
    <div class="download">
      <div class="download-app">下载稀土掘金app</div>
      <div class = "download-shequ">一个帮助开发者成长的社区</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DownloadInfo'
}
</script>

<style scoped>
.app-link {
  padding: 20px;
  display: flex;
  align-items: center;
}
img {
  width: 50px;
  height: 50px;
  margin-right: 16px;
  cursor: pointer;
}
.download-app {
  font-size: 16px;
  line-height: 20px;
  color: #252933;
  cursor: pointer;
}
.download-shequ {
  font-size: 14px;
  line-height: 22px;
  margin-top: 4px;
  color: #8a919f;
  cursor: pointer;
}
</style>