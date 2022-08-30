<template>
	<div class="daily-wrapper">
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
				<el-table-column prop="name" label="登录ip"> </el-table-column>
				<el-table-column prop="account" label="账号名称"> </el-table-column>
				<el-table-column prop="equipment" label="登陆设备"> </el-table-column>
				<el-table-column prop="place" label="登录地点"> </el-table-column>
				<el-table-column prop="time" label="登录时间"> </el-table-column>
			</el-table>
		</div>
		<!-- 分页 -->
		<div class="page-box">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="page.pagenum"
				:page-sizes="pageArr"
				:page-size="page.pagesize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total"
			>
			</el-pagination>
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
					equipment: '/user',
					place: '用户管理新增了数据'
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
.daily-wrapper {
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
	.page-box {
		margin-top: 20px;
		float: right;
	}
}
</style>
