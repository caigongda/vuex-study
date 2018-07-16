<template>
  <div class="hello">
  <ul>
    <List :items="lists" v-on:addgood="showgood"></List>
  </ul>
  <br>
  <Goods :selitem="mygoods" :total="cprice" @delgood="delone"></Goods>
  </div>
</template>

<script>
import { mapState,mapGetters, mapActions } from 'vuex'
import List from './list.vue';
import Goods from './goods.vue';
export default {
  name: 'HelloWorld',
  computed:{
     ...mapGetters({
      lists:'lists',
      mygoods:'seledpro',
      cprice:'calprice'
    })
  },
  mounted:function(){
    console.log(this.$store.getters.lists)
  },
  components:{List,Goods},
  methods:{
    //mapActions将当前组件中的showgood函数映射到store中名为addpro的action
    /*如果只有一条mapAction函数，则可以这样写：
        mapActions([
          'addpro',//事件名与action函数名对应，切methods中只能有这一个
        ])
      */
    ...mapActions({
      showgood:'addpro',
    }),
    delone:function(index){
      this.$store.commit({//不使用mapMutations且不经过action
        type:"delone",
        index:index,
      })
      /*this.$store.dispatch({//不使用mapActions通过action
        type:"delone",
        index:index,
      })*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
