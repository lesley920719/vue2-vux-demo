<template>
    <div class="navtab">
        <ul class="navwrap clearfix" ref="navwrap">
            <li ref="tabitem" class="tabitem" v-for="(item,index) in tabList" :key="index" @click="changeTab(index, item.code)">
                <span :class="{ active: tabChosen === index }">
                {{ item.name }}
                </span>
            </li>
        </ul>
    </div>
</template>
<script type = 'text/javascript'>
    export default {
        props: {
            tabList: '',
            tabChosen: 0,
        },
        data() {
            return {

            }
        },
        computed: {
            
        },
        methods: {
            changeTab(index,code){
                let _this = this
                _this.$emit('nav-scroll',{navIndex:index,navCode:code}) // 通过emit事件向父组件传值
                _this.$nextTick(()=>{
                    //点击li的时候标签居中
                    let items = _this.$refs.tabitem;
                    let UlWidth = _this.$refs.navwrap.getBoundingClientRect().width
                    setTimeout(() => { //定位到选中的tab
                        // _this.$refs.navwrap.scrollLeft = items[index].offsetLeft
                        _this.$refs.navwrap.scrollLeft = items[index].offsetLeft - (window.innerWidth - items[index].getBoundingClientRect().width) / 2
                    },0)
                })  
            }
        }
    }
</script>
<style lang ="less" scoped>
    @import '../../assets/less/mixin.less';
    @import '../../assets/less/theme.less';
    .navtab {
        width: 100%;
        height: .8rem;
        .navwrap {
            height: 100%;
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
            overflow-y: hidden;
            white-space: nowrap;
            font-size: 0.26rem;
            color: #6F6F6F;
            &::-webkit-scrollbar{  /* 隐藏滚动条 */
                display: none;
            }
            .tabitem {
                display: inline-block;
                width: 1.7rem;
                height: 100%;
                line-height: .8rem;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                span {
                    display: inline-block;
                    height: 100%;
                    &.active {
                    border-bottom: .04rem solid #0F8EEB;
                    color: #0F8EEB;
                    }
                }
            }
        }
    }
</style>
