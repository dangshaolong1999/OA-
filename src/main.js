import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
	Button,
	Select,
	Input,
	Icon,
	Dialog,
	Form,
	FormItem,
	Aside,
	Menu,
	MenuItem,
	Main,
	Container,
	Submenu,
	MenuItemGroup,
	Header,
	Badge,
	Table,
	TableColumn,
	Calendar
} from 'element-ui'
import axios from 'axios'
Vue.use(Button)
Vue.use(Select)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Main)
Vue.use(Container)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Header)
Vue.use(Badge)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Calendar)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

require('../mock/index')

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
