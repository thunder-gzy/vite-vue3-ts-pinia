import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // server: {
  //   port: 6666, //启动端口
  //   hmr: {
  //     host: '127.0.0.1',
  //     port: 6666
  //   },
  //   // 设置https代理
  //   proxy: {
  //     '/api': {
  //       target: '192.168.1.5',
  //       changeOrigin: true,
  //       rewrite: (path: string) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})
