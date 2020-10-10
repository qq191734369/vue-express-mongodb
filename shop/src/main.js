import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import { initProject } from './initPriject'
import { Toast } from './util/http/func-components/toast'

initProject()

/** remove **/
console.log('need remove')
/** removeend **/

Vue.use(VueRouter)
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
