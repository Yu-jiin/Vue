
import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)
// app.use(createPinia())
app.use(pinia)

app.mount('#app')
