<template>
	<!-- 添加 -->
	<div class="dialog-wrapper">
		<el-dialog title="新增用户" :visible.sync="addDialogFormVisible">
			<el-form>
				<el-form-item label="用户名称" :label-width="formLabelWidth">
					<el-input autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="账号" :label-width="formLabelWidth">
					<el-input autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="手机号" :label-width="formLabelWidth">
					<el-input autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="角色名称" :label-width="formLabelWidth">
					<el-select placeholder="管理员角色">
						<el-option label="区域一" value="shanghai"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属岗位" :label-width="formLabelWidth">
					<el-select placeholder="销售岗">
						<el-option label="区域一" value="shanghai"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属职级" :label-width="formLabelWidth">
					<el-select placeholder="1">
						<el-option label="区域一" value="shanghai"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属部门" :label-width="formLabelWidth">
					<el-select placeholder="1">
						<el-option label="区域一" value="shanghai"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addDialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="addDialogFormVisible = false">新增</el-button>
			</div>
		</el-dialog>

		<!-- 修改 -->
		<el-dialog title="修改用户" :visible.sync="editsDialogFormVisible">
			<el-form>
				<el-form-item label="用户名称" :label-width="formLabelWidth">
					<el-input autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="账号" :label-width="formLabelWidth">
					<el-input autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="手机号" :label-width="formLabelWidth">
					<el-input autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="角色名称" :label-width="formLabelWidth">
					<el-select placeholder="管理员角色">
						<el-option label="区域一" value="shanghai"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属岗位" :label-width="formLabelWidth">
					<el-select placeholder="销售岗">
						<el-option label="区域一" value="shanghai"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属职级" :label-width="formLabelWidth">
					<el-select placeholder="1">
						<el-option label="区域一" value="shanghai"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="所属部门" :label-width="formLabelWidth">
					<el-select placeholder="1">
						<el-option label="区域一" value="shanghai"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="editsDialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="editsDialogFormVisible = false">新增</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props: ['dialogFormVisible', 'editDialogFormVisible'],
	data() {
		return {
			/**模态框宽度 */
			formLabelWidth: '80px',
			/**添加标识 */
			addDialogFormVisible: this.dialogFormVisible,
			/**修改标识 */
			editsDialogFormVisible: this.editDialogFormVisible
		}
	},
	created() {
		// console.log(this.addDialogFormVisible)
	}
}
</script>
