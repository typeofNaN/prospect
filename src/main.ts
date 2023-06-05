import 'babel-polyfill'

import Vue from 'vue'

import App from '@/App'
import store from '@/store'
import '@/plugins'
import '@/icons/components'

import '@/styles/index.scss'

Vue.config.productionTip = false


// 防抖处理-立即执行
const on = Vue.prototype.$on
Vue.prototype.$on = function (eventType: string, func: Function) {
  let timer: UNSET
  let flag = true
  let newFunc = func
  if (eventType === 'click') {
    newFunc = (...args: IArguments[]) => {
      if (flag) {
        func.apply(this, args)
        flag = false
      }
      clearTimeout(timer)
      timer = setTimeout(() => {
        flag = true
      }, 400)
    }
  }
  on.call(this, eventType, newFunc)
}

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
