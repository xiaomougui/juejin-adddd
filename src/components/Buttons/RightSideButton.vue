<template>
    <div class="RightSideButton">
        <div class="button" @click="toTop" v-if="isShow">
            <span class="icon-arrow-up"></span>
        </div>
        <div class="button">
            <span class="icon-chat blue"></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow: false
        }
    },
    mounted() {
        this.listenerFunction();
    },
    methods: {
        toTop(){
            document.documentElement.scrollTop = 0;
        },
        listenerFunction(e) {
            document.addEventListener("scroll", this.handleScroll, true);
        },
        beforeDestroy() {
            document.removeEventListener("scroll", this.listenerFunction);
        },
        handleScroll() {
            // handleScroll 和 methods 是同级
            if (window.pageYOffset > 1000) {
            //window.pageYOffset:获取滚动距离
            this.isShow = true;
            } else {
                this.isShow = false;
          }
        },
    },
}
</script>
<style scoped>
.RightSideButton {
    position: fixed;
    bottom: 20px;
    right: 30px;
    width: 40px;
    z-index:99999;
}
.RightSideButton .button {
    height: 36px;
    width: 36px;
    border-radius: 20px;
    border: 1px solid rgb(232, 231, 231);
    margin: 20px auto;
    background-color: white;
    text-align: center;

}
.RightSideButton .button:hover {
    cursor: pointer;
}
.RightSideButton .button span {
    /* float: left; */
    color: rgb(151, 151, 151);
    line-height: 36px;
    font-size: 17px;
    margin: auto;
}
.RightSideButton .button .blue {
    color: rgb(88, 144, 255);
}
</style>