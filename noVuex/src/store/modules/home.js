
import axios from 'axios'

const home = {
    state:{
        homeList:[]
    },
    getters:{//提前分离数据，方便使用
        focus: state=>state.homeList.focus,
        cates: state=>state.homeList.cates,
    },
    mutations:{//修改数据
        setHomeList(state,payload){
            state.homeList = payload.homeList
        }
    },
    actions:{
        getHomeList(context,payload){//获取数据  执行action 和服务器交互
            axios("/loho/index").then(res=>{//提交给motation 修改数据               
                context.commit("setHomeList",{homeList:res.data.result})
            })
        }
    }
}

export default home