<template>
  <group v-if="type==='textarea'">
    <label :class="{'required': requiredVal}">{{label}}</label>
    <x-textarea :max="maxlength"
                v-model="curVal"
                :readonly="readonlyVal"
                :disabled="disabledVal"
                :placeholder="placeholder"
                :show-counter="false"></x-textarea>
  </group>
  <div v-else>
    <div class="input-message"
         :class="{'border-1px-b': borderB, 'auto-height': autoHeight}">
      <label :class="{'required': requiredVal}"
             :style="labelWidth ? 'width:' + labelWidth : ''">{{label}}</label>
      <div class="flex-full">
        <slot>
          <div class="content-text"
               :class="[inputTextAlign, {'placeholder': !curVal}]"
               v-if="readonlyVal"
               @click="readtextClick">{{curVal || placeholder}}</div>
          <input :class="[inputTextAlign]"
                 :type="type"
                 :maxlength="maxlength"
                 @input="onInput"
                 @blur="onBlur"
                 @focus="onFocus"
                 :placeholder="placeholder"
                 v-model="curVal"
                 :readonly="readonlyVal"
                 :disabled="disabledVal"
                 v-keyBoard
                 v-else>
        </slot>
      </div>
      <div class="extra-text"
           v-if="extraText"
           @click="extraTextClick">{{extraText}}</div>
      <span class="icon-line"
            v-if="icon && extraText"></span>
      <i class="icon-input"
         :class="[icon]"
         v-if="icon"
         @click="handleIconClick"></i>
    </div>
    <div class="input-tips"
         :class="[inputTextAlign]"
         v-show="showTips"
         v-if="errorTips">* {{errorTips}}</div>
  </div>
