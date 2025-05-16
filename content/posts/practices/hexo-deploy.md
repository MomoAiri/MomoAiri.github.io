---
title: Hexo 部署
date: 2023-06-07
url: hexo-deploy
categories: ["practices"]
tags: ["Hexo", "GitHub"]
references: [
	"[Stellar：开始您全新的博客之旅 - XAOXUU](https://xaoxuu.com/wiki/stellar/#start)",
	"[中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)"
]
---

# Hexo 部署

## 环境设置

- [Node.js — Run JavaScript Everywhere](https://nodejs.org/en)。
- [Git](https://git-scm.com)。

```
npm install -g hexo-cli
hexo init
git submodule add https://github.com/xaoxuu/hexo-theme-stellar.git themes/stellar
cd themes/stellar
npm install hexo-deployer-git --save
```

## 命令

```
npm run build
npm run clean
npm run server
npm run deploy
```

## 格式

> 个人使用 Hexo 写文习惯。

### 模板

```
---
title: <utf8_string>
date: <year> "-" <month> "-" <day>
url: <kebab-case-lowercase-string>
categories: [<kebab-case-lowercase-string>, ]
tags: [<utf8_string>, ]
references: [<string> ::= "[<url_title>](<url>)", ]
---

# <title>
```

### 文法

> 见 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)。

### 踩坑

#### IDE 预览

大多数主题都支持额外的渲染标签，但换主题和 IDE 预览一致性上比较麻烦，个人还是写几个常用的简单的 HTML 标签 Snippet 更方便。

相对复杂的还确实需要用到那没办法了。有条件且需要可以给 IDE 写插件改渲染。

#### HTML

PREVIEW ERROR：

```
<div>
**content**
</div>
```

大部分解析器会把 "**" 显示出来

PREVIEW RIGHT：

```
<div>

**content**

</div>
```

这样处理基本上都会按 Markdown 语法进行渲染。
