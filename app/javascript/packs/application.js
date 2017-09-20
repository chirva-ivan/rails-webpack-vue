import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../components/app.vue'
import router from '../router'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  /* eslint-disable no-new */
  new Vue({
    el: 'app',
    router,
    template: '<App/>',
    components: { App }
  })
})
