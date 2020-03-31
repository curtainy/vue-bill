<template>
  <div class="tab-bar-item" @click="btnClick" :class="{active:isActive}">
      <div><slot name='item-icon'></slot></div>
      <div><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    }
  },
  methods: {
    btnClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  padding-top: 5px;

  font-size: 13px;

  background: rgb(224,224,224,0.5);
}
.active{
  background: rgb(224,224,224);
}
</style>