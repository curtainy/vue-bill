<template>
  <div class="main_tabbar">
    <tab-bar>
      <tab-bar-item path='/note'>
        <i class="el-icon-edit" slot="item-icon"/>
        <span slot="item-text">记账</span>
      </tab-bar-item>
      <tab-bar-item path='/show'>
        <i class="el-icon-menu" slot="item-icon"/>
        <span slot="item-text">明细</span>
      </tab-bar-item>
      <tab-bar-item path='/collect'>
        <i class="el-icon-s-custom" slot="item-icon"/>
        <span slot="item-text">统计</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from './TabBar'
import TabBarItem from './TabBarItem'

export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>