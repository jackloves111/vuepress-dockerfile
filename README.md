# vuepress-dockerfile

## 如何使用
```
# 克隆文件
git clone https://github.com/jackloves111/vuepress-dockerfile.git

# 进入主目录
cd /vuepress-dockerfile/

# 创建镜像
docker build -t vuepress:beta.66 .
```

## 创建docs文章和配置文件
```
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
