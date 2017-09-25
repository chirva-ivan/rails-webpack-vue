import Vue from 'vue'
import App from '../components/app.vue'
import router from '../router'
import store from '../store'
import '../styles/application'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  /* eslint-disable no-new */
  new Vue({
    el: 'app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
})
