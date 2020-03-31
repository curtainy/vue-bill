import Vue from 'vue'
import VueRouter from 'vue-router'

//1.插入路由
Vue.use(VueRouter)


//组件懒加载
const note = ()=> import('components/content/note/Note')
const show = ()=> import('components/content/show/Show')
const collect = ()=> import('components/content/collect/Collect') 


//2.创建VueRouter实例
const routes = [
  {
    path: '',
    redirect: '/note'
  },
  {
    path: '/note',
    component: note
  },
  {
    path: '/show',
    component: show
  },
  {
    path: '/collect',
    component: collect
  }
]

const router =  new VueRouter({
  routes,
  mode: 'history'
})

//3.导出
export default router