<template>
	<div class="homes-wrapper">
		<div class="top-box">
			<div class="left-box">
				<el-table border style="width: 100%">
					<el-table-column label="待办事项"></el-table-column>
				</el-table>
			</div>
			<div class="right-box">
				<el-calendar :range="['2019-03-04', '2019-03-24']"> </el-calendar>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.homes-wrapper {
	.top-box {
		height: 200px;
		display: flex;
		justify-content: space-between;
		.left-box {
			width: 48%;
		}
		.right-box {
			width: 48%;
		}
	}
}
</style>
