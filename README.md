# my-vue3-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

## 脚手架搭建
```
npm init vue@latest
Eslint Yes 
Perttier NO 
```

## 设置新的 ESlint 规则
```
安装  vite-plugin-eslint  eslint 不通过  vite 报错插件
执行 yarn lint 修复
设置 .vscode  保存修复eslint格式
```

## 配置 styleLint 规则
1. 修改 package.json
```js
"stylelint": "^13.13.1",
"stylelint-config-standard": "^22.0.0",
"stylelint-scss": "^3.21.0",
```
2. 添加 styleLinttrc.js 配置
3. 设置.vscode/setting.json
4. 安装低版本 syltelint 插件  v0.87.6
5. 之后 就实现了 css 保存是自动格式化


