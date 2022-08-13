<template>
    <div class="home">
        <h1>这是主页</h1>
        <Passages :passages="passages"></Passages>
        
    </div>
</template>

<script>
import Passages from "./childrenComps/Passages.vue"

import { getHomeData} from "../../network/home";

export default{
    data(){
        return{
            passages:[]
        }
    },

    components:{
    Passages
},

    methods:{
        getHomeData() {
            getHomeData().then((res) => {
                this.passages = res
            });
        },

        test(){
            console.log(this.passages)
            console.log(this.passages[0])
            console.log(this.passages[0].goodtext)
        }
    },

    created(){
        this.getHomeData()
    }

    


    
}
</script>

<style>

</style>