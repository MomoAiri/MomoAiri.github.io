---
title: Hugo 主题开发：kgnmrin
date: 2025-05-24
categories: ["前端开发"]
tags: ["Hugo"]
url: 前端开发/hugo-theme-kgnmrin
type: project
description: 找不到特别合眼的主题，所以自己做了个。
cover: /cover/プロジェクトセカイ カラフルステージ！ feat. 初音ミク/1174b.webp
---

# Hugo 主题开发：kgnmrin

找不到特别合眼的主题，所以自己做了个。核心就是使用组件为各个页面的部分进行自定义内容。这样一来主题就不用去提供关于页面、友链页面、文档专题的具体功能了，通过自定义就能组合出来相应的效果。

## 准备

### 环境

- [Go 环境安装](https://go.dev/)
- [Hugo 安装](https://github.com/gohugoio/hugo)

### 文档查询

| 技术栈 | 官方文档 |
|--------|----------|
| HTML   | [MDN Web 文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML) |
| CSS    | [CSS 参考](https://cssreference.io/) |
| JS     | [JavaScript](https://zh.javascript.info/) |
| Go     | [Go 文档](https://go.dev/doc/) |
| Hugo   | [Hugo 模板语法](https://gohugo.io/templates/introduction/) |

### 主题样式参考

- [bilibli 游戏中心](https://game.bilibili.com/platform)
- [盒子萌](https://www.boxmoe.com/)

## 框架

### baseof

样式参考 [B 站游戏中心](https://game.bilibili.com/platform)。

``` html
<!DOCTYPE html>
<html>
	{{ partial "head.html" . }}
	<body>
		{{ block "header" . }}{{ partial "header.html" . }}{{ end }}

		<main>{{ block "main" . }}{{ end }}</main>

		{{ block "footer" . }}{{ partial "footer.html" . }}{{ end }}
	</body>
</html>
```

### header

header 的自定义配置在 `/data/custom-headers/xxx.yml` ，配置格式如下：

``` yaml
logo:
  enable: true
  icon: /logo.svg
  url: /
search:
  enable: true
  placeholder: XXX
items:
  - url: /posts/
    svg: ""
    text: 文章
  - url: /categories/
    text: 分类
  - url: /tags/
    text: 标签
```

通过在文章开头的 yml 字段中指定 `customHeader: xxx` 来引用，没有时默认用 `/data/custom-headers/default.yml`，指定了路径但是没有则视为不使用 header。

### sidebar

sidebar 的自定义配置在 `/data/custom-sidebars/xxx.yml` ，支持显示目录组件、文章列表组件

```yaml
toc:
  enable: true
components:
  - type: Indexs
    data: wiki-xxx		# 索引到 /data/components/wiki-xxx 的数据，使用 partials/components/Indexs 显示
```

通过在文章开头的 yml 字段中指定 `customSidebarLeft: xxx` 来引用，没有时默认用 `/data/custom-sidebars/default-left.yml`。

### footer

## 组件

### main 组件

#### CardList

#### GridContainer

#### Carousel

#### Timeline

### Header 组件

- 标题
- 搜索
- 功能列表
- 按钮式导航
- 集合式导航

### Sidebar 组件

## 参考插件

### masonry

### mathjax

### mermaid
