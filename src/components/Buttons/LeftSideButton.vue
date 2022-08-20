<template>
    <div class="LeftSideButton">
        <div class="button" @click="addLike">
            <span class="icon-thumbs-up" v-if="likeNum==0"></span>
            <span class="icon-thumbs-up blue" v-else></span>
            <div class="like_num" v-if="likeNum!=0" >{{likeNum}}</div>
        </div>
        <div class="button">
            <span class="icon-message"></span>
        </div>
        <div class="button">
            <span class="icon-star-full"></span>
        </div>
        <div class="button">
            <span class="icon-redo2"></span>
        </div>
        <div class="cross_line"></div>
        <div class="button">
            <span class="icon-fullscreen"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LeftSideButton',
    data(){
        return {
            likeNum:0,
            isClick: false
        }
    },
    methods: {
        addLike(){
            if(!this.isClick){
                this.likeNum++;
                this.isClick=true
            }else{
                this.likeNum--;
                this.isClick=false
            }
        }
    }
}
</script>
<style>
.LeftSideButton {
    position: fixed;
    top: 130px;
    left: 0;
    width: 70px;
}
.LeftSideButton .button {
    height: 46px;
    width: 46px;
    border-radius: 23px;
    margin: 20px auto;
    background-color: white;
    text-align: center;

}
.LeftSideButton .button:hover {
    cursor: pointer;
}
.LeftSideButton .button .like_num {
    position: absolute;
    top: 20px;
    right: 10px;
    float: right;
    background-color: rgb(88, 144, 255);
    color: white;
    width: 15px;
    height: 15px;
    font-size: 12px;
    border-radius:8px;
    z-index:2;
}
.LeftSideButton .cross_line {
    height: 1px;
    width: 30px;
    text-align: center;
    margin: auto;
    background-color: rgb(210, 210, 210);
}
.LeftSideButton .button span {
    /* float: left; */
    color: rgb(151, 151, 151);
    line-height: 46px;
    font-size: 22px;
    margin: auto;
}
.LeftSideButton .button .blue {
    color: rgb(88, 144, 255);
}

</style>