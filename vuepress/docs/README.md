---
home: true
heroText: 请先阅读文档
tagline: 请先阅读文档
---

# 配置

## Docker文件映射

```
-v /配置文件的路径:/vuepress/docs  `# 冒号左边请修改为你想在主机上保存配置文件的路径` \
```

## 配置文件

如果没有任何配置，你的 VuePress 站点仅有一些最基础的功能。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 `.vuepress` 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```

VuePress 站点的基本配置文件是 `.vuepress/config.js` ，但也同样支持 TypeScript 配置文件。你可以使用 `.vuepress/config.ts` 来得到更好的类型提示。

具体而言，我们对于配置文件的路径有着约定（按照优先顺序）：

- 当前工作目录 `cwd` 下：
  - `vuepress.config.ts`
  - `vuepress.config.js`
  - `vuepress.config.mjs`
- 源文件目录 `sourceDir` 下：
  - `.vuepress/config.ts`
  - `.vuepress/config.js`
  - `.vuepress/config.mjs`

一个基础的配置文件是这样的：

```js
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
})
```

::: tip
前往 [VuePress官网](https://v2.vuepress.vuejs.org/zh/) 查看所有 VuePress 配置。
:::
