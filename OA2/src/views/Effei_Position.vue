<template>
	<div class="position-wrapper">
		<div class="search-box">
			<span>角色名称：</span>
			<el-input placeholder="请输入姓名"></el-input>
			<el-button icon="el-icon-search">查询</el-button>
			<el-button icon="el-icon-refresh-right">重置</el-button>
			<el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">新增职级</el-button>
		</div>
		<div class="table-box">
			<el-table :data="tableList" border stripe style="width: 100%">
				<el-table-column type="index" label="id"> </el-table-column>
				<el-table-column prop="name" label="职级名称"> </el-table-column>
				<el-table-column prop="account" label="备注"> </el-table-column>
				<el-table-column label="操作" width="220">
					<template>
						<el-button type="warning" @click="editDialogFormVisible = true" icon="el-icon-edit">修改</el-button>
						<el-button type="danger" icon="el-icon-delete">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!-- 添加 -->
		<el-dialog title="新增职级" :visible.sync="dialogFormVisible">
			<el-form>
				<el-form-item label="职级名称" :label-width="formLabelWidth">
					<el-input autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="备注" :label-width="formLabelWidth">
					<el-input type="textarea" :rows="2" placeholder="请输入内容"> </el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">新增</el-button>
			</div>
		</el-dialog>
		<!-- 修改 -->
		<el-dialog title="修改职级" :visible.sync="editDialogFormVisible">
			<el-form>
				<el-form-item label="职级名称" :label-width="formLabelWidth">
					<el-input autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="备注" :label-width="formLabelWidth">
					<el-input type="textarea" :rows="2" placeholder="请输入内容"> </el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="editDialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="editDialogFormVisible = false">新增</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
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
			dialogFormVisible: false,
			// 模态框宽度
			formLabelWidth: '80px',
			// 修改模态框标识
			editDialogFormVisible: false
		}
	}
}
</script>

<style lang="scss" scoped>
.position-wrapper {
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
