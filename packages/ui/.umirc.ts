import { defineConfig } from 'dumi';

export default defineConfig({
  // 网站描述配置
  mode: 'site',
  title: '前端组件开发。',
  description: '前端组件开发。',

  // 打包路径配置
  base: '/',
  publicPath: '/', // 打包文件时，引入地址生成 publicPath/xxx.js
  outputPath: 'docs-dist',
  exportStatic: {}, // 对每隔路由输出html
  dynamicImport: {}, // 动态导入

  hash: true, //加hash配置，清除缓存
  manifest: {
    // 内部发布系统规定必须配置
    fileName: 'manifest.json',
  },

  // 多国语顺序
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],

  // 主题
  theme: {
    '@c-primary': '#16c35f',
  },
  // alias: {
  // },
});