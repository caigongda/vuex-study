<template>
	<div>
		<ul>
			<li v-for="(item,index) in selitem" :key="index">
				{{item.id}}|{{item.price}}
				<button @click="del(index)">删除</button>
			</li>
		</ul>
		<div>总价：{{total}}</div>
	</div>
</template>
<script>
	export default{
		props:['selitem','total'],
		methods:{
			del:function(index){
				this.$emit("delgood",index);
			}
		}
	}
</script>