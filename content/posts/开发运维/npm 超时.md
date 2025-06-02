---
title: npm 超时
date: 2024-06-11
categories: ["开发运维"]
tags: ["Node.js"]
url: 开发运维/npm-超时
---

# npm 超时

## 清理缓存

```
npm cache clean --force
```

## 镜像源加速

```
npm config set registry https://registry.npmmirror.com
```

```
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

```
npm config set registry https://mirrors.tuna.tsinghua.edu.cn/npm/
```

## 设置 HTTP(S) 代理

```
npm config set proxy http://127.0.0.1:<VPN run port>
```

```
npm config set https-proxy http://127.0.0.1:<VPN run port>
```
