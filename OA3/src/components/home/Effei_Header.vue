<template>
	<el-header>
		<div class="left-box">
			<span class="el-icon-s-fold"></span>
		</div>
		<div class="right-box">
			<el-badge :value="12" class="item">
				<span class="el-icon-s-flag"></span>
			</el-badge>
			<el-badge :value="12" class="item">
				<span class="el-icon-bell"></span>
			</el-badge>
			<el-badge :value="12" class="item">
				<span class="el-icon-message"></span>
			</el-badge>
			<el-badge class="item">
				<span class="el-icon-full-screen"></span>
			</el-badge>
			<div class="avatar-box">
				<span class="el-icon-user"></span>
			</div>
			<span class="name">超级管理员</span>
		</div>
	</el-header>
</template>

<style lang="scss" scoped>
.el-header {
	width: 100%;
	display: flex;
	border-top: 1px solid #cccccc;
	border-bottom: 1px solid #cccccc;
	height: 80px;
	align-items: center;
	justify-content: space-between;
	font-size: 24px;
	.item {
		margin-top: 10px;
		margin-right: 20px;
	}
	.right-box {
		display: flex;
		.avatar-box {
			width: 30px;
			height: 30px;
			border: 1px solid #cccccc;
			border-radius: 50%;
			text-align: center;
			line-height: 30px;
			margin-top: 5px;
			font-size: 20px;
		}
		.name {
			font-size: 16px;
			margin-left: 10px;
			margin-top: 8px;
		}
	}
}
</style>
