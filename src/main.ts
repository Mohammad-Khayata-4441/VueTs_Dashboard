import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)


import { createPinia } from 'pinia'
// Plugins 
import router from './router'
// Icons Library
import { FontAwesomeIcon } from "@/plugins/font-awesome";

// Scss Files 
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@/assets/scss/index.scss"

// UI Library 
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/antd.less'; // Import Ant Design Vue styles by less entry
app.use(Antd);


app.use(createPinia())
app.use(router)
app.component("f-icon", FontAwesomeIcon);
app.mount('#app')
