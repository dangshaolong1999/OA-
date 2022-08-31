<template>
	<el-pagination
		:page-size="pageSize"
		:current-page="pageNum"
		background
		layout="prev, pager, next"
		:total="total"
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange"
	>
	</el-pagination>
</template>

<script>
export default {
	props: ['pageSize', 'pageNum', 'total'],
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
