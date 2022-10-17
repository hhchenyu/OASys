//导入
import Vue from 'vue';
import Vuex from 'vuex';

//注册
Vue.use(Vuex);
// import state from './state'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

const store=new Vuex.Store({
    //存放数据
    state:{
        isCollapse: true,
        newMenus:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                index:'1'
            }
        ],
    },
    //计算
    getters:{},
    mutations:{
        //修改折叠状态的方法
        changeCollapse(state){
            state.isCollapse=!state.isCollapse;
        },
        //添加菜单项的方法
        changeNewMenus(state,item){
            //通过findIndex函数判断是否重复点击 重复点击的不添加
            let index=state.newMenus.findIndex(m=>m.name==item.name);
            if(index<0){
                state.newMenus.push(item);
            }
        }
    },
    actions:{},
})

export default store;