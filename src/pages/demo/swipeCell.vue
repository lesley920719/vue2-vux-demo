<template>
  <div class="swipe-cell-demo">
    <swipe-cell></swipe-cell>
    <h3>自定义内容:</h3>
    <swipe-cell ref="swipe-cell2">
      <template #swipe-cell-content>
        <div class="item-img">
          <img :src="require('@/assets/images/home_image_1@2x.png')"
               alt="">
        </div>
        <div class="item-desc flex">
          <p>自定义滑块单元格</p>
          <p class="ellipsis">内容1</p>
        </div>
      </template>
      <template #swipe-cell-right>
        <div class="btn edit"
             @click="editDanger(content)">
          <img src="~@/assets/images/default/edit.png"
               alt="edit.png" />
          <span>编辑</span>
        </div>
        <div class="btn del"
             @click="deleteDanger('内容1')">
          <img :src="require('@/assets/images/default/delete.png')"
               alt="delete.png" />
          <span>删除</span>
        </div>
      </template>
    </swipe-cell>
  </div>
</template>

<script>
import { swipeCell } from '@/components';
export default {
  name: 'swipeCellDemo',
  components: {
    swipeCell,
  },
  data () {
    return {
      tabChosen: 1,
      code: 'basketball',
    }
  },
  methods: {
    deleteDanger (content) {
      this.$vux.confirm.show({
        title: '提示',
        content: '是否确认删除' + content,
        confirmText: '确认',
        cancelText: '取消',
        onConfirm: () => {
          console.log('删除', content);
          this.$refs['swipe-cell2'].restSlide();
        },
        onCancel () { // 取消
        },
      })
    },

  },
  created () {

  },
  computed: {


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less" scoped>
.swipe-cell-demo {
  h3 {
    padding: 0.3rem;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
