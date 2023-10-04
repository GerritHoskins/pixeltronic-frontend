import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'dev.pixeltronic.pixeltronic',
  appName: 'pixeltronics',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    TwitterXLogin: {
      clientId: 'Q1lQNm1iV3gwUTcwZ3g5eV9WYjU6MTpjaQ',
      redirectUri: 'dev.pixeltronic.pixeltronic://',
      scope: ['tweet.read', 'users.read', 'offline.access']
    }
  }
}

export default config
