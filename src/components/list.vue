<template>
	<div>
	<li v-for="item in items">
	{{item.title}} | {{item.price}} 
	<button @click="add(item)">添加</button></li>
	</div>
</template>
<script>
	export default{
		props:['items'],
		methods:{
			add:function(item){this.$emit('addgood',item)}
		}
	}
</script>
<style scoped>
	li{ 
		padding: 10px;
		margin: 5px;
		border: 1px solid #ddd;
	}
</style>