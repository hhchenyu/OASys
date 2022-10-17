<template>
  <header class="header">
      <div class="left-content">
        <el-button @click="headerClick" size="small" icon="el-icon-menu"></el-button>
        <el-breadcrumb style="margin-left:10px" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :key="index" v-for="(item,index) in newMenu">{{item.label}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-content">
        <el-dropdown>
            <span class="el-dropdown-link">
                <img src="~assets/img/common/user.png">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
  </header>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
    methods: {
        //结合点击事件 完成侧边栏的展开和折叠
        ...mapMutations({
            headerClick:'changeCollapse'
        }),
    },
    
    computed: {
        //获取修改菜单项列表的方法的映射
        // ...mapState(['newMenus']),
        ...mapState({
            newMenu:(state)=>state.newMenus
        }),
    }

}
</script>

<style lang="less" scoped>
    .header{
        display: flex;
        align-items: center;
        justify-content:space-between;
        height: 100%;

        /deep/ .left-content{
            display: flex;
            align-items: center;
            justify-content:space-between;

            .el-breadcrumb__item{
                &:last-child{
                    .el-breadcrumb__inner{
                        color: white;
                    }
                }
            }

        }
    }
    .right-content{
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }






  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>