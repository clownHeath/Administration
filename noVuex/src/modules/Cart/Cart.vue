<template>
    <div class="app_home">
        <v-header tit="cart">
            <a href="javascript:window.history.go(-1);" class="iconfont icon-fanhui" slot="h_left"></a>
            <router-link to="" slot="h_right1" class="iconfont icon-gouwuche"></router-link>
            <router-link to="" slot="h_right2" class="iconfont icon-caidan"></router-link>
        </v-header>
    </div>
</template>
<script>
    export default {
        name:'Home',

    }
</script>
<style lang="scss" scoped>
    .app_home{
        overflow: hidden;

        a{
            font-size: 22px;
            color: #333;
            padding: 0 5px;
        }
    }
</style>