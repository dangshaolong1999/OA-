import Vue from 'vue'
import Vuex from 'vuex'
import edit from './mudles/edit'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		edit
	}
})
