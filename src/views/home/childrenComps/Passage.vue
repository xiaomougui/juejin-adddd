<template>
    <div class="blo" @click="itemClick">
        <div class="line1">
            <div class="auther"> {{ passage.author }} </div>
            <div class="time">{{passage.time}}</div>
            <div class="category">{{passage.category}}</div>
        </div>
        <div class="line2">
            <div class="left">
                <div class="title">{{ passage.title }}</div>
                <div class="text">{{ passage.goodtext }}</div>
                <div class="other">
                    <div class="browse"><i class="iconfont icon-liulanliang"></i>
                    {{passage.browse}}  </div>
                    <div class="like"><i class="iconfont icon-dianzan"></i>
                    {{passage.like}}</div>   
                    <div class="comments"><i class="iconfont icon-pinglun"></i>
                    {{passage.comments}} </div>
                </div>
            </div>
            <div class="right">
                <div class="image" v-show="passage.isimage">
                    <img :src="passage.imgUrl">
                </div>
            </div>
        </div>
        
    </div>
</template>


<script>
export default{
    props: {
        passage: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    methods: {
        itemClick() {
            //路由跳转占位
            console.log('打开新页面')
           const newpage = this.$router.resolve({name:'/home',params:{}})
           window.open(newpage.href,'_blank')
           
        },
    },
   
}
</script>


<style scoped>
@import '../../../assets/css/iconfont.css';

.blo{
    height: 140px;
    border-top: 1px solid #000;
    margin: 0 2%;
    cursor: pointer;
}

.line1{
    height: 25%;
    display: flex;
    padding-left: 2px;
    font-size: 13px;
}

.auther{
    height: 16px;
    line-height: 16px;
    margin-top: 15px;
    padding-right: 8px;
    border-right: 1px solid #bbb;
}

.auther:hover,.category:hover,.like:hover,.comments:hover{
    color:rgb(0, 127, 255);
}

.time{
    height: 16px;
    line-height: 16px;
    margin-top: 15px;
    padding-left: 8px;
    color:#bbb;
    border-right: 1px solid #bbb;
    padding-right: 8px;
}

.category{
    height: 16px;
    line-height: 16px;
    margin-top: 15px;
    padding-left: 20px;
    color:#bbb;
    padding-left: 8px;
}

.line2{
    height: 75%;
    display: flex;
}

.left{
    position: relative;
    padding-left: 0;
    height: 100%;
    flex-grow: 1;
}

.title{
    text-align: left;
    position: absolute;
    font-size:16px;
    font-weight: 800;
    line-height: 40px;
    left: 0px;
    height: 40px;
    width:100% ;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.text{
    position: absolute;
    top: 45px;
    height: 40px;
    width:100% ;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:12px;
    color:#aaa;
}

.other{
    position: absolute;
    bottom: 15%;
    font-size: 13px;
    color:#444;
    display: flex;
}

.browse,.like,.comments{
    margin-right: 20px;
}

.right{
    height: 100%;
    padding-right: 10px;
    padding-left: 10px;
}

.image{
    width: 100%;
    margin-top: 10%;
    height: 80%;
}

img{
    width: 100%;
    height: 100%;
}
</style>