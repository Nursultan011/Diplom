import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/index.scss"
import SwiperClass, { } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'

createApp(App).use(store).use(router).mount('#app')
