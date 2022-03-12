import Vue from 'vue'
import App from './App.vue'
import AttendanceCalendar from '../../../lib'

Vue.config.productionTip = false

Vue.use(AttendanceCalendar)

new Vue({
  render: h => h(App)
}).$mount('#app')
