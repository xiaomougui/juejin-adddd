<template>
    <div class="home">
        <h1>这是主页</h1>
        <button @click="test">click me</button>
        <Passages :passages="passages"></Passages>
        
    </div>
</template>

<script>
import Passages from "./childrenComps/Passages.vue"

import { getHomeData} from "../../network/home";

export default{
    data(){
        return{
            passages:[],
            obj:[]
        }
    },

    components:{
    Passages
},

    methods:{
        getHomeData() {
            getHomeData().then((res) => {
                console.log(res)
                this.passages = res
                this.obj = JSON.parse(res)
                console.log(this.obj)
            });
        },

        test(){
            console.log(this.passages)
            console.log(this.passages[0])
            console.log(this.passages[0].category)
        }
    },

    created(){
        this.getHomeData()
        
    }

    


    
}
</script>

<style>

</style>