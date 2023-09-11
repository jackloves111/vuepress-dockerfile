# vuepress-dockerfile

## 如何创建镜像
```
# 克隆文件
git clone https://github.com/jackloves111/vuepress-dockerfile.git

# 进入主目录
cd /vuepress-dockerfile/

# 创建镜像
docker build -t vuepress:beta.66 .
```

## 按照官方文档构建markdown文章和配置文件

[官网地址：](https://v2.vuepress.vuejs.org/zh/guide/configuration.html)

```
# docs文件夹目录结构

├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```

## 启动容器
```
docker run -d \
 --restart=always \
 --name="vuepress" \
 -p 8080:8080 \
 -v /实际配置文件目录/docs:/vuepress/docs \
vuepress:beta.66
```
