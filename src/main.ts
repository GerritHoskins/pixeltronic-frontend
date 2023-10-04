import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import colors from '../tailwind.config'

import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const pixeltronicTheme = {
  dark: false,
  colors: {
    primary: colors.theme.extend.colors.astral['700'],
    secondary: colors.theme.extend.colors.astral['300'],
    background: colors.theme.extend.colors.astral['50'],
    surface: '#FFFFFF',
    text: '#000000',
    'primary-darken-1': colors.theme.extend.colors.astral['950'],
    'secondary-darken-1': colors.theme.extend.colors.astral['500'],
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

const vuetify = createVuetify({
  defaults: {
    VBtn: { variant: 'elevated', density: 'comfortable', elevation: 1 },
    VCard: { variant: 'text', color: 'text' },
    global: {
      ripple: true,
      elevation: 0
    }
  },
  theme: {
    defaultTheme: 'pixeltronicTheme',
    themes: {
      pixeltronicTheme
    }
  }
})

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
