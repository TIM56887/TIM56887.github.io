---
title:一些關於docker的知識
---
# 一些關於docker的知識

## Docker一定要運行在linux上嗎？

## Docker容器在後台運行就必須有一個前台進程，容器運行的命令如果不是那些一直掛起的命令，就會自動退出，

## 什麼是前台交互模式和後台守護模式？

> 前台交互模式會出現命令行可以輸入指令，後台守護模式只會在後台運行
::: code-group
``` Docker [前台交互]   
docker run -it 
```
``` Docker [後台守護]   
docker run -d
```
:::

## docker 的每一個容器都是一個微小版的linux？

## docker attach和exec的差別？
>> attach 會直接進入容器啟動命令的終端，不會啟動新的進程，用exit退出會導致容器停止。
>> exec 是在容器打開新的終端，並且可以啟動新的進程，用exit退出不會導致容器的停止。