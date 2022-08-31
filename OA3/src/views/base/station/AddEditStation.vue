<template>
	<!-- 添加 -->
	<div class="dialog-wrapper">
		<!-- 添加 -->
		<el-dialog title="新增岗位" :visible.sync="edit.addFlag">
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
				<el-button @click="edit.addFlag = false">取 消</el-button>
				<el-button type="primary" @click="edit.addFlag = false">新增</el-button>
			</div>
		</el-dialog>
		<!-- 修改 -->
		<el-dialog title="修改岗位" :visible.sync="edit.editFLag">
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
				<el-button @click="edit.editFLag = false">取 消</el-button>
				<el-button type="primary" @click="edit.editFLag = false">新增</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			/**模态框宽度 */
			formLabelWidth: '80px',
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
	},
	computed: {
		...mapState(['addFlag,editFlag', 'edit'])
	}
}
</script>
