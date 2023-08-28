import '@/styles/index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'
console.log('ENV', import.meta.env)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