</template>
<script type = 'text/javascript'>
import { XTextarea, Group } from 'vux';
export default {
  name: 'inputMessage',
  components: {
    XTextarea,
    Group
  },
  props: {
    value: [String, Number],
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    type: {
      type: String,
      default: 'text'
    },
    required: { // 是否必填
      type: Boolean,
      default: false
    },
    readonly: { // 只读
      type: Boolean,
      default: false
    },
    readClickName: { // 只读框emit事件参数，用于父页面接收并触发相应method
      type: [String, Object]
    },
    disabled: { // 禁用
      type: Boolean,
      default: false
    },
    labelWidth: {   // label是否固定宽度
      type: String,
      default: '',
    },
    autoHeight: { // 是否使用padding自动高度（默认为固定1reml，且line-height为1rem）
      type: Boolean,
      default: false
    },
    trim: { // 當只能輸入英文情況下，是否允許輸入空格
      type: Boolean,
      default: true
    },
    inputTextAlign: {   // input框文字水平位置 left,center,right
      type: String,
      default: 'right'
    },
    language: {
      // CN：中文  EN: 英文 NUM: 数字
      type: String
    },
    maxlength: {
      type: Number,
      default: 50
    },
    icon: { //editor 、 arrow 、date
      type: String,
      default: ''
    },
    borderB: {  // border-bottom
      type: Boolean,
      default: true
    },
    extraText: {    // 额外的文本框内容
      type: String,
      default: ''
    },
    errorTips: {    // 错误提示信息
      type: String,
      default: ''
    },
    testRegExp: {   // 字段验证正则表达式
      type: RegExp
    },
  },
  data () {
    return {
      curVal: this.value,
      readonlyVal: this.readonly,
      disabledVal: this.disabled,
      requiredVal: this.required,
      showTips: false
    };
  },
  created () { },
  methods: {
    onInput () {
      // 输入框位数限制
      if (this.curVal.length > this.maxlength) this.curVal = this.curVal.slice(0, this.maxlength)
      // 自动校验正则
      if (this.requiredVal && this.errorTips && this.testRegExp && this.testRegExp.test(this.curVal)) this.showTips = false
      switch (this.language) {
        case 'CN':
          if (/[^\u4E00-\u9FA5]/g.test(this.curVal))
            this.$vux.toast.text('只能输入中文');
          this.curVal = this.curVal.replace(/[^\u4E00-\u9FA5]/g, '');
          break;
        case 'NUM':
          if (/[^0-9]/g.test(this.curVal)) this.$vux.toast.text('只能输入数字');
          this.curVal = this.curVal.replace(/[^0-9]/g, '');
          break;
        case 'EN':
          let rexExp = this.trim ? /[^\sa-zA-Z]/g : /[^a-zA-Z]/g
          if (rexExp.test(this.curVal))
            this.$vux.toast.text('只能输入英文');
          this.curVal = this.curVal.replace(rexExp, '');
          break;
        case 'EnNum':
          let rexExp1 = /[^\s\a-\z\A-\Z0-9]/g //可以輸入空格
          if (rexExp1.test(this.curVal)) {
            this.$vux.toast.text('只能输入英文和数字');
            this.curVal = this.curVal.replace(rexExp1, '');
          }
          break;
        case 'EnNumTwo':
          let rexExp3 = /[^\a-\z\A-\Z0-9]/g //不能輸入空格
          if (rexExp3.test(this.curVal)) {
            this.$vux.toast.text('只能输入英文和数字');
            this.curVal = this.curVal.replace(rexExp3, '');
          }
          break;
        case 'CnNum':
          let rexExp2 = /[^\a-\z\A-\Z]/g
          if (!rexExp2.test(this.curVal)) {
            this.$vux.toast.text('只能输入中文和数字');
            this.curVal = '';
          }
          break;
        default:
          break;
      }
    },
    onFocus () { // input聚焦事件
      if (this.showTips) this.showTips = false
    },
    onBlur () { // input失去焦点事件 -- 校验正则，如果不通过则展示下面tips
      if (this.requiredVal && this.errorTips && this.testRegExp && !this.testRegExp.test(this.curVal)) this.showTips = true
    },
    readtextClick () {  // 只读文本点击事件，传递事件名参数
      if (this.disabledVal) return; // disabled状态点击无效
      this.$emit('readtextClick', this.readClickName);
    },
    extraTextClick () { // 额外文本框点击事件
      if (this.readonlyVal) return;
      this.$emit('extraTextClick');
    },
    handleIconClick () {    // icon图标点击事件
      if (this.disabledVal) return; // disabled状态点击无效
      this.$emit('handleIconClick', this.readClickName);
    },
  },
  watch: {
    value (val) {
      this.curVal = val;
    },
    readonly (val) {
      this.readonlyVal = val;
    },
    disabled (val) {
      this.disabledVal = val;
    },
    required (val) {
      this.requiredVal = val;
    },
    curVal (val) {
      this.curVal = val;
      this.$emit('input', this.curVal);
    }
  }
};
</script>
<style lang = 'less' scoped>
@import "~@/assets/less/border-1px.less";
.input-message {
  position: relative;
  padding: 0 0.28rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  line-height: 1rem;
  &.border-1px-b {
    .border-1px-b(@c: @border-color, @O: 0.2);
  }
  &.auto-height {
    height: auto;
    padding: 0.28rem;
    line-height: 0.48rem;
  }
  label {
    position: relative;
    font-size: 0.28rem;
    color: @font-main;
    margin-right: 0.28rem;
    &.required {
      &:before {
        content: "*";
        position: absolute;
        top: 50%;
        left: -0.28rem;
        transform: translateY(-50%);
        color: @tips-color;
        font-size: 0.28rem;
      }
    }
  }
  input {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: right;
    font-size: 0.28rem;
    color: @font-main;
  }
  .flex-full {
    flex: 1 1 0;
    width: 0;
    .left {
      text-align: left;
    }
    .right {
      text-align: right;
    }
    .center {
      text-align: center;
    }
  }
  .content-text {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.28rem;
    color: @font-main;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &.placeholder {
      color: @placeholder-color;
    }
  }
  .extra-text {
    color: @theme-color;
    font-size: 0.26rem;
    font-weight: 500;
    margin-left: 0.28rem;
  }
  .icon-line {
    height: 0.43rem;
    width: 0.03rem;
    background: @theme-color;
    margin-left: 0.28rem;
  }
  .icon-input {
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.2rem;
    &.scan {
      background: url("~@/assets/images/default/scan@2x.png") right 0 no-repeat;
      background-size: 0.3rem;
    }
    &.date {
      background: url("~@/assets/images/default/date.png") right 0 no-repeat;
      background-size: 0.3rem;
    }
    &.arrow {
      background: url("~@/assets/images/default/arrow.png") right 0 no-repeat;
      background-size: 0.3rem;
    }
    &.search {
      background: url("~@/assets/images/default/search.png") right 0 no-repeat;
      background-size: 0.3rem;
    }
  }
}
.input-tips {
  height: 0.6rem;
  line-height: 0.6rem;
  color: @tips-color;
  font-size: 0.24rem;
  text-align: right;
  /* &.left {
    text-align: left;
  }
  &.right {
    text-align: right;
  }
  &.center {
    text-align: center;
  } */
}
/deep/ .weui-cells {
  margin-top: 0;
  padding: 0.2rem 0.28rem;
  &::before,
  &::after {
    border: none;
    color: transparent;
  }
  label {
    display: block;
    margin-right: 0;
    margin-bottom: 0.2rem;
    color: #8d9095;
    font-size: 0.28rem;
    position: relative;
    &.required {
      &:before {
        content: "*";
        position: absolute;
        top: 50%;
        left: -0.28rem;
        transform: translateY(-50%);
        color: @tips-color;
        font-size: 0.28rem;
      }
    }
  }
  .weui-cell {
    &::before,
    &::after {
      border: none;
      color: transparent;
    }
    padding: 0;
    textarea {
      font-size: 0.28rem;
      color: @font-main;
      background: #f4f6f8;
      border-radius: 0.09rem;
      padding: 0.23rem;
    }
  }
}
</style>