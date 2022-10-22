import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap"
//import "./assets/main.css";
import { TroisJSVuePlugin } from 'troisjs';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(TroisJSVuePlugin);

app.mount("#app");
