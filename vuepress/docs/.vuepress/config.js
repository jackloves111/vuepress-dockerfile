import { defaultTheme } from '@vuepress/theme-default'
import { componentsPlugin } from 'vuepress-plugin-components'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: '/img/icon.png' }]],
  title: '个人博客',
  description: 'demo',
  plugins: [
  	// 搜索插件
  	searchPlugin({
      hotKeys: [
        {
        key: 'f',
        ctrl: true
        }
        ],
      isSearchable: (page) => page.path !== '/', // 搜素排除首页
    }),
    // 组件库
    componentsPlugin({
  	  components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "FontIcon",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VidStack",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
      // 公告栏样式
      rootComponents: {
      	backToTop: true,
        notice: [
          {
            path: "/",
            title: "公告",//通知标题
            content: "<p>公告样式1</p>公告样式2<span>公告样式3</span>",//通知内容
            actions: [
              {
                text: "确认按钮",//确认按钮文字
                type: "primary",
              },
              { text: "跳转按钮",
              link: "https://www.baidu.com",
              type: "default",//Pathname 会被当作内部路由链接由 router 处理，default 会被当作外部链接在新窗口打开
              },
            ],
            confirm: true,//true就是必须要点才能关闭，false就是有个xx关闭
            fullscreen: false,//false就是右上角显示，true就是全屏弹窗显示
            showOnce: false,//只显示一次
          },
        ],
      },
    }),
  ],
  //主题设置
  theme: defaultTheme({
  	logo: '/img/icon.png',
  	logoDark: '/img/icon.png',
    navbar: [ // 导航栏
      {
        text: '首页',
        link: '/',
      },
      {
      	text: '导航1',
      	link: '/demo1/'
      },
      {
        text: '导航2',
        children: ['/demo1/', '/demo2/'],
      },
      {
        text: '导航3',
        children: [
          {
            text: 'baidu',
            link: 'https://www.baidu.com',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: '百度',
            link: 'https://www.baidu.com',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '/',
          },
        ],
      },
    ],
        // 侧边栏
    sidebar: {
      '/demo1/': [
        {
          text: '侧边1',
          children: ['/demo1/'],
        },
        {
          text: '侧边2',
          children: ['/demo1/','/demo2/'],
        },
      ],
      '/demo2/': [
        {
          text: '侧边3',
          link: '/demo2/',
        },
      ],
    }, // 侧边栏
  }), // 主题
}) // 框架