---
title: 语言类型划分
date: 2023-08-02
url: language-classification
categories: ["langs"]
tags: ["Algorithm"]
references: []
---

# Languages Classification

## Difference Between Compiled Languages, Interpreted Languages

### 编译型语言

需通过编译器（compiler）将源代码编译成机器码，之后才能执行的语言。一般需经过编译（compile）、链接（linker）这两个步骤。编译是把源代码编译成机器码，链接是把各个模块的机器码和依赖库串连起来生成可执行文件。

- 编译器一般会有预编译的过程对代码进行优化。因为编译只做一次，运行时不需要编译，所以编译型语言的程序执行效率高。可以脱离语言环境独立运行。
- 编译之后如果需要修改就需要整个模块重新编译。编译的时候根据对应的运行环境生成机器码，不同的操作系统之间移植就会有问题，需要根据运行的操作系统环境编译不同的可执行文件。

> C、C++、Pascal、Object-C、swift。

### 解释型语言

解释性语言的程序不需要编译，相比编译型语言省了道工序，解释性语言在运行程序的时候才逐行翻译。

- 有良好的平台兼容性，在任何环境中都可以运行，前提是安装了解释器（虚拟机）。灵活，修改代码的时候直接修改就可以，可以快速部署，不用停机维护。
- 每次运行的时候都要解释一遍，性能上不如编译型语言。

> JavaScript、Python、Erlang、PHP、Perl、Ruby。

### 混合型语言

- 既有需要次次编译项目难以热更新的缺点。。。性能上也不如原生的 C、C++。通常也归为解释型语言。

> Java、C#。

## Difference Between Dynamic Typed Languages, Static Typed Languages

### 动态类型语言

动态类型语言是指在运行期间才去做数据类型检查的语言，数据类型不是在编译阶段决定的，而是把类型绑定延后到了运行阶段。

> Python、Ruby、Erlang、JavaScript、swift、PHP、Perl。

### 静态类型语言

静态语言的数据类型是在编译其间确定的或者说运行之前确定的，编写代码的时候要明确确定变量的数据类型。

> C、C++、C#、Java、Object-C。

## Difference Between Strong Typed Languages, Weak Typed Languages

### 强类型语言

强类型语言，必须显式的写明类型转换，才能作为其他类型处理。

> Java、C#、Python、Object-C、Ruby。

### 弱类型语言

编译器或运行时有隐式的类型转换处理，因此要注意可能会有 string + int 但不报错的情况。

## Difference Between Dynamic Languages, Static Languages

### 动态语言

动态语言典型的特征为运行时可以改变其结构，比如 eval函数、对象运行时机改变、类型推论、可变内存分配、反射和宏。

> JavaScript、PHP、Ruby、Python。

### 静态语言