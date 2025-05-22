---
title: Win11 重装
date: 2025-01-20
categories: ["开发运维"]
tags: []
url: win11-reinstall
---

<!--more-->

# Win11 重装

为了 mac 上早就有的文件管理器的分页功能，捏着鼻子用屎一样的右键更多选项，找到了一个很好用的激活工具 [Microsoft Activation Scripts (MAS)](https://massgrave.dev/)。

**安装时绕过网络**

拔网线

Shift + F10

```
taskmgr
```

结束网络相关的 Windows 进程

**系统激活**

Enter PowerShell

```
irm https://massgrave.dev/get | iex
```

```
1
```
