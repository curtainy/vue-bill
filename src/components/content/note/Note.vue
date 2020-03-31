<template>
  <div id="note">
    <div class="nav_bar">
      <div :style="{backgroundColor:inColor}" @click="inClick">收入</div>
      <div :style="{backgroundColor:outColor}" @click="outClick">支出</div>
    </div>
    <Tag :currentType="currentType" @onDetail="onDetail"/>
    <calc :detailThing="detail" :currentType="currentType"/>
    
  </div>
</template>

<script>

import Tag from './ChildComp/Tag'
import Calc from './ChildComp/Calc'

export default {
  data(){
    return {
      inColor: 'rgba(0,122,204,0.4)',
      outColor: 'white',
      currentType: 0,
      detail: ''  //收支明细
    }
  },
  methods: {
    inClick(){
      this.inColor = 'rgba(0,122,204,0.4)'
      this.outColor = 'white'
      this.currentType = 0
    },
    outClick(){
      this.inColor = 'white'
      this.outColor = 'rgba(255,0,0,0.4)'
      this.currentType = 1
    },
    onDetail(item){
      this.detail = item
    }
  },
  components: {
    Tag,
    Calc
  }
}
</script>

<style>
.nav_bar{
  height: 40px;
  width: 100%;
  display: flex;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  border-bottom: 1px solid gainsboro;
}

.nav_bar div{
  flex: 1;
  text-align: center;
  line-height: 40px;
}
</style>