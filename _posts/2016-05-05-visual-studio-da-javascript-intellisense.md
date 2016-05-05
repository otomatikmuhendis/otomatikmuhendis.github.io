---
author: Olcay Bayram
layout: post
subtitle: Visual Studio İpucları
image: ""
categories: Yazılım
tags: 
  - visual studio
  - tips
  - javascript
  - intellisense
published: true
title: "Visual Studio'da JavaScript Intellisense"
---
Artık Visual Studio ile yeni bir web projesi oluşturduğunuzda **Scripts** klasörüne eklenen _.js_ dosyaları arasında **_references.js** dosyasını görebilirsiniz. Editörde JavaScript kodları yazarken, Intellisense menüsünün daha faydalı olabilmesi için bu referans dosyası kullanılıyor.

Projedeki veya çalışılan sayfadaki tüm _.js_ dosyalarının dahil edilmesi performans kayıplarına yol açacağı için böyle bir yönteme gidilmiş. Global olarak işimize yarayacak _.js_ dosyalarını burada toplayarak Intellisense referanslarına dahil edebiliriz.

![referencesjs.png]({{site.baseurl}}/img/referencesjs.png)

Yeni bir _.js_ dosyası eklediğimizde otomatik eklenmesini istiyorsak veya var olan bir dosyanın ismi değiştiğinde, silindiğinde veya taşındığında değişikliklerin buraya yansımasını istiyorsak. İlk satıra `/// <autosync enabled="true" />` yazmalıyız.

