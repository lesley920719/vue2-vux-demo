<template>
  <div class="form-common">
    <section>
      <input-message v-for="(item,index) in formList"
                     :key="item.modelValue"
                     v-model="form[item.modelValue]"
                     :label="item.label"
                     :autoHeight="item.autoHeight"
                     :labelWidth="item.labelWidth"
                     :type="item.type"
                     :maxlength="item.maxlength"
                     :readonly="item.readonly"
                     :disabled="item.disabled"
                     :required="item.required"
                     :icon="item.icon"
                     :errorTips="item.errorTips"
                     :testRegExp="item.testRegExp"
                     :readClickName="item"
                     @readtextClick="readtextClick"
                     @handleIconClick="readtextClick"
                     :placeholder="item.placeholder">
        <slot v-if="item.slot">
          <input-checker v-if="item.radioList.length"
                         v-model="form[item.modelValue]"
                         :radioRequired="true"
                         class="vpInputRadio"
                         :isNeedLine="false"
                         direction="row"
                         type="radio"
                         :list="item.radioList"></input-checker>
        </slot>
      </input-message>
    </section>
    <div class="bottom-btn"
         @click="saveInfo">提交</div>
    <!-- show-cell: 展示cell栏，title：cell栏title， show-name：cell显示name值而不是value-->
    <popup-picker :show.sync="showPopupPicker"
                  :show-cell="false"
                  :popup-title="'请选择学历'"
                  :data="educationData"
                  v-model="form.education"
                  @on-change="onPickerChange"
                  show-name></popup-picker>
  </div>
</template>

<script>
// 获取数组匹配项
function getDataItem (arr, value) {
  return arr.find(item => item.value == value);
}
import {
  inputMessage,
  inputChecker,
} from '@/components'
import { PopupPicker } from 'vux'
export default {
  name: 'formCommon',
  components: {
    inputMessage,
    inputChecker,
    PopupPicker
  },
  data () {
    return {
      form: {
        name: '',
        telephone: '',
        gender: "1",
        birDate: '',
        education: [],
        educationName: '',
        description: '',
      },
      showPopupPicker: false,
      educationData: [[
        { name: '研究生及以上', value: '研究生及以上' },
        { name: '大学本科', value: '大学本科' },
        { name: '大学专科', value: '大学专科' },
        { name: '高中/中专', value: '高中/中专' },
        { name: '其他', value: '其他' },
      ]],  // 学历数据列表
      formList: [
        { label: '名字：', modelValue: 'name', required: true, placeholder: '请输入', inputTextAlign: 'right', errorTips: '请输入企业简称', testRegExp: /\S+/, disabled: false },
        // input 输入正则校验及maxlength
        { label: '手机号码：', modelValue: 'telephone', required: true, placeholder: '请输入', inputTextAlign: 'right', errorTips: '请输入正确的手机号码', testRegExp: this.regex.phone, disabled: false, type: 'Number', maxlength: 11 },
        // radio
        { label: '性别', modelValue: 'gender', required: true, inputTextAlign: 'right', readonly: true, slot: true, errorTips: '请选择性别', disabled: false, radioList: [{ name: '男', value: '1' }, { name: '女', value: '0' }] },
        // 日期
        { label: '出生日期', modelValue: 'birDate', required: true, placeholder: '请选择', inputTextAlign: 'right', readonly: true, readClickName: 'dateCommonChooseEvent', dateKey: 'birDate', errorTips: '请选择出生日期', disabled: false, icon: 'data' },
        // popupPicker
        { label: '学历：', modelValue: 'educationName', required: true, placeholder: '请选择', inputTextAlign: 'right', readonly: true, readClickName: 'popupPickerCommonChooseEvent', errorTips: '请选择学历 ', disabled: false, icon: 'arrow' },
        // 自动高度且指定label宽度
        // { label: '是否涉及建设项目安全设施“三同时”', modelValue: 'threeMeanwhileIf', required: true, inputTextAlign: 'right', readonly: true, slot: true, errorTips: '请选择是否涉及建设项目 安全设施“三同时”', disabled: false, radioList: [{ name: '是', value: '1' }, { name: '否', value: '0' }], autoHeight: true, labelWidth: '2.6rem' },
      ]
    }
  },
  computed: {
    todayDate () { // 今天日期
      let date1 = new Date();
      let date2 = new Date(date1);
      date2.setDate(date1.getDate());
      let y = date2.getFullYear();
      let m = date2.getMonth() + 1;
      m = String(m).padStart(2, '0');
      let d = date2.getDate();
      d = String(d).padStart(2, '0');
      return y + '-' + m + '-' + d
    },
  },
  methods: {
    readtextClick (params) {  // 只读文本点击emit事件
      if (params.disabled) return;
      this[params.readClickName](params);   // 触发相应method
    },
    dateCommonChooseEvent (params) { // 日期选择公共方法
      let dateKey = params.dateKey || params.modelValue;
      let value = this.form[dateKey] || this.todayDate;
      let _this = this;
      this.$vux.datetime.show({
        cancelText: "取消",
        confirmText: "确认",
        format: "YYYY-MM-DD",
        value: value,
        startDate: '1950-01-01',
        endDate: '2099-12-31',
        onConfirm (val) {
          _this.form[dateKey] = val;
        },
        onShow () { },
        onHide () { }
      });
    },
    popupPickerCommonChooseEvent (params) {  // 弹窗选择公共方法
      this.showPopupPicker = true
    },
    onPickerChange (val) {  // 弹窗值改变公共方法
      if (!val[0] && val[0] !== 0) return;
      console.log('picker val change', val);
      let itemData = getDataItem(this.popupPickerData[0], val[0]);
      this.form.educationName = itemData.name;
    },
    saveInfo () {    // 提交
      // 去空格 string.replace(/\s/g, "");
      let form = Object.assign({}, this.form);
      let data = this.formList;
      let isPassCheck = true;
      for (let item of data) {
        if (!item.required) continue; // 不是必须的跳过校验
        if (item.required) {
          if (!form[item.modelValue] || !form[item.modelValue]['length'] || (item.testRegExp && !item.testRegExp.test(form[item.modelValue]))) {
            this.$vux.toast.text(item.errorTips);
            isPassCheck = false;
            break;
          }
        }
      }
      if (!isPassCheck) return;
    }
  },
  created () {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less" scoped>
.form-common {
  width: 100%;
  /* background: @background-color; */
  section {
    background: #fff;
    padding: 0 0.3rem;
    margin-top: 0.1rem;
    margin-bottom: 2rem;
    /deep/ .vpInputRadio {
      .vux-checker-box {
        justify-content: flex-end;
        .vux-checker-item {
          flex: 0;
          &:first-child {
            margin-right: 0.4rem;
          }
        }
      }
    }
  }
  .bottom-btn {
    position: fixed;
    bottom: 0.44rem;
    left: 50%;
    transform: translateX(-50%);
    width: 5.4rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 0.4rem;
    font-size: 0.3rem;
    text-align: center;
    font-weight: 500;
    color: #fff;
    background: linear-gradient(
      183deg,
      rgba(73, 159, 255, 1),
      rgba(31, 121, 255, 1)
    );
    box-shadow: 0 0.02rem 0.13rem 0 rgba(143, 196, 255, 0.91);
  }
}
</style>
