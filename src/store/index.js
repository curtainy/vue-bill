import Vuex from 'vuex'
import Vue from 'vue'

//1.下载插件
Vue.use(Vuex)

//2.创建store
const store = new Vuex.Store({
  state: {
    billList: [],
    inList: [],
    outList: [],
    allList: [
      {name: '收入',value: 0},
      {name: '支出',value: 0}
    ]
  },
  getters: {
    //支出
    expend(state){
      const sum = state.billList.reduce((pre,item) => {
        if(item.type === 1) return pre + parseFloat(item.money)
        else return pre
      },0)
      return sum.toFixed(2)
    },
    //收入
    income(state){
      const sum = state.billList.reduce((pre,item) => {
        if(item.type === 0) return pre + parseFloat(item.money)
        else return pre
      },0)
      return sum.toFixed(2)
    },
    //汇总
    total(state,getters){
      return (parseFloat(getters.income)-parseFloat(getters.expend)).toFixed(2)
    },

  },
  mutations: {
    //添加数据
    add(state,newBill){
      newBill.date = formDate(newBill.date)
      state.billList.push(newBill)
      //收入
      if(newBill.type === 0){
        //收入支出饼图
        state.allList[0].value += parseFloat(newBill.money)

        var index = findIndex(state.inList,newBill.detail)
        //该类型已存在
        if(index >= 0){
          state.inList[index].value += parseFloat(newBill.money)
        }else{
          state.inList.push({name: newBill.detail, value: parseFloat(newBill.money)})
        }
      }else{//支出
        //收入支出饼图
        state.allList[1].value += parseFloat(newBill.money)

        var index = findIndex(state.outList,newBill.detail)
        //该类型已存在
        if(index >= 0){
          state.outList[index].value += parseFloat(newBill.money)
        }else{
          state.outList.push({name: newBill.detail, value: parseFloat(newBill.money)})
        }
      }
    },
    //删除数据
    delete(state,index){
      var str = state.billList[index].detail
      var value = state.billList[index].money
      var type = state.billList[index].type
      state.billList.splice(index,1)
      //删除收入
      if(type === 0){
        //收入支出饼图
        state.allList[0].value -= parseFloat(value)

        var idx = findIndex(state.inList,str)
        state.inList[idx].value -= parseFloat(value)
        if(state.inList[idx].value === 0) state.inList.splice(idx,1)
      }else{//删除支出
        //收入支出饼图
        state.allList[1].value -= parseFloat(value)

        var idx = findIndex(state.outList,str)
        state.outList[idx].value -= parseFloat(value)
        if(state.outList[idx].value === 0) state.outList.splice(idx,1)
      }
    }
  }
})

//处理时间
function formDate(date){
  return (date.getMonth()+1).toString().padStart(2,0) + '-'+ date.getDate().toString().padStart(2,0)+' ' + date.toLocaleString().slice(12)
}

//判断数组对象项的索引
function findIndex(list,str){
  var index = -1;
  for(let idx in list){
    if(list[idx].name == str){
      index = idx
      break
    }
  }
  return index
}


//3.导出store
export default store