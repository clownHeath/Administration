<template>
  <div class="public_content">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'app-content'
  }
</script>
<style >
    .public_content{
      overflow: auto;
      height: auto;
      width: 100%;
      margin-top: 60px;
    }
</style>