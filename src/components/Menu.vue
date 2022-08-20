<template>
    <div class="menu">
        <el-dropdown type="primary"  @command="handleCommand" trigger="click">
            <el-button class="bnt"> 3天内 <i class="el-icon-arrow-down el-icon--right"></i></el-button>
           
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="3">3天内</el-dropdown-item>
                <el-dropdown-item command="7">7天内</el-dropdown-item>
                <el-dropdown-item command="30">30天内</el-dropdown-item>
                <el-dropdown-item command="all">全部</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>


<script>
export default{
    methods:{
        handleCommand(command) {
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
        width: 60px;
        height: 20px;
        font-size: 10px;
        text-align: center;
        padding-left: 5px;
        padding-top: 3px;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 11px;
  }


    

  

</style>