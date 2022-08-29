import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home',
		component: () => import('../components/home/Effei_Home.vue')
	},
	{
		path: '/',
		component: () => import('../components/home/Effei_Home.vue'),
		children: [
			{
				path: '/home',
				component: () => import('../views/Effei_Homes.vue')
			}
		]
	},
	{
		path: '/login',
		component: () => import('../views/Effei_Login.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
