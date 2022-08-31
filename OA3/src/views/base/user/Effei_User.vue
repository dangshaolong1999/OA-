<template>
	<div class="user-wrapper">
		<div class="search-box">
			<div class="name-box">
				<span>姓名：</span>
				<el-input placeholder="请输入姓名"></el-input>
			</div>
			<div class="department-box">
				<span>部门：</span>
				<el-input placeholder="请输入部门"></el-input>
			</div>
			<div class="tel-box">
				<span>手机号：</span>
				<el-input placeholder="请输入手机号"></el-input>
			</div>
		</div>
		<div class="button-box">
			<div class="left-box">
				<el-button type="primary" icon="el-icon-search">查询</el-button>
				<el-button type="primary" icon="el-icon-refresh-right">重置</el-button>
			</div>
			<div class="right-box">
				<el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加用户</el-button>
			</div>
		</div>

		<!-- 表格 -->
		<div class="table-box">
			<el-table :data="tableList" border stripe style="width: 100%">
				<el-table-column type="index" label="id"> </el-table-column>
				<el-table-column prop="name" label="用户名称"> </el-table-column>
				<el-table-column prop="account" label="账号"> </el-table-column>
				<el-table-column prop="mobile" label="手机号"> </el-table-column>
				<el-table-column prop="roles" label="所属角色"> </el-table-column>
				<el-table-column prop="rank" label="所属职级"> </el-table-column>
				<el-table-column prop="department" label="所属部门"> </el-table-column>
				<el-table-column label="操作" width="320">
					<template>
						<el-button type="warning" @click="editDialogFormVisible = true" icon="el-icon-edit">修改</el-button>
						<el-button type="danger" icon="el-icon-delete">删除</el-button>
						<el-button icon="el-icon-zoom-in">详情</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<!-- 分页 -->
		<div class="page-box">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="page.pagenum"
				:page-sizes="pageArr"
				:page-size="page.pagesize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total"
			>
			</el-pagination>
		</div>

		<add-edit :dialogFormVisible="dialogFormVisible" :editDialogFormVisible="editDialogFormVisible" />
	</div>
</template>

<script>
import AddEdit from './AddEditUser.vue'
export default {
	components: { AddEdit },
	data() {
		return {
			/**表格数据 */
			tableList: [
				{
					id: 1,
					name: '张三',
					account: 'admin',
					mobile: '15210692279',
					roles: '超级管理员',
					rank: '总经理',
					department: '总经办'
				}
			],
			/** 添加模态框标识 */
			dialogFormVisible: false,
			/**修改模态框标识 */
			editDialogFormVisible: false,
			/**分页数据 */
			page: {
				pagesize: 1,
				pagenum: 1
			},
			/**分页输入框的条数 */
			pageArr: [1, 3, 5, 10],
			/**总条数 */
			total: 0
		}
	},
	created() {
		console.log(this.dialogFormVisible)
	},
	methods: {
		/**每页显示多少条 */
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		/**当前第几页 */
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		}
	}
}
</script>

<style lang="scss" scoped>
.user-wrapper {
	.search-box {
		width: 100%;
		height: 60px;
		padding: 0 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.name-box,
		.department-box,
		.tel-box {
			width: 25%;
			.el-input {
				width: 230px;
			}
		}
	}
	.button-box {
		padding: 0 50px;
		margin-top: 15px;
		display: flex;
		justify-content: space-between;
		.el-button {
			border-radius: 10px;
			color: #fff;
		}
	}
	.table-box {
		padding: 0 50px;
		margin-top: 20px;
	}
	.page-box {
		margin-top: 20px;
		float: right;
		padding: 0 50px;
	}
	::v-deep .el-dialog {
		width: 40%;
	}
}
</style>
