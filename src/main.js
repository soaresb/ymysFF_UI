import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ymysApi from "@/api/api";
import "bootstrap";
import "./styles/bootstrap/_variables.scss"
import "./styles/bootstrap/bootstrap.min.css";
import "./styles/bootstrap/bootstrap.css";

createApp(App)
    .use(router)
    .use(ymysApi, {baseURL: `http://localhost:80`})
    .mount('#app')
