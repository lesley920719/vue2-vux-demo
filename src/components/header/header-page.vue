<template>
    <div class="header">
        <a href="javascript:" @click="goBack" class="back" v-if = "isShowBack"></a>
        <span class="title">{{title}}</span>
    </div>
</template>
<script type = 'text/javascript'>
    import goBack from './goBack.js';
    export default {
        mixins: [goBack],
        props: {
            title: '',
            isShowBack: '',
        },
        data() {
            return {}
        },
        computed: {
            
        },
        methods: {
            
        }
    }
</script>
<style lang ="less" scoped>
    @import '../../assets/less/mixin.less';
    @import '../../assets/less/theme.less';
    .header {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 0.88rem;
        padding: 0 0.14rem;
        background: #fff;
        box-shadow: inset 0 -1px 0 0 rgba(219, 219, 219, 0.50);
        .back {
            position: absolute;
            display: block;
            width: 0.68rem;
            height: 0.88rem;
            left: 0;
            .bg-img(topbar_back_arrow, right, center);
            background-size: 0.4rem;
        }
        .title {
            position: absolute;
            left: 0.8rem;
            right: 0.8rem;
            height: 0.88rem;
            line-height: 0.88rem;
            text-align: center;
            font-size: 0.32rem;
            color: #222;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>
