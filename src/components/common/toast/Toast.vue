<template>
  <div class="toast" v-show='isShow'>
    {{message}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(message,time = 3000){
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow=false
      },time)
    }
  }
}
</script>

<style>
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;

  font-size: 15px;
  color: white;
  background: rgba(0,0,0,0.7);
  padding: 10px;
  border-radius: 5px;
}
</style>