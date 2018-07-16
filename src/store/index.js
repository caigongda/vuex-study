import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
import list from "./list_store.js";
export default new Vuex.Store({
		modules:{
			list,
		}
})

//vuex是专为vue开发的状态管理模式，可以分模块，每个模块可以有state，getter，mutation，Action
//state放置公共的状态，
//getter用来处理从state派生出来的状态，用法跟computed类似
//mutation用来更新state，类似于事件
//Action里面可以进行异步操作，但不能直接触发store状态更新，需要提交到mutation进行更新
