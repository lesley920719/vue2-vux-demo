<template>
  <div class="drawer">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-if="show" class="drawer-mask" @touchmove.prevent.stop @click="handleClose"></div>
      </transition>

    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <div v-if="show" class="drawer-content" :class="position">
        <slot/>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Drawer',
  props: {
    value: {
      type: Boolean,
      default: false,
      require: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    isMaskClick: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      show: this.value
    }
  },

  watch: {
    show (state) {
      this.$emit('input', state)
    },

    value (state) {
      this.show = state
    }
  },

  methods: {
    handleClose () {
      if (!this.isMaskClick) return
      this.$emit('update:show', false)
    }
  }
}
</script>
<style lang="less" scoped>
.drawer-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .35);
  z-index: 999;
}

.drawer-content {
  position: fixed;
  background-color: #fff;
  z-index: 1000;

  &.bottom {
    right: 0;
    bottom: 0;
    left: 0;
  }

  &.center {
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  &.top {
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
