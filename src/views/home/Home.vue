<template>
    <div class="home">
        <Nav></Nav>
        <div class="board">
            <div class="left">
                <Top></Top>
                <Passages :passages="passages"></Passages>
            </div>   
        </div>
        <button @click="test">click me</button>
    </div>
</template>

<script>
import Passages from "./childrenComps/Passages.vue"
import Nav from "./childrenComps/Nav.vue";
import Top from "./childrenComps/Top.vue";

import { getHomeData} from "../../network/home";



export default{
    data(){
        return{
            passages:[],
            obj:[1,2,3]
        }
    },

    components:{
    Passages,
    Nav,
    Top,
    Top
},

    methods:{
        getHomeData(){
            getHomeData().then((res)=>{
                res.forEach((item)=>{
                    this.passages.push(item)
                })
            });
        },
        
			

        test(){
            this.getHomeData()
            console.log(this.passages)
            console.log(this.passages[0])
            console.log(this.passages[0].isimage)
            
        },

        
    },

    created(){
        this.getHomeData()
        this.getHomeData()
    },

    
    // mounted () {
    //     const that = this;
    //     window.addEventListener('scroll',function(){
    //     // 滚动视口高度(也就是当前元素的真实高度)
    //     let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    //     //console.log(scrollHeight)
        
    //     // 可见区域高度
    //     let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    //     // 滚动条顶部到浏览器顶部高度
    //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //     //console.log(clientHeight)
    //     //console.log(scrollTop)
    //     //console.log("和："+clientHeight + scrollTop)
    //     if(clientHeight + scrollTop + 1 >= scrollHeight){
    //             	// 触底执行更多操作（如：发起ajax请求）
    //                 // this.dataList = [...this.dataList, ...[1,2,3,4,5]]

    //                 // const data = [1,2,3,4];
    //                 // that.dataList = that.dataList.concat(data)
    //         console.log('!!!!')
    //         this.getHomeData()
    //                 }
                   
    //             }
    //         )
    //     },


}
</script>

<style scoped>
.home{
    width: 100%;
    height: 100%;
}

.board{
    width: 100%;
    background-color:rgb(244,245,245);
    padding-top: 10px;
    
}

.left{
    width: 45%;
    margin-left: 18%;
    background-color: #fff;
}

.top{
    width: 100%;
}
</style>