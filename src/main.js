import { createApp, configureCompat } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

configureCompat({
  WATCH_ARRAY: false
})

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
