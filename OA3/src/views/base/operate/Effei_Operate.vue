<template>
	<div class="operate-wrapper">
		<div class="search-box">
			<span>账号名称：</span>
			<el-input placeholder="请输入姓名"></el-input>
			<div class="time-box">
				<el-time-select
					:picker-options="{
						start: '08:30',
						step: '00:15',
						end: '18:30'
					}"
					placeholder="选择时间"
				>
				</el-time-select>
			</div>
		</div>
		<div class="button-box">
			<el-button icon="el-icon-search">查询</el-button>
			<el-button icon="el-icon-refresh-right">重置</el-button>
		</div>
		<div class="table-box">
			<el-table :data="dailyList" border stripe style="width: 100%">
				<el-table-column prop="id" label="id"> </el-table-column>
				<el-table-column prop="name" label="操作人"> </el-table-column>
				<el-table-column prop="account" label="操作路径"> </el-table-column>
				<el-table-column prop="equipment" label="操作动向"> </el-table-column>
				<el-table-column prop="time" label="操作时间"> </el-table-column>
			</el-table>
		</div>
		<!-- 分页 -->
		<div class="footer-box">
			<div class="left-box">时间戳：</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dailyList: [
				{
					id: 1,
					name: '小红',
					account: '/user',
					equipment: '用户管理新增了数据'
				}
			],
			// 分页数据
			page: {
				pagesize: 1,
				pagenum: 1
			},
			// 分页输入框的条数
			pageArr: [1, 3, 5, 10],
			//总条数
			total: 0
		}
	},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		}
	}
}
</script>

<style lang="scss" scoped>
.operate-wrapper {
	padding: 0 50px;
	.search-box {
		height: 60px;
		display: flex;
		align-items: center;
		.el-input {
			width: 200px;
		}
		.time-box {
			margin-left: 20px;
		}
	}
	.button-box {
		margin-top: 20px;
	}
	.table-box {
		margin-top: 20px;
	}
	.footer-box {
		margin-top: 20px;
		.left-box {
			float: left;
		}
		.page-box {
			float: right;
		}
	}
}
</style>
