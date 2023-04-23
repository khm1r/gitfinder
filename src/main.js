import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import style from './assets/scss/style.scss'
createApp(App).use(store).mount('#app')
