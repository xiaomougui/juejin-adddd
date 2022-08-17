<template>
    <div class="BottomButton">
        <div class="like">
            <span class="icon-thumbs-up"></span>
            <p>{{likeNum}}</p>
        </div>
        <div class="comment">
            <span class="icon-message"></span>
            <p>评论</p>
        </div>
        <div class="collect">
            <span class="icon-star-full"></span>
            <p>收藏</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'BottomButton',
    data(){
        return {
            likeNum:'2',
        }
    }
}
</script>
<style>
.BottomButton {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 55px;
    background-color: pink;
    /* z-index:9999999; */
}
.BottomButton div {
    /* float: left; */
    justify-content: space-around;
    padding: 10px;

}
span {
    float: left;
    line-height: 55px;
}
p {
    float: left;
}
</style>