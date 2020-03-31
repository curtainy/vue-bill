<template>
  <div class="collect_type">
    <div v-for="(item,index) in data" :key="index" 
         @click="btnClick(index)">
         <span :class="{actived:currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      data: ['收入明细','支出明细','本月汇总'],
      currentIndex: 0
    }
  },
  methods: {
    btnClick(index){
      this.currentIndex = index
      //发送事件
      this.$bus.$emit('typeChange',index)
    }
  }
}
</script>

<style>
.collect_type{
  height: 20px;
  width: 100%;
  margin-top: 10px;
  display: flex;
}
.collect_type div{
  font-size: 13px;
  color: gray;
  text-align: center;
  flex: 1;
}
.collect_type span{
  padding: 5px;
}
.actived{
  border-bottom: 1px solid rgba(66,66,66,0.5);
}
</style>