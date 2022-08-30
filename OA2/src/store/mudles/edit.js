const state = {
	flag: false
}

const mutations = {
	editFlag(state, value) {
		state.flag = !value
		console.log(state.flag)
	}
}

export default {
	namespaced: true,
	state,
	mutations
}
