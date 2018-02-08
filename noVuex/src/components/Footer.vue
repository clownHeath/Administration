<template>
     <div class="public_footer">
        <ul>
            <li v-for="(ele, index) in icon" :key="index">
                <router-link :to="ele.id">
                    <img :src="ele.img" />
                    <span>{{ele.size}}</span>
                </router-link>    
            </li>
        </ul>
     </div>
</template>
<script>
    export default {
        name: "app-footer",
        data(){
            return {
                icon:[
                    {
                        img:"http://m.loho88.com/assets/images/index-bootom/home.jpg",
                        size:"首页",
                        id:"Home"
                    },
                    {
                        img:"http://m.loho88.com/assets/images/index-bootom/groupBuy.png",
                        size:"团购",
                        id:"Home"
                    },
                    {
                        img:"http://m.loho88.com/assets/images/index-bootom/serve.jpg",
                        size:"客服",
                        id:"Home"
                    },
                    {
                        img:"http://m.loho88.com/assets/images/index-bootom/location.jpg",
                        size:"附近体验店",
                        id:"Home"
                    },
                    {
                        img:"http://m.loho88.com/assets/images/index-bootom/my.jpg",
                        size:"我的首页",
                        id:"Home"
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .public_footer{
        height: 54px;
        width: 100%;
        background: #fff;
        border-top: 1px solid #F2F2F2;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index:1;

        ul{
            height: 54px;
            display: flex;

            li{
                width:20%;

                a{
                    height:54px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    img{
                        height: 28px;
                        width: 28px;
                        display: inline-block;
                    }
                    span{
                        font-size: 12px;
                        color: #333;
                        padding-top: 2px;
                    }
                }
            }
        }
    }
</style>