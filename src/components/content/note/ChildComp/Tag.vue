<template>
  <div class="tag">
    <div v-for="(item,index) in tag" :key='index' 
         class="tag_item" @click="btnClick(index,item)">
        <el-tag v-if="currentIndex === index && !currentType">{{item}}</el-tag>
        <el-tag v-else-if="currentIndex === index && currentType" type='danger'>{{item}}</el-tag>
        <el-tag v-else type='info'>{{item}}</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagOut: ['美食','打车','零食','电影','购物','服饰','日用品','娱乐','水果','医疗','旅行','社交','其他'],
      tagIn: ['奖金','收债','利息收入','薪资','投资回收','借入','意外所得','兼职','其他'],
      currentIndex : 0
    }
  },
  props: {
    currentType: {
      type: Number,
      default: 0
    }
  },
  computed: {
    tag(){
      if(!this.currentType){
         this.currentIndex = 0
         this.$emit('onDetail',this.tagIn[0])
         return this.tagIn
      }else{
        this.currentIndex = 0
        this.$emit('onDetail',this.tagOut[0])
        return this.tagOut
      } 
    }
  },
  methods: {
    btnClick(index,item){
      this.currentIndex = index
      //向父组件发送当前选中的明细
      this.$emit('onDetail',item)
    }
  }
}
</script>

<style>
.tag{
  width: 100%;
  height: 150px;

  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
}
.tag_item{
  height: 50px;
  width: 25%;
  display: inline-block;
  font-size: 13px;
  text-align: center;
  line-height: 50px;
}

</style>