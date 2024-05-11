import { createApp } from 'vue'
import Antd from 'ant-design-vue'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(router).use(Antd)

app.mount('#app')
