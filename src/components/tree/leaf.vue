<template>
  <div class="leaf-component-container"
       v-if="list && list.length">
    <div class="leaf-component"
         :key="index"
         v-for="(item, index) in list">
      <div class="leaf-component-name"
           :class="{'bg-F5F8FB': !item[config.childrenKey]}"
           @click="toggle(item, index)">
        <div @click="childrenClick(item, index)"
             :style="`padding-left: ${!item[config.childrenKey] && level != 1 ? (left - leftDifference) : left}${leftUnit}`">
          <img :class="{'hide': !item[config.childrenKey] || !item[config.childrenKey]['length'], 'active': item.active}"
               v-lazy="require('@/assets/images/default/review1.png')"
               alt="review1.png" />
          <span :style="`font-size: ${fontSize}`">{{item[config.nameKey]}}</span>
        </div>
      </div>
      <leaf @on-click="params => emit('on-click', params)"
            @on-change="params => emit('on-change', params)"
            :level="level + 1"
            :fontSize="fontSize"
            :leftUnit="leftUnit"
            :leftDifference="leftDifference"
            :left="left + leftDifference"
            :data="item[config.childrenKey]"
            :config="config"
            v-if="item[config.childrenKey] && item[config.childrenKey].active"></leaf>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leaf',
  props: {
    level: {
      type: Number,
      default: 0
    },
    leftUnit: {
      type: String,
      default: 'px'
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    left: {
      type: Number,
      default: 0
    },
    leftDifference: {
      type: Number,
      default: 10
    },
    data: {
      default: () => []
    },
    config: {
      default: () => ({ nameKey: 'name', childrenKey: 'children' })
    }
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = this.data
  },
  methods: {
    childrenClick (params, index) {
      if (params[this.config.childrenKey] && params[this.config.childrenKey]['length']) return
      this.emit('on-click', { ...params, leafIndex: `${this.level}-${index}` })
    },
    emit (key, params) {
      if (!params) return
      this.$emit(key, params)
    },
    toggle (params, index) {
      let childrenKey = this.config.childrenKey
      if (!params[childrenKey]) return
      if (!params[childrenKey].active) params[childrenKey].active = true
      else params[childrenKey].active = false
      this.list = Object.assign([], this.list)
      this.emit('on-change', { ...params[childrenKey], leafIndex: `${this.level}-${index}` })
    }
  },
}
</script>

<style lang="less" scoped>
.leaf-component {
  &-name {
    padding: 0.38rem 0;
    position: relative;
    background: white;
    &.bg-F5F8FB {
      background: #f5f8fb;
    }
    & > div {
      display: flex;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
    }
    &::before {
      content: "";
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      display: block;
      width: calc(100% - 0.6rem);
      height: 1px;
      background: rgba(155, 159, 176, 0.2);
      position: absolute;
    }
    img {
      width: 0.22rem;
      height: 0.22rem;
      margin-right: 0.12rem;
      &.hide {
        visibility: hidden;
      }
      &.active {
        transform: rotate(180deg);
      }
    }
  }

  &-container {
  }
}
</style>