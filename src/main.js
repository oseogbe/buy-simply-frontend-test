import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import FontAwesomeIcon from './plugins/font-awesome';

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
