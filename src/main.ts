import './assets/main.css';
import I18NextVue from "i18next-vue";
import i18next from './locales'
import { createApp } from 'vue'
import App from './App.vue'
import './role/clorinde';

const app = createApp(App)
app.use(I18NextVue, { i18next });
app.mount('#app')
