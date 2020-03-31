<template>
  <div class="total">
    <div>总支出：</div>
    <div>-{{expend}}</div>
    <div>总收入：</div>
    <div>{{income}}</div>
    <div>汇总：</div>
    <div>{{total}}</div>
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
.total div{
  display: inline-block;
  padding: 0 20px;
  font-size: 16px;
  height: 30px;
  width: 35%;
  line-height: 30px;
  text-align: left;
}

</style>