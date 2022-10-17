<template>
<div class='tab-bar'>
<slot></slot>
</div>

</template>

<script>
export default {
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.tab-bar {
  background-color: white;
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>