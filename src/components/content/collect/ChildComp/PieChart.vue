<template>
    <div>
      <div class="pie"></div>
      <div class="null" v-show="isNull">暂无数据</div>
      <div class="message">你的世界，从此精打细算~</div>
    </div>
</template>

<script>

import echarts from 'echarts'


export default {
  data(){
    return {
        dataList: [],
        nullData: [{value: 100, itemStyle: {color: '#E5F2FA'}}],
        isNull: false
    }
  },
  mounted(){
    if(this.$store.state.inList.length != 0){
      this.dataList = this.$store.state.inList
    }else{
      this.dataList = this.nullData
      this.isNull = true
      this.message = '请开始你的第一笔记账吧'
    }
    //画图
    this.drawPie()
    this.$bus.$on('typeChange',(index) =>{
      if(index == 0) this.dataList = this.$store.state.inList
      else if(index == 1) this.dataList = this.$store.state.outList
      else{
        var data = this.$store.state.allList
        //收入支出都为0
        if(data[0].value == 0 && data[1].value == 0) this.dataList = []
        else this.dataList = data
      } 
      if(this.dataList.length == 0) {
        this.isNull = true
        this.dataList = this.nullData
      }else{
        this.isNull = false
      }
      this.drawPie()
    })
  },
  methods: {
    //画图
    drawPie(){
      //1.基于dom初始化echarts实例
      var myChart = echarts.init(document.querySelector('.pie'))
      //2.指定图表的配置项和数据
      myChart.setOption({
        series : [
            {
                name: '就是一个图',
                type: 'pie',
                radius: '75%',
                data: this.dataList
            }
        ]
      })
    }
  }
}
</script>

<style>
.pie{
  width: 100%;
  height: 250px;
  margin-top: 30px;
}
.null{
  position: absolute;
  left: 41%;
  top: 48%;
  color: grey;
  font-size: 14px;
}
.message{
  width: 100%;
  margin-top: 30px;
  text-align: center;
}
</style>