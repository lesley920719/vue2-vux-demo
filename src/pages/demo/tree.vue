<template>
  <div class="tree-demo">
    <tree v-if="treeDataList.length">
      <leaf @on-click="handleClick"
            :left="0.34"
            leftUnit="rem"
            fontSize="0.28rem"
            :config="{nameKey: 'name', childrenKey: 'cimDicts'}"
            :leftDifference="0.34"
            :data="treeDataList"></leaf>
    </tree>
  </div>
</template>

<script>
/**
 * getTreeItem：遍历数组tree，获取节点的所有父级name值
 * {params} data：tree数组
 * {params} code: 要查询的子节点code
 * {params} level: tree数组层级
 * {params} nameArr: 当前节点以及父节点name数组集合
 * 需要的外层变量let isDeep = false;是否继续深度遍历
 * 需要的外层变量let name = '';获取目标的name集合拼接字符串
 */
function getTreeTotalName (data, code, level = 0, nameArr = []) {
  let _isDeep = false;   // 是否继续深度遍历
  let _name = '';   // name集合名称
  function getTreeItem (data, code, level, nameArr) {
    for (let item of data) {
      nameArr = nameArr.slice(0, level)   // 去除比当前节点层级深的name元素
      nameArr[level] = item.name;
      if (item.code == code) {
        _isDeep = true;
        _name = nameArr.join('/');
        return nameArr
        break;
      }
      if (_isDeep) break;
      // 有子节点且可继续遍历时
      if (item.cimDicts && item.cimDicts.length && !_isDeep) getTreeItem(item.cimDicts, code, level + 1, nameArr)
    }
  }
  getTreeItem(data, code, level, nameArr)
  return _name;
}
import { Tree, Leaf } from '@/components/tree/index.js';
import treeData from '@/pages/demo/treeData'
export default {
  name: 'treeDemo',
  components: {
    Tree,
    Leaf
  },
  data () {
    return {
      treeDataList: [

      ],
    }
  },
  methods: {
    handleClick (params) {  // 选择某个树结构某个节点
      console.log('params', JSON.stringify(params));
      let name = getTreeTotalName(this.treeDataList, params.code); // 获取name父级集合名称
      console.log(name);
      this.$vux.alert.show({
        title: '提示',
        content: '选择项：' + name,
      })
    },
  },
  created () {
    this.treeDataList = treeData;
  },
  computed: {


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang ="less" scoped>
.tree-demo {
}
</style>
