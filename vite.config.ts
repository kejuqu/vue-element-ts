import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    Components({
      dts: true, //生成components.d.ts 全局定义文件
      resolvers: [
        AntDesignVueResolver({
          //对使用到的全局ant design vue组件进行类型导入
          importStyle: false // 不动态引入css,这个不强求
        })
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/] //包含的文件类型
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
