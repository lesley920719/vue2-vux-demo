<template>
    <div class="case_dialog" v-if = 'isShowDialog'>
        {{caseItem}}
    </div>
</template>
<script type = 'text/javascript'>
export default {
    props: ['caseItem', 'isShowDialog'],
    data() {
        return {
           
        }
    },
    methods: {
        
    },
    created(){
        
    }
}
</script>
<style lang ="less" scoped>
@import '../../assets/less/mixin.less';
@import '../../assets/less/theme.less';
.case_dialog {
    position: fixed;
    background: rgba(1,1,1,0.6);
    width: 100%;
    height: 100%;
    z-index: 999999;
}

</style>
