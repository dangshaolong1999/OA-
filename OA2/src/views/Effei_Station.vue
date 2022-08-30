<template>
	<div class="station-wrapper">
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
				<el-table-column prop="name" label="岗位名称"> </el-table-column>
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
		<el-dialog title="新增岗位" :visible.sync="dialogFormVisible">
			<el-form>
				<el-form-item label="岗位名称" :label-width="formLabelWidth">
					<el-input autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="关联职级" :label-width="formLabelWidth">
					<el-tree :data="data" :props="defaultProps"></el-tree>
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
		<el-dialog title="修改岗位" :visible.sync="editDialogFormVisible">
			<el-form>
				<el-form-item label="岗位名称" :label-width="formLabelWidth">
					<el-input autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="关联职级" :label-width="formLabelWidth">
					<el-tree :data="editData" :props="defaultProps"></el-tree>
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
			editDialogFormVisible: false,
			data: [
				{
					label: '一级 1',
					children: [
						{
							label: '二级 1-1',
							children: [
								{
									label: '三级 1-1-1'
								}
							]
						}
					]
				},
				{
					label: '一级 2',
					children: [
						{
							label: '二级 2-1',
							children: [
								{
									label: '三级 2-1-1'
								}
							]
						},
						{
							label: '二级 2-2',
							children: [
								{
									label: '三级 2-2-1'
								}
							]
						}
					]
				},
				{
					label: '一级 3',
					children: [
						{
							label: '二级 3-1',
							children: [
								{
									label: '三级 3-1-1'
								}
							]
						},
						{
							label: '二级 3-2',
							children: [
								{
									label: '三级 3-2-1'
								}
							]
						}
					]
				}
			],
			defaultProps: {
				children: 'children',
				label: 'label'
			},
			editData: [
				{
					label: '一级 1',
					children: [
						{
							label: '二级 1-1',
							children: [
								{
									label: '三级 1-1-1'
								}
							]
						}
					]
				},
				{
					label: '一级 2',
					children: [
						{
							label: '二级 2-1',
							children: [
								{
									label: '三级 2-1-1'
								}
							]
						},
						{
							label: '二级 2-2',
							children: [
								{
									label: '三级 2-2-1'
								}
							]
						}
					]
				},
				{
					label: '一级 3',
					children: [
						{
							label: '二级 3-1',
							children: [
								{
									label: '三级 3-1-1'
								}
							]
						},
						{
							label: '二级 3-2',
							children: [
								{
									label: '三级 3-2-1'
								}
							]
						}
					]
				}
			]
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
