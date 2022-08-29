<template>
	<el-aside width="200px" unique-opened>
		<el-menu class="el-menu-vertical-demo" unique-opened text-color="#fff" background-color="#7aabf6">
			<el-submenu v-for="item in asideList" :key="item.id" :index="item.path">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>{{ item.name }}</span>
				</template>
				<el-menu-item-group v-for="item1 in item.children" :key="item1.id">
					<el-menu-item :index="item1.path">{{ item1.name }}</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</el-aside>
</template>

<script>
export default {
	data() {
		return {
			asideList: []
		}
	},
	created() {
		this.$axios.get('/asidelist/query').then((res) => {
			this.asideList = res.data.data.data
			console.log(this.asideList)
		})
	}
}
</script>

<style lang="scss" scoped>
.el-aside {
	height: 100%;
	text-align: center;
	// position: absolute;
}
ul {
	height: 100%;
}
</style>
