/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2022/3/12
 * ======================================== */

import plugin from './AttendanceCalendar.vue'

plugin.install = function (Vue) {
    Vue.component(plugin.name, plugin)
}

import 'element-ui/lib/theme-chalk/index.css';
import Calendar from 'element-ui'
import Vue from 'vue'
Vue.use(Calendar)

export default plugin