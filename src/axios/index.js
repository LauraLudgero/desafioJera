import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.baseURL = ''
Vue.use({
    install(Vue){Vue.prototype.$http = Axios}
})
