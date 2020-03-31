<template>
  <div class="tab_bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
}
</script>

<style>
.tab_bar{
  height: 49px;
  width: 100wh;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid gainsboro;

  display:flex;
}
</style>