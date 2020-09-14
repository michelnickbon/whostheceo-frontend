import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/store'
import moment from 'moment'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.prototype.moment = moment
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
