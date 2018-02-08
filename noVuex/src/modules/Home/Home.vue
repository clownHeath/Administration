<template>
    <div class="app_home">
        <v-header>
            <a href="javascript:window.history.go(-1);" slot="h_left" >
                北京
                <i class="iconfont icon-jiantouxia"></i>
            </a>
            <span slot="h_center">LOHO</span>
            <router-link to="Cart" slot="h_right1" class="iconfont icon-gouwuche"></router-link>
            <router-link to="" slot="h_right2" class="iconfont icon-caidan"></router-link>
        </v-header>

        <v-content>
            <div class="home_swiper">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(ele, index) in focus" :key="index">
                        <img :src="ele.pic" />
                    </mt-swipe-item>
                </mt-swipe>
            </div>   

            <ul class="classmenu">
                <li v-for="(ele, index) in cates" :key="index">
                    <router-link :to="{name:'Classify',params:{cid:ele.cid,tid:ele.tid,tag:ele.tag}}" >
                        <img :src="ele.pic" />
                        <span>{{ele.tag}}</span>
                    </router-link>
                </li>
            </ul> 
        </v-content>   
        <v-footer></v-footer>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'Home',
        computed:{
            //辅助函数获取数据  store.state
            ...mapGetters([
                "focus","cates"
            ])
        },
        methods:{
            ...mapActions([//映射 派发action 等同于store.dispatch
                "getHomeList"
            ])
        },
        mounted(){
            //直接调用方法
            this.getHomeList()
        }
    }
</script>
<style lang="scss" scoped>
    .app_home{
        overflow: hidden;

        .public_header{
            .h_left{
                margin-left: 5px;

                a{
                    font-size: 14px;

                    i{
                        padding-left: 5px;
                    }
                }
            }
            span{
                font-weight: 900;
                font-size: 18px;
            }
            a{
                font-size: 22px;
                color: #333;
                padding: 0 15px;
            }
        }
// 内容
        .public_content{
            
            .home_swiper{
                height: 1.8rem;
                width: 100%;

                img{
                    width: 100%;
                    height: 100%;
                }
                // .mint-swipe-indicators{   // 按钮样式
                //     .mint-swipe-indicator{
                //         opacity: 1; 
                //     }
                // }
            }
            .classmenu{
                width: 100%;
                min-height: 2.1rem;

                li{
                    float: left;
                    width: 25%;
                    height: 50%;
                    margin-top: 5%;

                    a{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 100%;

                        img{                   
                            width: 55%;
                        }
                        span{
                            font-size: 12px;
                            color: #333;
                            line-height: 12px;
                            padding-top: 10px;
                        }
                    }
                }
            }
        }
    }
</style>