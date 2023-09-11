FROM node:18.15.0-slim

RUN mkdir /vuepress
WORKDIR /vuepress
COPY /vuepress/ /vuepress/
RUN npm install
# 修改公告样式
COPY /node_modules/ /vuepress/node_modules/

EXPOSE 8080
VOLUME /vuepress/docs
CMD npm run dev