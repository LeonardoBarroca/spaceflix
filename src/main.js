import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap"
import "./assets/main.css";
import vue3dLoader from "vue-3d-loader";


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vue3dLoader);


app.mount("#app");
