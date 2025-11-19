/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VIDEO_CDN: string;
  readonly VITE_APP_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
