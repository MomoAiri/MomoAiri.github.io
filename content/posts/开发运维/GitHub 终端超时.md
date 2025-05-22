---
title: GitHub 终端超时
date: 2025-01-20
categories: ["开发运维"]
tags: ["Git", "GitHub"]
url: github-timeout
---

<!--more-->

# GitHub 终端超时

> 遇到 GitHub 访问正常，但在 Shell 里 clone 超时，使用下面这个代理一下。

```
git config --global http.proxy http://127.0.0.1:<VPN run port>
```

```
git config --global https.proxy https://127.0.0.1:<VPN run port>
```

> 使用 ssh 的版本

到 C:\Users\<User Name>\.ssh 目录下，新建一个 config 文件（无后缀名）

```
ProxyCommand "C:\Program Files\Git\mingw64\bin\connect" -S 127.0.0.1:<VPN run port> -a none %h %p

Host github.com
  User git
  Port 22
  Hostname github.com
  IdentityFile "C:\Users\<User Name>\.ssh\id_ed25519"
  TCPKeepAlive yes

Host ssh.github.com
  User git
  Port 443
  Hostname ssh.github.com
  IdentityFile "C:\Users\<User Name>\.ssh\id_ed25519"
  TCPKeepAlive yes
```

```
ssh -T git@github.com
```
