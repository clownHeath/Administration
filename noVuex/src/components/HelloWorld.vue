<template>
  <div class="hello">
    <ul class="oUl">
      <li class="aLi" v-for="(ele,index) in list" :key="index">
        <img :src="`http://image.loho88.com/`+ele.img" />
        <p v-text="ele.title"></p>
        <h2>
          <span>￥{{ele.price}}</span>
          <span>{{ele.salesNum}}人已买</span>
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      list:[]
    }
  },
  mounted(){
    var that=this
    //http://m.loho88.com/search/?e=80&page=1
    axios.get("/list/search/?e=80&page=1").then(res=>{
      console.log(res.data.result.data)
      console.log(this)
      console.log(that)
      that.list= res.data.result.data
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>



