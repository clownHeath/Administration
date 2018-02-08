<template>
    <div class="public_header">
        <div class="h_left">
            <slot name="h_left" class="h_left1"></slot>
        </div>

        <slot name="h_center" class="h_center"></slot>

        <h5 class="h_right">
            <slot name="h_right1" class="h_right1"></slot>
            <slot name="h_right2" class="h_right2"></slot>
        </h5> 
    </div>
</template>
<script>
    export default {
        name: "app-header"
    }
</script>
<style  scoped lang="scss">
    .public_header{
        height: 60px;         
        background: #fff;
        border-bottom: 1px solid #f2f2f2;
        display: fixed;
        justify-content:center;
        position: fixed;
        top: 0;
        left: 0;
        width:100%;

        span{
            display: block;
            height: 60px;
            line-height: 60px;
            text-align: center;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            font-size: 16px;
            color: #333;
        }
        .h_left{
            text-align: center;
            line-height: 60px;
            height: 60px;
            float: left;
            position: relative;
            z-index: 1;
        }
        .h_right{
            height: 60px;
            float: right;
            line-height: 60px;
            position: relative;
            
        }

    }   
</style>