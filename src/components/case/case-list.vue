<template>
    <div class="case_list">
        <ul>
            <li v-for="(item,index) in caseList" :key="index">
                <img :src="item.imgUrl" alt="">
                <div class="list_right flex flex_v">
                    <div class="name_position flex flex_justify">
                        <h3>{{item.name}}</h3>
                        <p>
                            <i></i>
                            <span>{{item.position}}</span>
                        </p>
                    </div>
                    <div class="list_intro row-3-ellipsis">{{item.introduction}}</div>
                    <div class="read_all" @click="showDialog(item)">查看全部</div>
                </div>
            </li>
        </ul>
        <transition name="bounce">
            <div class="case_dialog" v-if = 'isShowDialog'>
                <div class="dialog_box">
                    <div class="dialog_close" @click="close()"></div>
                    <div class="dialog_content flex flex_justify">
                        <div class="content_left flex flex_align_center">
                            <img :src="showItem.imgUrl" alt="">
                            <div>
                                <h3>{{showItem.name}}</h3>
                                <p>{{showItem.position}}</p>
                            </div>
                        </div>
                        <div class="content_right" v-show="isQR">
                            <p><img :src="QR_img" alt=""></p>
                            <span>长按识别下载</span>
                        </div>
                    </div>
                    <div class="dialog_description" v-html="showItem.description"></div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script type = 'text/javascript'>
// import { vpCaseDialog } from "@/components";
export default {
    components: {
        
    },
    props: {
        'caseList': "",
    },
    data() {
        return {
            isShowDialog : false,
            showItem: '',   // 弹窗展示内容
            QR_img: '',    // 二维码图片地址
            isQR: true,
        }
    },
    methods: {
        showDialog (item) {
            //userAgent 属性是一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值
            let u = navigator.userAgent;
            let currentDevice = ""; // 设备类型
            if( u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 ){
                currentDevice = "android";
            }else if( !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ){
                currentDevice = 'ios'
            }else {
                currentDevice = 'pc'
            }
            this.showItem = item;
            if( currentDevice == 'android' ){
                this.QR_img = this.showItem.android_QR
            }else if( currentDevice == 'ios' ){
                this.QR_img = this.showItem.ios_QR
            }
            if(this.QR_img){
                this.isQR = true;
            }else{
                this.isQR = false;
            }
            this.isShowDialog = true;
        },
        close () {
            this.isShowDialog = false;
        }
    },
    created(){
        
    }
}
</script>
<style lang ="less" scoped>
@import '../../assets/less/mixin.less';
@import '../../assets/less/theme.less';
.case_list {
    width: 100%;
    @keyframes slideInUp {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes slideOutDown {
        0% {
            transform: translateY(0);
            opacity: 1;
        }

        to {
            transform: translateY(100%);
            opacity: 0;
        }
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .bounce-enter-active {
    animation: slideInUp .5s;
    }
    .bounce-leave-active {
    animation: slideOutDown .5s;
    }
    .case_dialog {
        /* opacity: 0; */
        position: fixed;
        background: rgba(1,1,1,0.4);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 999999;
        .dialog_box {
            position: absolute;
            width: 6.6rem;
            padding: .8rem 0;
            background: #ffffff;
            border-radius: 10px;
            top: 1.2rem;
            left: 50%;
            transform: translateX(-50%);
            .dialog_content {
                width: 5.4rem;
                margin: 0 auto;
                .content_left {
                    height: 1.2rem;
                    img {
                        width: 1.2rem;
                        height: 1.2rem;
                        display: block;
                    }
                    div {
                        margin-left: .3rem;
                        h3 {
                            line-height: 24px;
                            font-size: 16px;
                            color: @theme-black;
                        }
                        p {
                            font-size: 12px;
                            color: @theme-black;
                        }
                    }
                }
                .content_right {
                    text-align: center;
                    p {
                        img{
                            width: 1.5rem;
                            height: 1.5rem;
                            display: block;
                        }
                    }
                    span {
                        font-size: 12px;
                        color: @theme-secondary;
                        line-height: 22px;
                    }
                }
            }
            .dialog_description {
                width: 6.6rem;
                padding: 0 .6rem;
                margin: .2rem auto 0;
                font-size: 12px;
                color: @theme-secondary;
                line-height: 22px;
                overflow-y: scroll;
                max-height: 6.3rem;
            }
            .dialog_close {
                .bg-img(common_shut);
                display: inline-block;
                width: .58rem;
                height: .58rem;
                background-size: 100%;
                position: absolute;
                top: -.29rem;
                right: -.29rem;
            }
        }
    }
    ul {
        width: 6.6rem;
        margin: 0 auto;
        li {
            display: flex;
            justify-content: space-between;
            margin-bottom:.5rem;
            img {
                width: .79rem;
                height: .79rem;
                display: block;
            }
            .list_right {
                width: 5.36rem;
                .name_position {
                    h3 {
                        font-size: 14px;
                        color: @theme;
                    }
                    p {
                        i {
                            display: inline-block;
                            width: .22rem;
                            height: .22rem;
                            .bg-img(introduce_loacation);
                            background-size: 100%;
                        }
                        span { color: @theme-black; }
                    }
                }
                .list_intro {
                    margin: .3rem 0;
                    color: @theme-secondary;
                }
                .read_all {
                    width: 1.32rem;
                    height: .4rem;
                    line-height: .4rem;
                    text-align: center;
                    border: 1px solid @theme-red;
                    color: @theme-red;
                    border-radius: .2rem;
                    align-self:  flex-end;
                    box-sizing: content-box;
                }
            }
        }
    }
}
</style>
