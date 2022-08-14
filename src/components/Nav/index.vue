<template>
  <div class="nav">
    <div class="zuo">
      <ul class="leimu">
        <li><a href="#">综合</a></li>
        <li><a href="#">关注</a></li>
        <li><a href="#">后端</a></li>
        <li><a href="#">前端</a></li>
        <li><a href="#">Android</a></li>
        <li><a href="#">iOS</a></li>
        <li><a href="#">人工智能</a></li>
        <li><a href="#">开发工具</a></li>
        <li><a href="#">代码人生</a></li>
        <li><a href="#">阅读</a></li>
        <li style="margin-left: 200px"><a href="#">标签管理</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
};
</script>

<style>
.nav {
  height: 50px;
  /* width:100%; */
  background-color: #fff;
}
a{
    text-decoration: none;
}
.zuo {
  padding-bottom: 50px;
}
.leimu {
  float: left;
  margin-left: 200px;
}
.nav ul li {
  float: left;
  display: list-item;
  padding: 0 10px;
  text-align: center;
  list-style: none;
}
.nav ul li a {
  display: block;
  height: 42px;
  font-size: 13.92px;
  color: #71777c;
  text-decoration: none;
}
.nav ul li a:hover {
  color: #007fff;
}
</style>