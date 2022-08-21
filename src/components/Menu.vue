<template>
    <div class="menu">
        <el-dropdown type="primary"  @command="handleCommand" trigger="click">
            <el-button class="bnt"> {{this.word}} <i class="el-icon-arrow-down el-icon--right"></i></el-button>
           
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="3天内">3天内</el-dropdown-item>
                <el-dropdown-item command="7天内">7天内</el-dropdown-item>
                <el-dropdown-item command="30天内">30天内</el-dropdown-item>
                <el-dropdown-item command="全部">全部</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>


<script>
export default{
  data(){
    return{
      word:'3天内',
    }
  },
  props:{
    show:String,
  },
    methods:{
        handleCommand(command) {
          this.word=command
        this.$emit('goto',command)
      }
    },
}
</script>


<style scoped>
    .menu{
        margin-left: 30px;
    }

    

    .el-dropdown {
    vertical-align: top;
     
  }

  .el-button{
        width: 65px;
        height: 20px;
        font-size: 10px;
        text-align: center;
        padding-left: 5px;
        padding-top: 3px;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 20px;
  }
  .el-icon-arrow-down {
    font-size: 11px;
  }


    

  

</style>