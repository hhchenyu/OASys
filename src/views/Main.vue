<template>
    <el-container>
      <el-aside width="auto">
        <common-aside/>
      </el-aside>
      <el-container>
        <el-header>
          <common-header/>
        </el-header>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
</template>

<script>
import CommonAside from 'views/common/CommonAside.vue'
import CommonHeader from 'views/common/CommonHeader.vue'
export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader
  }
  
}
</script>

<style>
html,body{
  margin: 0px;
  padding: 0px;
}
#app{
  height: 100vh;
}
.el-container{
  height: 100%;
}
.el-header {
    background-color: #333;
    text-align: center;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }


</style>
