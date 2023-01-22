

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
  }
}

declare module 'framer-motion/dist/framer-motion'

declare module '*.mp4' {
  const src: string;
  export default src;
}
