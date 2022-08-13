<template>
    <div class="blo">
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
                    <i class="iconfont icon-liulanliang"></i>
                    {{passage.browse}}  
                    <i class="iconfont icon-dianzan"></i>
                    {{passage.like}}   
                    <i class="iconfont icon-pinglun"></i>
                    {{passage.comments}} 
                </div>
            </div>
            <div class="right">
                <div class="image"></div>
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
            this.$router.push();
        },
    },
}
</script>


<style scoped>
@import '../../../assets/css/iconfont.css';

.blo{
    height: 200px;
    border-top: 1px solid #BBB;
    margin: 0 15%;
}

.line1{
    height: 50px;
    display: flex;
    padding-left: 20px;
}

.auther{
    height: 20px;
    line-height: 20px;
    margin-top: 15px;
    padding-right: 20px;
    border-right: 1px solid #bbb;
}

.time{
    height: 20px;
    line-height: 20px;
    margin-top: 15px;
    left: 20px;
    padding-left: 20px;
    color:#bbb;
}

.category{
    height: 20px;
    line-height: 20px;
    margin-top: 15px;
    left: 20px;
    padding-left: 20px;
    color:#bbb;
}

.line2{
    height: 150px;
    display: flex;
    
    width: 100%;
}

.left{
    position: relative;
    padding-left: 20px;
    
    height: 100%;
    flex-grow: 1;
}

.title{
    text-align: left;
    position: absolute;
    font-size:20px;
    font-weight: 800;
    line-height: 40px;
    height: 40px;
    width:100% ;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.text{
    position: absolute;
    top: 60px;
    height: 40px;
    width:95% ;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

}

.other{
    position: absolute;
    bottom: 10%;
}

.right{
    height: 100%;
    
    
    padding-right: 10px;
    padding-left: 10px;
}

.image{
    background-color:aquamarine;
    width: 100px;
    margin-top: 10%;
    height: 80%;
}
</style>