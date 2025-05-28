---
title: Hugo 主题开发：kgnmrin
date: 2025-05-24
categories: ["开发运维"]
tags: ["Hugo"]
url: hugo-theme-kgnmrin
description: 找不到特别合眼的主题，所以自己做了个。
cover: /cover/プロジェクトセカイ カラフルステージ！ feat. 初音ミク/1174b.webp
---

# Hugo 主题开发：kgnmrin

## 环境

- [Go](https://go.dev/)
- [Hugo](https://github.com/gohugoio/hugo)

## baseof

- head
- header
- side-left
- side-right
- main
- footer

## header

配置在 `/static/custom-headers/xxx.yml` 中。

header 支持标题组件、搜索组件、导航组件、集合式导航组件，配置格式如下：

```yaml
title_enable: true
title: 标题
title_link: 链接
title_icon: 图标
search_enable: true
search_placeholder: 搜索
search_icon: 图标
nav_list:
  - type: 0 # 普通导航
	name: 名称
	link: 链接
	icon: 图标
  - type: 1	# 集合式导航
	name: 名称
	list:
	  - name: 名称
		link: 链接
	  - name: 名称
		link: 链接
```

编写 markdown 文章时，通过在文章开头的 yml 字段中指定 `custom-header: xxx` 来引用。

类似于

```markdown
---
custom-header: xxx
---
```

## index

配置在 `/static/index.yml` 中。

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
