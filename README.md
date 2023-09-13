# 项目初衷

官方要求手动安装Node.js环境，环境和依赖错误容易报错，对熟悉docker的用户来说，构建容器反而更加简单。

# 正文

## 创建docker环境

```
# 一键安装 𝑫𝒐𝒄𝒌𝒆𝒓 
curl -fsSL https://get.docker.com | bash
```

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

点击访问：[官网地址](https://v2.vuepress.vuejs.org/zh/guide/configuration.html)

```
# docs文件夹目录结构

docs
  ├─ .vuepress
  │  └─ config.js
  └─ README.md
```

建议参考本项目[预设docs文件](https://github.com/jackloves111/vuepress-dockerfile/tree/master/vuepress/docs)

## 启动容器
```
docker run -d \
 --restart=always \
 --name="vuepress" \
 -p 8080:8080 \
 -v /实际配置文件目录/docs:/vuepress/docs \
vuepress:beta.66
```

启动后访问:[http://localhost:8080](http://localhost:8080)
