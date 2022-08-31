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
				component: () => import('../views/common/Effei_Homes.vue')
			},
			{
				path: '/user',
				component: () => import('../views/base/user/Effei_User.vue')
			},
			{
				path: '/roles',
				component: () => import('../views/base/roles/Effei_Roles.vue')
			},
			{
				path: '/position',
				component: () => import('../views/base/position/Effei_Position.vue')
			},
			{
				path: '/station',
				component: () => import('../views/base/station/Effei_Station.vue')
			},
			{
				path: '/daily',
				component: () => import('../views/base/daily/Effei_Daily.vue')
			},
			{
				path: '/operate',
				component: () => import('../views/base/operate/Effei_Operate.vue')
			},
			{
				path: '/launch',
				component: () => import('../views/base/launch/Effei_Launch.vue')
			},
			{
				path: '/backlog',
				component: () => import('../views/base/backlog/Effei_Backlog.vue')
			},
			{
				path: '/done',
				component: () => import('../views/base/done/Effei_Done.vue')
			}
		]
	},
	{
		path: '/login',
		component: () => import('../views/common/Effei_Login.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
