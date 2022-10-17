import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import store from './store'

// 按需使用
import { Button, Select,
  Aside,Container,Header,Main,
  Menu,Submenu,MenuItemGroup,MenuItem,
  Breadcrumb,BreadcrumbItem,
  Dropdown,DropdownMenu,DropdownItem,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
Vue.use(Button);
Vue.use(Select);

Vue.use(Aside);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);

Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

// 或写为
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);

// 完整版使用
// import ElementUI from 'element-ui'
             
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
