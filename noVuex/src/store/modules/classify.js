
import axios from 'axios'
// import router from './router'

const classify = {
    state:{
        classData:[]
    },
    getters: {
        
    },
    mutations:{
        setClassData(state, payload){
            state.classData = payload.classData
        }
    },
    actions:{
        getId(context, payload){
            console.log(this)
            
        },
        getClassData(context, payload){
            axios(`/loho/search/?e=`+this.tid+`&page=`+this.page).then(res => {
                context.commit("setClassData",{classData:res.data.result.data})
            })
        }
    }
}

export default classify