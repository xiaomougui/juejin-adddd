<template>
    <div class="top">
        <div class="left">推荐</div>
        <div class="middle">最新</div>
        <div class="right">热榜</div>
    </div>
</template>

<script>
export default{

}
</script>


<style scoped>
.top{
    display: flex;
    font-size: 14px;
    color:#999;
    margin-left: 20px;
    height: 20px;
    line-height: 20px;
    margin-bottom: 10px;
    cursor: pointer;
}

.left{
    padding-right: 20px;
    border-right: 1px solid #eee;
}

.left:hover,.middle:hover,.right:hover{
    color:rgb(0, 127, 255);
}

.middle{
    padding-left: 20px;
    padding-right: 20px;
    border-right: 1px solid #eee;
}

.right{
    padding-left: 20px;
}
</style>