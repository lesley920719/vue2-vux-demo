<template>
  <div class="input-radio"
       :class="{'label-single-line': labelSingleLine }">
    <label :class="{required}"
           :style="labelWidth && !labelSingleLine ? 'width:' + labelWidth : ''"
           v-if="label">{{label}}</label>
    <checker v-model="currentValue"
             :max='max'
             :type="type"
             :default-item-class="type"
             selected-item-class="selected"
             :class="[direction, {'row-wrap': rowWrap}]"
             :radio-required="radioRequired"
             @on-change="change(currentValue)">
      <checker-item @on-item-click="itemClick(item, index)"
                    :class="{'line':isNeedLine}"
                    :disabled="item.disabled"
                    :value="item.value || item"
                    v-for="(item, index) of list"
                    :key="index">
        <i class="icon-state"></i>
        <div class='wrap'>
          <span :style="'font-size:' + fontSize"
                class="name">{{item.name || item}}</span>
        </div>
        <slot :name="`content_${index}`" />
      </checker-item>
    </checker>
  </div>
</template>
<script type = 'text/javascript'>
import { Checker, CheckerItem } from "vux";
export default {
  props: {
    value: {

    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "radio" //多选： checkbox 单选： radio
    },
    fontSize: {
      type: String,
      default: "0.26rem"
    },
    labelWidth: {   // 指定label宽度，若指定了labelSingleLine，则此属性无效
      type: String,
      default: ""
    },
    labelSingleLine: {  // label是否单独占一行
      type: Boolean,
      default: false
    },
    radioRequired: {
      //在单选模式下是否必选一个值。设为 true 後点击当前选中項不会取消选中。
      type: Boolean,
      default: false
    },
    max: Number, //最多可选个数，多选时可用,
    label: String,
    direction: {
      type: String,
      default: "row" // column
    },
    rowWrap: {  // row方向的是否允許換行
      type: Boolean,
      default: false
    },
    list: {
      type: Array, //数组对象 [{name: '选項1', value: 1,tip:'备注'}, {name: '选項2', value: 2,tip:'备注'}]   [1 , 2]
      require: true
    },
    isNeedLine: {
      //是否需要分割线
      type: Boolean,
      default: false
    },
  },
  components: { Checker, CheckerItem },
  created () {
    if (
      this.type === "checkbox" &&
      Object.prototype.toString.call(this.value) !== "[object Array]"
    ) {
      throw new Error("类型为多选的时候，value应为数组");
    }
  },
  data () {
    return {
      currentValue: this.value,
      currentKey: -1,
      tipsText: '',
    };
  },
  methods: {
    itemClick (itemValue, key) { // itemValue.required 1:必选 2. 可选 3.不可选
      if (this.type == 'radio') return;  // 单选不需要判断
      let ids = this.currentValue && this.currentValue.map(item => item.id); // 获取id的集合
      this.currentKey = key;
      switch (itemValue.required * 1) {
        case 1:
          this.tipsText = '該優惠參與增值優惠，必須選擇';
          break;
        case 2:
          this.tipsText = '';
          break;
        case 3:
          this.tipsText = '該優惠需參與額外優惠，請返回上一步選擇增值優惠';
          break;
        default:
          break;
      }
      if (this.currentValue.length >= this.max && this.max && ids.indexOf(itemValue.id) === -1) {
        this.tipsText = `該類型最多可選${this.max}種。`
      }
    },
    change (currentValue) {
      this.$emit('on-change', currentValue)
    },
  },
  watch: {
    value (val) {
      this.currentValue = val;
    },
    currentValue (val) {
      this.$emit("input", val);
    }
  }
};
</script>
<style lang = 'less' scoped>
@import "~@/assets/less/border-1px.less";
.input-radio {
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  &.label-single-line {
    flex-wrap: wrap;
    label {
      width: 100%;
      text-align: left;
      margin-bottom: 0.15rem;
      margin-right: 0;
    }
    .vux-checker-box {
      padding-left: 0.28rem;
    }
  }
  label {
    position: relative;
    font-size: 0.28rem;
    color: @font-main;
    margin-right: 0.28rem;
    &.required {
      padding-left: 0.28rem;
      &:before {
        content: "*";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        color: @tips-color;
        font-size: 0.28rem;
      }
    }
  }
  .vux-checker-box {
    flex: 1;
    display: flex;
    &.row-wrap {
      flex-wrap: wrap;
      .vux-checker-item {
        padding-bottom: 0;
      }
    }
    .vux-checker-item {
      display: flex;
      align-items: flex-start;
      flex: 1 1 auto;
      &.line {
        position: relative;
        .border-1px-b(@c: @border-color, @O: 0.2);
      }
      .icon-state {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        margin: auto 0;
      }
      .wrap {
        margin-left: 0.1rem;
        flex: 1 1 0;
        text-align: left;
      }
      .name {
        display: inline-block;
        text-align: left;
      }
      &.radio {
        .icon-state {
          background: url("~@/assets/images/default/common_radio_normal@2x.png")
            center center no-repeat;
          background-size: 0.24rem;
        }
        &.selected {
          .icon-state {
            background: url("~@/assets/images/default/common_radio_selected@2x.png")
              center center no-repeat;
            background-size: 0.24rem;
          }
        }
      }
      &.checkbox {
        .icon-state {
          background: url("~@/assets/images/default/common_checkbox_normal@2x.png")
            center center no-repeat;
          background-size: 0.24rem;
        }
        &.selected {
          .icon-state {
            background: url("~@/assets/images/default/common_checkbox_selected@2x.png")
              center center no-repeat;
            background-size: 0.24rem;
          }
        }
      }
    }
    &.column {
      display: block;
      .vux-checker-item {
        padding: 0.15rem 0;
      }
    }
  }
}
</style>