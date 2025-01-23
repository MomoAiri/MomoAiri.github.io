---
wiki: htsn-miku-coder
title: Hatsune Miku Coder
---

# Hatsune Miku Coder

> Hatsune Miku Coder 是一个 VS Code 扩展插件，它提供基于 OpenAI 的代码建议和自动补全功能。

## Environment Requirements

> Ollama: any, VS Code: 1.95.0及以上版本（在这个版本开发和自测的，其他版本不知道）

### [Ollama](https://ollama.com)

下载链接：[https://ollama.com/download](https://ollama.com/download)

#### 推荐模型：

**极低显存（4G以下）**

```
ollama run llama3.2:3b
```

[https://ollama.com/library/llama3.2:3b](https://ollama.com/library/llama3.2:3b)

```
ollama run gemma2:2b
```

[https://ollama.com/library/gemma2:2b](https://ollama.com/library/gemma2:2b)

```
ollama run llava-phi3:3.8b
```

[https://ollama.com/library/llava-phi3:3.8b](https://ollama.com/library/llava-phi3:3.8b)

**较低显存（8G以下）**

```
ollama run qwen2.5:7b
```

[https://ollama.com/library/qwen2.5](https://ollama.com/library/qwen2.5:7b)

```
ollama run gemma2:9b
```

[https://ollama.com/library/gemma2:9b](https://ollama.com/library/gemma2:9b)

```
ollama run llama2:13b
```

[https://ollama.com/library/llama2:13b](https://ollama.com/library/llama2:13b)

```
ollama run llama3.2-vision:11b
```

[https://ollama.com/library/llama3.2-vision:11b](https://ollama.com/library/llama3.2-vision:11b)

```
ollama run llava:13b
```

[https://ollama.com/library/llava:13b](https://ollama.com/library/llava:13b)

**中等显存（16G以下）**

```
ollama run mistral-small:22b
```

[https://ollama.com/library/mistral-small:22b](https://ollama.com/library/mistral-small:22b)

### 插件设置

#### 值

- **HtsnMikuCoder.Ollama.port**: 11434 or `ollama server`
- **HtsnMikuCoder.Ollama.model**: granite-code:20b

#### 快捷键

- **HtsnMikuCoder.Command.CodeCompletion**: `Ctrl+Shift+Alt+S`
- **HtsnMikuCoder.Command.AbortOllama**: `Ctrl+Shift+Alt+A`
- **HtsnMikuCoder.Command.ChatInMarkdown**: `Ctrl+Shift+Alt+C`

## Features

### 代码补全

### Markdown 中聊天

## TODO

- [x] 支持代码补全功能
- [ ] 支持一些值的配置
- [ ] 整理聊天时的格式规则
- [ ] 实现 Markdown 中的聊天功能
