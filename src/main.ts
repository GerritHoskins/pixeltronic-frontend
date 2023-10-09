import './assets/main.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { pinia } from './store';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
