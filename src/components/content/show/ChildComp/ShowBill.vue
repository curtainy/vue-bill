<template>
  <div class="bill">
    <div v-if="$store.state.billList.length != 0">
      <div v-for="(item,index) in $store.state.billList" :key="index" class="show_bill">
      <div class="bill_detail">{{item.detail}}</div>
      <div class="bill_money">
        <span v-if="item.type == 0">+{{item.money}}</span>
        <span v-else>-{{item.money}}</span>
      </div>
      <div class="bill_date">{{item.date}}</div>
      <div class="del">
        <div class="delete" @click="deleteBtn(index)"><i class="el-icon-delete"></i></div>
      </div>
      </div>
      <total-bill/>
    </div>
    <div v-else class="noData">
      <div>还没有账单哦</div>
      <div>快去添加你的账单吧</div>
    </div>
  </div>
</template>

<script>

import TotalBill from './TotalBill'

export default {
  components: {
    TotalBill
  },
  methods: {
    deleteBtn(index){
      //删除某一项
      this.$store.commit('delete',index)
    }
  }
}
</script>

<style>
.bill{
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  
  padding-top: 5px;

  height: calc(100vh - 40px - 49px - 5px);
  font-size: 13px;

  overflow-y: scroll;
  /* overflow: hidden; */
}
.show_bill{
  margin-bottom: 5px;
  display: flex;
  height: 30px;
  line-height: 30px;
  border-bottom:1px solid rgb(224,224,224);
}
.bill_detail,.bill_money{
  flex: 2;
  text-align: center;
}
.bill_date{
  flex: 4;
  text-align: center;
}
.del{
  flex: 1;
  text-align: right;
}
.delete{
  height: 25px;
  width: 25px;
  text-align: center;
  line-height: 25px;
  border-radius: 5px;
  background: rgba(0,122,204,0.2);
}
.delete:hover{
  background: rgba(0,122,204,0.7);
}
.noData{
  font-size: 14px;
  color: rgb(193,193,193);
  margin-top: 40px;
  width: 100%;
}
.noData div{
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
}
</style>