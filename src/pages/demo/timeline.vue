<template>
  <div class="timeline-demo">
    <timeline>
      <timeline-item v-for="(item, index) in timelineList"
                     :key="index"
                     :level="Number(index) + 1"
                     :content="item"
                     :show="item.showDetail"></timeline-item>
    </timeline>
  </div>
</template>

<script>
import { Timeline, TimelineItem } from '@/components/timeline/index.js';
export default {
  name: 'timelineDemo',
  components: {
    Timeline,
    TimelineItem
  },
  data () {
    return {
      timelineList: [
        { status: '发起人', time: '2020-04-16 10:23:00', name: '张三' },
        { status: '园区审核', time: '2020-05-16 10:23:00', name: '李四', form: { result: '1', remarks: '审核意见审核意见审核意见审核意见审核意见审核意见审核意见审核意见审核意见' }, showDetail: false },
        { status: '政府部门审核', time: '2020-06-16 10:23:00', name: '王五', form: { result: '0', remarks: '审核意见审核意见审核意见审核意见审核意见审核意见审核意见审核意见审核意见' }, showDetail: false },
        { status: '最终审核', time: '2020-07-16 10:23:00', name: '赵六', form: { result: '0', remarks: '审核意见审核意见审核意见审核意见审核意见审核意见审核意见审核意见审核意见' }, showDetail: false },
      ],
    }
  },
  methods: {

  },
  created () {

  },
  computed: {


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less" scoped>
.timeline-demo {
  margin-top: 0.2rem;
  padding: 0 0.3rem;
}
</style>
