import '@/styles/app.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

const app = createApp(App).use(router).use(createPinia());
router.isReady().then(() => {
  app.mount('#app');
});
