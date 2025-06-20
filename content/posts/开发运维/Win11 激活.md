---
title: Win11 激活
date: 2025-01-20
categories: ["开发运维"]
tags: []
url: 开发运维/win11-activation
---

# Win11 激活

Win11 才加入了 mac 上早就有的文件管理器的分页功能，不过为了这个功能又得忍着 Win11 很恶心的右键更多选项。

安装时找到了一个很好用的激活工具 [Microsoft Activation Scripts (MAS)](https://massgrave.dev/)。

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
