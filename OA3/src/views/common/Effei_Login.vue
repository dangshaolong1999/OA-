<template>
	<div class="login-wrapper">
		<div class="form-box">
			<div class="header-box">OA系统登录</div>
			<div class="footer-box">
				<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="loginForm.username"> </el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="loginForm.password"> </el-input>
					</el-form-item>
					<div class="forget-box">
						<el-button @click="editFlag">忘记密码？</el-button>
					</div>
					<el-form-item prop="validate">
						<div class="validate-box">
							<div class="left-box">
								<el-form-item prop="validate">
									<el-input placeholder="验证码" v-model="loginForm.validate"></el-input>
								</el-form-item>
							</div>
							<div class="right-box">验证码图片</div>
						</div>
					</el-form-item>
				</el-form>
				<el-button type="primary" @click="login">登录</el-button>
			</div>
		</div>
		<effei-edit />
	</div>
</template>

<script>
import EffeiEdit from './Effei_edit.vue'
export default {
	components: { EffeiEdit },
	data() {
		return {
			loginForm: {
				username: '',
				password: '',
				validate: ''
			},
			rules: {
				username: [
					{ required: true, message: '请输入用户名称', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				validate: [
					{ required: true, message: '请输入验证码', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				]
			},
			dialogFormVisible: false
		}
	},
	methods: {
		login() {
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
.login-wrapper {
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: url(../../assets/login.png);
	background-size: 100% 100%;
	background-attachment: fixed;
	::v-deep input {
		border-radius: 15px;
		height: 50px;
	}
	.form-box {
		padding-left: 50px;
		width: 500px;
		height: 500px;
		background-color: #fff;
		border-radius: 30px;
		margin: auto;
		margin-top: 150px;
		.header-box {
			height: 80px;
			line-height: 80px;
			text-align: center;
			font-weight: 500;
			font-size: 22px;
		}
		.footer-box {
			.el-input {
				width: 400px;
				margin: 10px 0;
			}
			.forget-box {
				width: 400px;
				height: 20px;
				position: relative;
				.el-button {
					width: 60px;
					height: 20px;
					margin: 0 !important;
					padding: 0 !important;
					color: #f4c438;
					float: right;
					border: none;
					cursor: pointer;
					position: absolute;
					top: -30px;
					right: 0;
				}
			}
			.validate-box {
				display: flex;
				align-items: center;
				width: 400px;
				justify-content: space-between;
				.el-input {
					width: 230px;
				}
				.right-box {
					width: 120px;
					height: 50px;
					text-align: center;
					line-height: 50px;
					border: 1px solid #dcdfe6;
					border-radius: 15px;
					color: #dcdfe6;
				}
			}
			.el-button {
				width: 350px;
				margin-left: 30px;
				height: 50px;
				color: #fff;
				margin-top: 30px;
				border-radius: 15px;
			}
		}
	}
}
</style>
