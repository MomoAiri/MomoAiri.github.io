---
title: Tauri 开发
date: 2025-06-15
categories: ["前端开发"]
tags: ["Tauri", "Rust", "跨平台开发", "桌面应用"]
url: 前端开发/Tauri-开发
description: Tauri 是一个类似于 Electron 的跨平台 Web 开发方案，使用操作系统的原生 WebView 渲染、Rust 作为后台开发语言。
cover: /cover/プロジェクトセカイ カラフルステージ！ feat. 初音ミク/157b.webp
---

# Tauri 开发

Tauri 是一个类似于 Electron 的跨平台 Web 开发方案，使用操作系统的原生 WebView 渲染、Rust 作为后台开发语言。

## 开发环境配置

### Rust

| 工具 | 下载地址 | 验证命令 |
| --- | --- | --- |
| Rust | [Rust Install](https://www.rust-lang.org/tools/install) | rustc --version |
| Cargo | - | cargo --vresion |
| Rust Rover | [Rust Rover](https://www.jetbrains.com/rust/download) | - |

### MSVC

Windows 下需要 [MSVC](https://visualstudio.microsoft.com/downloads/)。

从网站或者 `winget install Microsoft.VisualStudio.2022.BuildTools --override "--add Microsoft.VisualStudio.Workload.VCTools"` 安装。

### Tauri

``` bash
cargo install tauri-cli
npm install -g pnpm
```

## 项目构建

``` bash
pnpm create tauri-app@latest
pnpm tauri init
pnpm tauri dev
pnpm tauri build
```


