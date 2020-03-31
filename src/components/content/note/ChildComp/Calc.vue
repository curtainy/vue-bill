<template>
  <div class="calc">
    <div class="view">
      <div class="detail">{{detailThing}}</div>
      <div class="money">￥{{money}}</div>
      </div>
    <div class="num_btn">
      <div class="left">
        <div v-for="(item,index) in numbers" :key="index" 
             class="left_item" @click="numClick(index+1)">
          {{item}}
        </div>
        <div class="zero" @click="zeroBtn">0</div>
        <div class="spot" @click="spotBtn">.</div> 
      </div>
      <div class="right">
        <div class="cancel" @click="cancelBtn">删除</div>
        <div class="clear" @click="clearBtn">清空</div>
        <div class="ok" @click="okBtn">OK</div>
      </div>
    </div>
    <toast ref='toast'/>
  </div>
</template>

<script>

import Toast from 'components/common/toast/Toast'

export default {
  data(){
    return {
      numbers: [1,2,3,4,5,6,7,8,9],
      money: '0'
    }
  },
  props: {
    detailThing: {
      type: String,
      default: ''
    },
    currentType: Number  //0 收入  1 支出
  },
  components: {
    Toast
  },
  methods: {
    numClick(index){
      if(this.money.charAt(0) === '0' && index != '0') this.money = index.toString()
      else if(this.money.charAt(0) != '0')
      this.money = this.money.concat(index)
    },
    zeroBtn(){
      this.numClick(0)
    },
    spotBtn(){
      this.numClick('.')
    },
    cancelBtn(){
      this.money = this.money.substr(0,this.money.length-1)
    },
    clearBtn(){
      this.money = '0'
    },
    okBtn(){
      const obj = {
        type: this.currentType,
        detail: this.detailThing,
        money: parseFloat(this.money).toFixed(2),
        date: new Date()
      }

        
      // console.log(obj)
      if(obj.detail === '') this.$refs.toast.show('请先输入账目明细')  
      else{
        this.$refs.toast.show('记录成功')
        this.money = '0'
        // console.log(this.$store)
        this.$store.commit('add',obj)
      }
    }
  }
}
</script>

<style>
.calc{
  width: 100%;
  height: 240px;
  background: rgb(224,224,224,0.2);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
}
.view{
  height: 40px;
  line-height: 40px;
  display: flex;
}
.detail {
  flex: 1;
  font-size: 15px;
  padding-left: 10px;
}
.money {
  flex: 2;
  font-size: 25px;
  text-align: right;
  padding-right: 10px;
}

.num_btn{
  width: 100%;
  height: 240px;
  border-bottom: 1px solid gainsboro;
}


.left{
  width: 74%;
  display: inline-block;
  height: 200px;
  position: relative;
}
.left_item{
  height: 50px;
  width: 33.3%;
  display: inline-block;

  text-align: center;
  line-height: 50px;
}
.zero,.spot{
  display: inline-block;
  height: 50px;
  width: 50%;

  text-align: center;
  line-height: 50px;
}
.right{
  width: 25%;
  display: inline-block;
  height: 200px;

  position: relative;
  top: -15px;

  text-align: center;
}

.cancel,.clear{
  height: 50px;
  line-height: 50px;
}
.ok{
  height: 100px;
  line-height: 120px;
}

</style>