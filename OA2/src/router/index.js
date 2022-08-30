import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('../views/Effei_Homes.vue')
	},
	{
		path: '/',
		component: () => import('../components/home/Effei_Home.vue'),
		children: [
			{
				path: '/user',
				component: () => import('../views/Effei_User.vue')
			},
			{
				path: '/roles',
				component: () => import('../views/Effei_Roles.vue')
			},
			{
				path: '/position',
				component: () => import('../views/Effei_Position.vue')
			},
			{
				path: '/station',
				component: () => import('../views/Effei_Station.vue')
			},
			{
				path: '/daily',
				component: () => import('../views/Effei_Daily.vue')
			},
			{
				path: '/operate',
				component: () => import('../views/Effei_Operate.vue')
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
