<template>
  <div>
    <div class="title">相关文章</div>
    <div class="list" v-for="(item,index) in relativeInfo" :key="index" @click="itemClick(item.index)">
      <div class="list-item">{{item.title}}</div>
      <div class="list-info">
        <span>{{item.like}}点赞</span> ·
        <span>{{item.comments}}评论</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'RelativeInfo',
  data(){
    return {
      index:1
    }
  },
    props: {
    relativeInfo: {
      type: Array,
      default() {
          return [];
      },
    },
  },
  methods:{
    // getRouterData(){
    // this.index = this.$route.query.index
    // },
    itemClick(index){
      console.log(this.relativeInfo);
      const newpage = this.$router.resolve({
        name:"Article",
        query:{index:index}
      })
      window.open(newpage.href,"_blank")
    }
  },
  //   created() {
  //   this.getRouterData()
  //   console.log("index:",this.index);
  // },
  
}
</script>

<style scoped>
.title {
  padding: 15px 0;
  margin: 0 18px;
  font-size: 16px;
  line-height: 20px;
  color: #1d2129;
  font-weight: 500;
  border-bottom: 1px solid #e4e6eb;
  margin-bottom: 12px;
}
.list {
    padding: 6.67px 16.67px;
}
.list .list-item {
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  color: #252933;
  cursor:pointer;
}
.list .list-item:hover {
  color: rgb(125, 125, 241);
}
.list .list-info {
  font-size: 14px;
  margin-top: 4px;
  color: #909090;
  cursor: pointer;
}
</style>