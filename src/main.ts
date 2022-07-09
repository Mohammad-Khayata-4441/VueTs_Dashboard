import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Plugins 
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from "@/plugins/font-awesome";

 // Scss Files 
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/assets/scss/index.scss"
// Icons Library

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("f-icon", FontAwesomeIcon);
app.mount('#app')
