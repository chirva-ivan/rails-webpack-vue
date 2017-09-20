import Vue from 'vue'
import App from '../components/app.vue'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  /* eslint-disable no-new */
  new Vue({
    el: 'app',
    template: '<App/>',
    components: { App }
  })
})
