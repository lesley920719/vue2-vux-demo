<template>
  <div class="tree-component">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tree'
}
</script>

<style lang="less" scoped>
.tree-component {
  position: relative;
}
</style>