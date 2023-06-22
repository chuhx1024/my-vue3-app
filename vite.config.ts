import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginEslint from "vite-plugin-eslint"

const postCssPxToRem = require("postcss-pxtorem")


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vitePluginEslint({
            lintOnStart: true, // 启动时候是否就执行eslint校验，如果开启的话有eslint的报错则服务是会启动失败
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 75, // 1rem的大小
                    propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
                })
            ]
        },
    }
    

})
