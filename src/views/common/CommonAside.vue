<template>
    <el-menu default-active="1-4-1" 
    class="el-menu-vertical-demo" @open="handleOpen" 
    @close="handleClose" :collapse="isCollapse"
    background-color="#545c64" text-color="#fff" 
    active-text-color="#ffd04b" >
    <h3 v-if="!isCollapse">协同办公系统</h3>
        <el-menu-item v-for="item in noChildrenMenus" 
        :key="item.path" :index="item.index"
        @click="menuPathClick(item)">
            <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu v-for="item in childrenMenus" :key="item.path" :index="item.index">
            <template slot="title">
                <i :class="'el-icon-'+item.icon"></i>
                <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group v-for="child in item.children" :key="child.path" :index="child.index">
                <span @click="menuPathClick(child)" slot="title">{{child.label}}</span>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
 export default {
    data() {
      return {
        menus:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                index:'1'
            },
            {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'user-solid',
                url: 'UserManage/UserManage',
                index:'2'
            },
            {
                path: '/dept',
                name: 'dept',
                label: '部门管理',
                icon: 'document-copy',
                index:'3'
            },
            {
                path: '/setting',
                name: 'setting',
                label: '考勤设置',
                icon: 's-tools',
                index:'4'
            },
            {
                path: '/application',
                name: 'application',
                label: '请假申请',
                icon: 'edit',
                index:'5'
            },
            {
                path: '/approval',
                name: 'approval',
                label: '请假审批',
                icon: 'check',
                index:'6'
            },
             {
                path: '/lookWork',
                name: 'lookWork',
                label: '查看请假',
                icon: 'search',
                index:'7'
            },
            {
                label: '我的考勤',
                icon: 'time',
                path:'/other',
                index:'8',
                children: [
                    {
                    path: '/calendar',
                    name: 'calendar',
                    label: '考勤日历',
                    icon: 'setting',
                    },
                    {
                    path: '/workList',
                    name: 'workList',
                    label: '考勤列表',
                    icon: 'setting',
                    }
                ]
            }
        ]
      };
    },
    computed: {
        //筛选没有二级栏目 数组函数filter
        noChildrenMenus(){
            return this.menus.filter(m=>!m.children);
        },
        //筛选有二级栏目 数组函数filter
        childrenMenus(){
            return this.menus.filter(m=>m.children);
        },
        ...mapState(['isCollapse']),
    },
    methods: {
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //调用vuex中的方法 来保存点击的菜单
      ...mapMutations(['changeNewMenus']),
      //点击事件 变化路由时变化样式
      menuPathClick(i){
          this.$router.replace({
              path:i.path
          })
          this.changeNewMenus(i)
      },
      
    }
  }
</script>

<style lang="less" scoped>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
      height: 100%;
        h3{
          text-align: center;
          color: white;
      }
  }

  
</style>