<template>
    <!--外部浏览器头部，origin == '3'显示店铺信息 -->
    <div class="header-store" v-if="clientCommonData.origin == '3'">
        <div class="avator" @click="goHome">
            <img :src="clientShopData.logo || require('../../assets/images/default_avator@2x.png')" alt="" class="avator-img">
        </div>
        <div class="info">
            <p class="info-name">{{clientShopData.name}}</p>
            <p class="info-address">{{clientShopData.businessAddress}}</p>
        </div>
        <a :href="`tel:${clientShopData.phoneNumber}`" class="take-phone"></a>
    </div>
    <div class="header-tab" :class="{
                'iphone':clientCommonData.origin == '1',
                'android':clientCommonData.origin == '2'
                }" v-else>
        <a href="javascript:" @click="goBack" class="back"></a>
        <!-- <ul class="title-tab" @click="tabClickHandler">
                <li class="title-tab-item" :class="{'active': curValue == 0}" :data-index="0">商品</li>
                <li class="title-tab-item" :class="{'active': curValue == 1}" :data-index="1">详情</li>
                <li class="title-tab-item" :class="{'active': curValue == 2}" :data-index="2">评价</li>
            </ul> -->
        <ul class="title-tab" @click="tabClickHandler">
            <li class="title-tab-item">{{title}}</li>
            <!-- <p class="shareImg"><img src="../../assets/images/share_b@2x.png" alt=""></p> -->
        </ul>
        <!-- <span class="share" :class="{'has':clientShareData}" @click="doShare"></span> -->
    </div>
</template>
<script type = 'text/javascript'>
    import {
        mapState
    } from 'vuex';
    import {
        clickProxy
    } from '@/utils/clickProxy';
    import goBack from './goBack.js';
    export default {
        mixins: [goBack],
        props: ['value'],
        data() {
            return {
                curValue: this.value,
                title: "商品详情"
            }
        },
        computed: {
            ...mapState({
                clientCommonData: state => state.client.commonData,
                clientShareData: state => state.client.shareData,
                clientShopData: state => state.client.shopData
            }),
        },
        methods: {
            tabClickHandler(e) {
                let target = clickProxy(e);
                this.curValue = target.dataset.index;
                this.$emit('on-change', target.dataset.index)
            },
            goHome() {
                this.$router.replace({
                    path: '/home'
                })
            },
            doShare() { //分享
            console.log(this.clientShareData)
                window.LvUJsBridge.invoke('GoShare', this.clientShareData, function(response) {
                    //处理oc过来的回调
                })
                if(this.$route.path.match('/market/detail')){
                    window.webkit.messageHandlers.shareTo.postMessage(this.clientShareData);
                }
            }
        },
        watch: {
            curValue(val) {
                this.$emit('input', val);
            },
            value(val) {
                this.curValue = val;
            }
        }
    }
</script>
<style lang = 'less' scoped>
    @import '../../assets/less/mixin.less';
    .header-store {
        display: flex;
        align-items: center;
        width: 100%;
        height: 0.98rem;
        .bg-img(lone);
        background-size: 101% 100%;
        .avator {
            position: relative;
            width: 1rem;
            height: 100%;
            padding-left: 0.24rem;
            .avator-img {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                display: block;
                width: 0.56rem;
                height: 0.56rem;
                /* border-radius: 100%; */
            }
        }
        .info {
            flex: 1 1 auto;
            width: 0;
            .info-name {
                margin-bottom: 0.06rem;
                line-height: 1;
                font-size: 0.28rem;
                color: #FFFFFF;
                font-weight: bold;
            }
            .info-address {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.2rem;
                color: #FFFFFF;
            }
        }
        .take-phone {
            width: 1rem;
            height: 100%;
            padding-right: 0.24rem;
            .bg-img(top_phone, 0.2rem, center);
            background-size: 0.56rem;
        }
    }
    .header-tab {
        display: flex;
        width: 100%;
        /* background: #F9F9F9; */
        background: #fff;
        box-shadow: inset 0 -1px 0 0 rgba(219, 219, 219, 0.50);
        position: relative;
        &.iphone {
            height: 1.28rem;
            padding: 0.4rem 0.14rem 0;
        }
        &.android {
            height: 0.88rem;
            /* padding: 0 0.14rem; */
        }
        .back,
        .share {
            width: 0.88rem;
            height: 0.88rem;
        }
        .back {
            .bg-img(arrow_back, right, center);
            background-size: 0.56rem;
            position: absolute;
            top: 0;
            left: 0;
        }
        .share.has {
            .bg-img(share_b, left, center);
            background-size: 0.56rem;
            position: absolute;
            top: 0;
            right: 0;
        }
        .title-tab {
            height: 0.88rem;
            margin: 0 auto;
            font-size: 0;
            /* padding-right: .88rem; */
            .title-tab-item {
                display: inline-block;
                padding: 0 0.2rem;
                line-height: 0.88rem;
                text-align: center;
                /* font-size: 0.28rem;
                color: #999999; */
                font-size: .32rem;
                color: #353535;
                &.active {
                    font-size: 0.32rem;
                    color: #353535;
                }
            }
        }
    }
</style>