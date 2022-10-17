//导入vue
import  Vue from 'vue';
//导入路由配置
import VueRouter from 'vue-router';
//导入组件 

Vue.use(VueRouter);

const Main= ()=>import('views/Main')
const Home= ()=>import('views/home/Home.vue')
const Dept= ()=>import('views/dept/Dept.vue')
const User= ()=>import('views/user/User.vue')
const Setting= ()=>import('views/setting/Setting.vue')
const Application= ()=>import('views/application/Application.vue')
const Approval= ()=>import('views/approval/Approval.vue')
const LookWork= ()=>import('views/lookWork/LookWork.vue')
const Calendar= ()=>import('views/calendar/Calendar.vue')
const WorkList= ()=>import('views/workList/WorkList.vue')

//配置路由 映射关系
const routes=[
    {
        path:'/',
        redirect:'/main'
    },
    {
        path:'/main',
        component:Main,
        redirect:'/home',
        children:[
            {
                path:'/home',
                component:Home,
            },
            {
                path:'/dept',
                component:Dept,
            },
            {
                path:'/user',
                component:User,
            },
            {
                path:'/setting',
                component:Setting,
            },
            {
                path:'/application',
                component:Application,
            },
            {
                path:'/approval',
                component:Approval,
            },
            {
                path:'/lookWork',
                component:LookWork,
            },
            {
                path:'/calendar',
                component:Calendar,
            },
            {
                path:'/workList',
                component:WorkList,
            }
        ]
    },
];

const router=new VueRouter({
    //映射
    routes,
    //去掉#
    mode:'history',
});

//导出路由
export default router;