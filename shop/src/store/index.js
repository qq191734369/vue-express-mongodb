import vuex from 'vuex'
import Vue from 'vue'
import { userModule } from './userInfo'

Vue.use(vuex)

const store = new vuex.Store({
  modules: {
    userModule
  }
})

export default store