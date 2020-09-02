<template>
  <div class="timeline-component">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'timeline'
}
</script>

<style lang="less" scoped>
.timeline-component {
  width: 100%;
}
</style>