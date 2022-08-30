<template>
	<el-dialog title="修改密码" :visible.sync="edit.flag">
		<el-form :model="editForm" :rules="editRules" ref="leditForm">
			<el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
				<el-input autocomplete="off" v-model="editForm.username"></el-input>
			</el-form-item>
			<el-form-item label="新密码" :label-width="formLabelWidth" prop="password">
				<el-input autocomplete="off" v-model="editForm.password"></el-input>
			</el-form-item>
			<el-form-item label="再次输入" :label-width="formLabelWidth" prop="surepwd">
				<el-input autocomplete="off" v-model="editForm.surepwd"></el-input>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button type="primary" @click="edit.flag = false">确 认</el-button>
			<el-button @click="edit.flag = false">取 消</el-button>
		</div>
	</el-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			editForm: {
				username: '',
				password: '',
				surepwd: ''
			},
			editRules: {
				username: [
					{ required: true, message: '请输入用户名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				surepwd: [
					{ required: true, message: '请确认密码', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				]
			},
			formLabelWidth: '80px'
		}
	},
	computed: {
		...mapState(['flag', 'edit'])
	}
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
	width: 500px !important;
	margin-top: 150px !important;
	.el-input {
		width: 300px;
	}
}
</style>
