<template>
  <div id="show">
    <div id="top">本月账单明细</div>
    <show-bill/>
  </div>
</template>

<script>

import ShowBill from './ChildComp/ShowBill'
import TotalBill from './ChildComp/TotalBill'

export default {
  components:{
    ShowBill,
    TotalBill
  }
}
</script>

<style>
#top{
  height: 40px;
  width: 100%;
  background: rgba(0,122,204,0.4);
  text-align: center;
  line-height: 40px;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
</style>