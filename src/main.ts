import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'
import './mocks'
import './assets/main.css'

const app = createApp(App)

app.use(router).use(VueQueryPlugin).use(ElementPlus, { size: 'large' })

app.mount('#app')
