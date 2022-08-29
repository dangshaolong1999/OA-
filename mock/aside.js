const asideList = {
	status: 200,
	type: 'success',
	data: [
		{
			id: 1,
			name: '首页',
			path: '/home'
		},
		{
			id: 2,
			name: '基础配置',
			path: '/base',
			children: [
				{
					id: 3,
					name: '用户管理',
					path: '/user'
				},
				{
					id: 4,
					name: '角色管理',
					path: '/roles'
				},
				{
					id: 5,
					name: '权限管理',
					path: '/access'
				},
				{
					id: 6,
					name: '菜单管理',
					path: '/menus'
				},
				{
					id: 7,
					name: '职级管理',
					path: '/position'
				},
				{
					id: 8,
					name: '岗位管理',
					path: '/station'
				},
				{
					id: 9,
					name: '操作日志',
					path: '/operate'
				},
				{
					id: 10,
					name: '登录日志',
					path: '/daily'
				},
				{
					id: 11,
					name: '字典管理',
					path: '/dictionary'
				},
				{
					id: 12,
					name: '部门管理',
					path: '/branch'
				}
			]
		},
		{
			id: 13,
			name: '配置工作流',
			path: 'workflow',
			children: [
				{
					id: 14,
					name: '配置审批流程',
					path: '/flowpath'
				},
				{
					id: 15,
					name: '配置审批类型',
					path: '/typepath'
				}
			]
		},
		{
			id: 16,
			name: '材料管理',
			path: '/material',
			children: [
				{
					id: 17,
					name: '材料管理',
					path: '/manage'
				}
			]
		},
		{
			id: 18,
			name: '企业通讯',
			path: '/report',
			children: [
				{
					id: 19,
					name: '邮件处理',
					path: '/email'
				},
				{
					id: 20,
					name: '工资条录入',
					path: '/salary'
				}
			]
		},
		{
			id: 21,
			name: '合同管理',
			path: '/contract'
		},
		{
			id: 22,
			name: 'OA审批',
			path: '/examine',
			children: [
				{
					id: 23,
					name: '待办事项',
					path: '/backlog'
				},
				{
					id: 24,
					name: '已办事项',
					path: '/done'
				},
				{
					id: 25,
					name: '我发起的',
					path: '/launch'
				}
			]
		}
	]
}

export default {
	'get|/asidelist/query': () => {
		return {
			status: 200,
			message: 'success',
			data: asideList
		}
	}
}
