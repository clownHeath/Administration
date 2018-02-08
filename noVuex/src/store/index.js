
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import classify from './modules/classify'

Vue.use(Vuex)

const Store = new Vuex.Store({
    modules:{
        home, classify
    }
})

export default Store