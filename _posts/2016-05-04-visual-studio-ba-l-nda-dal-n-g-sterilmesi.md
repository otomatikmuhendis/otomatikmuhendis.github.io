---
author: Olcay Bayram
layout: post
subtitle: Visual Studio İpucları
image: ""
categories: Yazılım
tags: 
  - visual studio
  - tips
published: true
title: Visual Studio Başlığında Dalın Gösterilmesi
---
Visual Studio, editör penceresinin başlığında o sırada açık olan proje adını göstermektedir. Git ve TFS gibi versiyon yönetim sistemlerini kullanmaya başladığımızda farklı dallarda aynı isimli projeler oluştururuz. Bu sebeple hangi daldaki proje üzerinde çalıştığımız konusunda sürekli bir şüphe oluşur ve bunu kontrol etmek için zaman kaybederiz.

İşte buna çözüm olarak [Rename Visual Studio Window](https://visualstudiogallery.msdn.microsoft.com/f3f23845-5b1e-4811-882f-60b7181fa6d6) eklentisi ile başlık çubuğuna istediğimiz bilgileri yazabiliriz.

Git için **[gitBranchName]** veya TFS için **[workspaceName]** parametrelerini kullanabiliriz.

<!--more-->

![renameVStitle.png]({{site.baseurl}}/img/renameVStitle.png)

Git reposu: [github/vs-customize-window-title](https://github.com/mayerwin/vs-customize-window-title)