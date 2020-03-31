<template>
  <div>
    <div class="collect">本月账单汇总</div>
    <div class="wrap">
      <!-- <bill-total/> -->
      <collect-type/>
      <pie-chart/>
    </div>
  </div>
</template>

<script>

import BillTotal from './ChildComp/BillTotal'
import CollectType from './ChildComp/CollectType'
import PieChart from './ChildComp/PieChart'

export default {
  components: {
    PieChart,
    CollectType,
    BillTotal
  }
}
</script>

<style>
.collect{
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
.wrap{
  width: 100%;
  height: clac(100vh - 40px - 49px);

  position: relative;
  top: 40px;
}
</style>