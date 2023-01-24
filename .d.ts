

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

interface SVGProps {
  className?: string,
  Fill?: string
}


interface themeColors {
  bgColor: string,
  fgColor: string
}

interface theme {
  isLightTheme?: boolean,
  light?: themeColors,
  dark?: themeColors,
}

interface themeSwitch {
  isLightTheme: boolean;
}
