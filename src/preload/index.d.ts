import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI,
    api: {
      store: {
        get: (key: any) => any,
        set: (key: any, value: any) => void
      }
    }
  }
}
