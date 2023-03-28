import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//此处一定要引入，不然不可用
import '../public/mock.js'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')

