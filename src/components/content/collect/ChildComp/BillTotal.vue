<template>
  <div class="bill_total">
    <div class="profit">
      <span>本月收益：{{total}}</span>
    </div>
    <div class="in">本月支出：{{expend}}</div>
    <div class="out">本月收入：{{income}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   computed: {
    ...mapGetters(['income','expend','total'])
  }
}
</script>

<style>
.bill_total{
  height: 80px;
  background: rgba(0,122,204,0.1);
}
</style>