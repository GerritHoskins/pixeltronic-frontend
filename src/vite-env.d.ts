interface ImportMeta {
  env: {
    [key: string]: string;
    // Define Vite-specific properties here if needed
    VITE_API_URL: string;
    VITE_API_BASE_URL: string;
    VITE_ROUTER_BASE: string;
    VITE_ROUTER_MODE: string;
    VITE_ENCRYPTION_KEY: string;
    VITE_GIT_HUB_TOKEN: string;
    VITE_SUPABASE_URL: string;
    VITE_ANON_KEY: string;
    VITE_APP_TITLE?: string;
    MODE: 'development' | 'production';
    BASE_URL: string; // Base public path when served in development or production.
    DEV: boolean; // A flag indicating the app is in development mode.
    PROD: boolean; // A flag indicating the app is in production mode.
  };
}
