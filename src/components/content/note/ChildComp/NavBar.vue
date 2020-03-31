<template>
    <div class="nav_bar">
      <div :style="{backgroundColor:inColor}" @click="inClick">收入</div>
      <div :style="{backgroundColor:outColor}" @click="outClick">支出</div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      category: ['收入','支出'],
      currentIndex: 0,
      inColor: 'rgba(0,122,204,0.4)',
      outColor: 'white'
    }
  },
  methods: {
    inClick(){
      this.inColor = 'rgba(0,122,204,0.4)'
      this.outColor = 'white'
    },
    outClick(){
      this.inColor = 'white'
      this.outColor = 'rgba(255,0,0,0.4)'
    }
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