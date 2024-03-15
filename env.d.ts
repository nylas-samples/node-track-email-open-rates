declare global {
    namespace NodeJS {
      interface ProcessEnv {
        CLIENT_ID: string;
        GRANT_ID: string;
        API_KEY: string;
        API_URI: string;
      }
    }
  }

  export {}