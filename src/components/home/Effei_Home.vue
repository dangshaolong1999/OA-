<template>
	<el-container>
		<effei-aside />
		<div class="right-box">
			<effei-header />
			<effei-content />
		</div>
	</el-container>
</template>

<script>
import EffeiAside from './Effei_Aside.vue'
import EffeiHeader from './Effei_Header.vue'
import EffeiContent from './Effei_Content.vue'
export default {
	components: {
		EffeiAside,
		EffeiHeader,
		EffeiContent
	}
}
</script>

<style lang="scss" scoped>
.el-container {
	height: 100%;
	.right-box {
		width: 100%;
	}
}
</style>
