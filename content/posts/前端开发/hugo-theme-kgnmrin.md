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

## index



配置在 `/hugo.toml` 中。

## 需求

### 文章组件

- 卡片超链接
- 头像超链接
- 轮播图
- 图库
- 音频
- 视频
- 时间线

### Header 组件

- 标题
- 搜索
- 功能列表
- 按钮式导航
- 集合式导航

### Side 组件

- 文章导航

## 布局

### baseof

- head
- header
- side-left
- side-right
- main
- footer

### header

手机端只能显示标题、搜索、功能列表，其他会被收为集合式导航

### index

### settings

### posts
# Hugo 主题开发实战：构建个性化主题 kgnmrin

> 找不到完全契合需求的 Hugo 主题？那就自己动手创造一个吧！本文将分享如何从零开发一个高度可定制的 Hugo 主题。

---

## 设计理念：组件化定制

在开发 **kgnmrin** 主题时，我采用核心设计原则：**组件化架构**。通过解耦各个页面元素为独立组件，实现：

- 无需修改主题源码即可自定义页面布局
- 自由组合构建「关于」、「友链」、「文档专题」等页面
- 通过配置文件动态调整页面结构
- 保持主题核心的轻量化与可维护性

![Hugo 主题开发流程](https://example.com/hugo-theme-dev-process.webp)  
*组件化架构实现灵活定制*

---

## 开发准备

### 环境配置
```bash
# 安装 Go 语言环境
brew install go  # macOS
sudo apt install golang  # Ubuntu

# 安装 Hugo 扩展版
brew install hugo  # macOS
sudo snap install hugo --channel=extended  # Linux
```

### 技术文档参考
| 技术栈 | 官方文档 |
|--------|----------|
| HTML   | [MDN Web 文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML) |
| CSS    | [CSS 参考指南](https://cssreference.io/) |
| JavaScript | [现代 JavaScript 教程](https://zh.javascript.info/) |
| Go     | [Go 编程语言](https://go.dev/doc/) |
| Hugo   | [Hugo 模板语法](https://gohugo.io/templates/introduction/) |

---

## 主题架构设计

### 基础框架 (layouts/_default/baseof.html)
```html
<!DOCTYPE html>
<html>
  <head>
    {{ partial "head" . }}
  </head>
  <body>
    {{ partial "header" . }}
    
    <div class="container">
      <aside class="sidebar-left">
        {{ partial "side-left" . }}
      </aside>
      
      <main class="content">
        {{ block "main" . }}{{ end }}
      </main>
      
      <aside class="sidebar-right">
        {{ partial "side-right" . }}
      </aside>
    </div>
    
    {{ partial "footer" . }}
  </body>
</html>
```

### 核心组件模块
1. **head 组件** - 元数据管理与资源加载
2. **header 组件** - 导航栏与站点标识
3. **side-left/side-right** - 侧边栏内容区域
4. **main 区块** - 动态内容容器
5. **footer 组件** - 页脚信息与扩展内容

---

## 实现动态头部配置

通过 YAML 配置文件实现 header 的动态管理：

```yaml
# /static/custom-headers/main.yml
logo:
  path: /images/logo.svg
  alt: "站点标识"
navigation:
  - name: "首页"
    url: "/"
  - name: "归档"
    url: "/archives"
  - name: "关于"
    url: "/about"
social_links:
  - icon: github
    url: "https://github.com/yourprofile"
```

模板中调用配置：
```html
<!-- layouts/partials/header.html -->
{{ $header := index .Site.Data.custom-headers "main" }}
<header>
  <img src="{{ $header.logo.path }}" alt="{{ $header.logo.alt }}">
  
  <nav>
    {{ range $header.navigation }}
    <a href="{{ .url }}">{{ .name }}</a>
    {{ end }}
  </nav>
  
  <div class="social-links">
    {{ range $header.social_links }}
    <a href="{{ .url }}">{{ partial "icon" .icon }}</a>
    {{ end }}
  </div>
</header>
```

---

## 开发心得与建议

1. **渐进式开发策略**  
   从最小可用版本开始，逐步添加功能模块

2. **组件化测试方法**  
   ```bash
   hugo server --disableFastRender --ignoreCache
   ```

3. **主题配置最佳实践**
   - 将可配置项提取到 `config.toml`
   - 使用区块模板（block templates）实现布局扩展
   - 通过SCSS变量管理主题样式

4. **性能优化重点**
   ```html
   <!-- 实现Hugo Pipes资源处理 -->
   {{ $styles := resources.Get "scss/main.scss" | toCSS | minify }}
   <link rel="stylesheet" href="{{ $styles.Permalink }}">
   ```

> **主题开发的核心价值**：不是创造又一个通用主题，而是打造完全适配个人工作流与内容需求的设计系统。当每个组件都能自由组合时，你的网站才能真正成为创意的延伸。

---

**示例网站**：[kgnmrin 主题演示站](https://theme-kgnmrin-demo.netlify.app)  
**源码仓库**：[GitHub - kgnmrin主题](https://github.com/yourusername/hugo-theme-kgnmrin)

*封面图来源：プロジェクトセカイ カラフルステージ！ feat. 初音ミク*