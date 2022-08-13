<template>
    <div class="blo">
        <div class="line1">
            <div class="auther"> {{ passage.author }} </div>
            <div class="time">2天前</div>
        </div>
        <div class="line2">
            <div class="left">
                <div class="title">{{ passage.title }}</div>
                <div class="text">{{ passage.goodtext }}</div>
                <div class="other">{{passage.browse}}</div>
            </div>
            <div class="right"></div>
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

.line2{
    height: 150px;
    position: relative;
}

.left{
    position: relative;
    padding-left: 20px;
    height: 100%;
    width: 80%;
}

.title{
    position: absolute;
    font-size:20px;
    font-weight: 800;
    line-height: 40px;
    height: 40px;
}

.text{
    position: absolute;
    top: 50px;
    height: 40px;
    width:90% ;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

}

.other{
    position: absolute;
    bottom: 10%;
}

.right{
    width: 18%;
    height: 120px;
    background-color: aqua;
    position: absolute;
    right: 2%;
    top:15px;
}
</style>