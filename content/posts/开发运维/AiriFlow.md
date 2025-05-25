---
title: AiriFlow
date: 2024-09-16
categories: ["开发运维"]
tags: ["Git", "Gitlab", "GitHub"]
url: airi-flow
description: '[十分钟学会正确的github工作流，和开源作者们使用同一套流程](https://www.bilibili.com/video/BV19e4y1q7JJ)'
# references: '<a href="https://www.bilibili.com/video/BV19e4y1q7JJ" target="_blank">十分钟学会正确的github工作流，和开源作者们使用同一套流程</a>'
---

改html

[十分钟学会正确的github工作流，和开源作者们使用同一套流程](https://www.bilibili.com/video/BV19e4y1q7JJ)

<!--more-->

# AiriFlow

学习微软的 Git 开发流程后，取其糟粕、去其精华（大雾）的个人版本控制流程。

- [十分钟学会正确的github工作流，和开源作者们使用同一套流程](https://www.bilibili.com/video/BV19e4y1q7JJ)

## Branch

- `master`:  最新的发行版
- `rls_[version]`: 历史版本
- `dev`: 主干开发分支
- `feat_[name]`: 功能分支
- `fix_[name]`: 修复分支

## Flow

- New repository: -> master -> dev
- New project: -> feature doc -> feature todos -> dev
- Test feature: fix → merge into dev
- Test on stage dev: fix in dev → merge into master → test as mirror → patch as rls
