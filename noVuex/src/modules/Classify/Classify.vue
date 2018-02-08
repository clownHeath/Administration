<template>
    <div class="app_home">
        <v-header>
            <a href="javascript:window.history.go(-1);" class="iconfont icon-fanhui" slot="h_left"></a>
            <span slot="h_center">1</span>
            <router-link to="Cart" slot="h_right1" class="iconfont icon-gouwuche"></router-link>
            <router-link to="" slot="h_right2" class="iconfont icon-caidan"></router-link>
        </v-header>

        <v-content>
            <!-- <div class="home_content">
                <mt-loadmore 
                    :top-method="loadTop" 
                    :bottom-method="loadBottom" 
                    :bottom-all-loaded="variable" 
                    ref="loadmore"
                >
                    <ul class="list_box">
                        <li v-for="(ele, index) in list" :key="index">
                            <img v-lazy="`http://image.loho88.com/`+ele.img" />
                            <p v-text="ele.title"></p>
                            <h2>
                                <b>￥{{ele.price}}</b>
                                <span>{{ele.salesNum}}人已买</span>
                            </h2>
                        </li>
                    </ul>
                </mt-loadmore>
            </div> -->
        </v-content>   
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'Class',
        // data(){
        //     return {
        //         list:[],
        //         variable:false,
        //         page:1,
        //         tag:"",
        //         cid:"",
        //         tid:""
        //     }
        // },
        computed:{
            ...mapGetters([
                "list","rid"
            ])
        },
        methods: {
            ...mapActions([
                "getId","getClassData"
            ]),
            // loadTop(){ //上拉刷新
            // console.log("methods")
            //     this.page = 1  //刷新数据
            //     // this.variable = false
            //     // console.log("删啦舒心")
            //     // console.log(this.$refs.loadmore)
            //     this.getdata(()=>{
            //         this.$refs.loadmore.onTopLoaded(); 
            //         //onTopLoaded()   取消下拉状态
            //         //ref中的值要与  下拉状态消失的代码中的$refs.loadmore 要对应。
            //     })
            // },
            // loadBottom(){ //下拉加载
            //     this.page++  //刷新数据
            //     // this.bottomPullText
            //     this.variable = false //bottom-all-loaded 若为真，则 bottom-method 不会被再次触发
            //     // console.log("下拉加载")
            //     this.getdata(()=>{
            //         this.$refs.loadmore.onBottomLoaded()
            //     })
            //     // bottom-method 是上拉刷新执行的方法
            //     // bottomPullText  为 pull 时加载提示区域的文字 默认值为上拉刷新，一般我会定义为上拉加载更多
            //     // bottom-all-loaded 若为真，则 bottom-method不会被再次触发
            // },
            // getdata(cb){
            //     this.axios.get(`/loho/search/?e=`+this.tid+`&page=`+this.page).then(res=>{
            //         // console.log(res.data.result.data)
            //         if(this.page*20>=res.data.result.count){
            //             //说明数据请求完了，已经没有更多数据了
            //             // console.log("allLoaded")
            //             this.allLoaded = true  //变成ture 不会再触发
            //         }
            //         if(this.page===1){  
            //             this.list = res.data.result.data
            //         }else {
            //             //更多数据需要拼接
            //             this.list = this.list.concat(res.data.result.data)
            //         }
            //         cb&&cb()
            //     })
            // }
        },
        mounted(){
            // this.$store.dispatch("classList")
            // console.log(this.$route.params)
            // this.cid=this.$route.params.cid,
            // this.tid=this.$route.params.tid,
            // this.tag=this.$route.params.tag,
            // // console.log(`/loho88/search/?e=`+this.tid+`&page=`+this.page)
            // // console.log(this.tid)
            // this.getdata()
            this.getId()
            this.getClassData()
        }
    }
</script>
<style lang="scss" scoped>
    .app_home{
        height: 100%;
        width:100%;
// 头部
        a{
            font-size: 22px;
            color: #333;
            padding: 0 15px;
        }
// 内容
        .public_content{
            
            background: #f2f2f2;

            .home_content{
                height: 100%;
                width: 100%;
                

                .list_box{
                    width:100%;	
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    li{
                        width:41%;
                        background:#fff;
                        padding:4%;
                        margin-top:2%;

                        img{
                            width:100%;	
                            margin-bottom:0.4rem;
                            margin-top:0.3rem;
                        }
                        img[lazy=loading] {
                             background:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516361627492&di=959945256579067874a386d78198271f&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F001ZdA6Jgy6Z2WgnRaW82%26690) no-repeat;
                             background-size:100% 100%;                       
                        }
                        p{
                            width:100%;
                            color:#333;
                            line-height: 15px;
                            height:0.3rem;
                            font-size: 14px;
                            overflow : hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                        h2{
                            width:100%;	
                            display: flex;
                            justify-content: space-between;
                            margin-top:0.2rem;

                            b{
                                color:red;
                                font-size: 12px;
                                font-weight: 900;
                            }
                            span{
                                color:#c1c1c1;
	                            font-size: 12px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
