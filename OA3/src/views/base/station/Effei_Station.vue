<template>
	<div class="station-wrapper">
		<div class="search-box">
			<span>角色名称：</span>
			<el-input placeholder="请输入姓名"></el-input>
			<el-button icon="el-icon-search">查询</el-button>
			<el-button icon="el-icon-refresh-right">重置</el-button>
			<el-button type="primary" icon="el-icon-plus" @click="add">新增职级</el-button>
		</div>
		<div class="table-box">
			<el-table :data="tableList" border stripe style="width: 100%">
				<el-table-column type="index" label="id"> </el-table-column>
				<el-table-column prop="name" label="岗位名称"> </el-table-column>
				<el-table-column prop="account" label="备注"> </el-table-column>
				<el-table-column label="操作" width="220">
					<template>
						<el-button type="warning" @click="edit" icon="el-icon-edit">修改</el-button>
						<el-button type="danger" icon="el-icon-delete">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<add-edit />
	</div>
</template>

<script>
import AddEdit from './AddEditStation.vue'
export default {
	components: { AddEdit },
	data() {
		return {
			// 表格数据
			tableList: [
				{
					id: 1,
					name: '张三',
					account: 'admin'
				}
			],
			// 添加模态框标识
			stationDialogFormVisible: false,
			// 模态框宽度
			formLabelWidth: '80px',
			// 修改模态框标识
			stationEditDialogFormVisible: false
		}
	},
	methods: {
		/**点击添加 */
		add() {
			this.$store.commit('edit/addFlag', this.stationDialogFormVisible)
		},
		/**点击修改 */
		edit() {
			this.$store.commit('edit/editFlag', this.stationEditDialogFormVisible)
		}
	}
}
</script>

<style lang="scss" scoped>
.station-wrapper {
	padding: 0 50px;
	.search-box {
		height: 60px;
		display: flex;
		align-items: center;
		.el-input {
			width: 200px;
		}
		.el-button {
			margin-left: 20px;
		}
	}
	.table-box {
		margin-top: 20px;
	}
	.page-box {
		margin-top: 20px;
		float: right;
	}
}
</style>
