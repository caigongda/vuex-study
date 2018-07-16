const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
];
const state={
	product:[],
	selgood:[],
	cprice:0
};

const getters={
	lists:state=>{
		_products.map((item)=>{state.product.push(item)});
		return state.product;
	},
	seledpro:state=>{
		return state.selgood;
	},
	calprice:state=>{
		return state.selgood.reduce((total, product) => {
		      return total + product.price
		    }, 0)
	}
};
const mutations={
	addgood:function(state,par){
		state.selgood.push({
			id:par.id,
			title:par.title,
			price:par.price
		});
	},
	delone:function(state,index){//index为整个参数对象{type:"delone",index:index,}
		console.log("mutations")
		state.selgood.splice(index.index,1);
	}
};
const actions={
	addpro:function(context,item){
		context.commit('addgood',item);
	},
	delone:function(context,index){
		context.commit("delone",index)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}