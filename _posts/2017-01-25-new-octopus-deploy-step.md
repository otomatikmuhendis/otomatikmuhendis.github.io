---
author: Olcay Bayram
layout: post
categories: Sistem
published: true
title: Yeni Octopus Deploy Step
tags:
  - deployment
  - octopus
  - medianova
  - cdn
  - continuous delivery
en: /2017/01/25/new-octopus-deploy-step/
---
[Octopus Deploy](https://octopus.com/) kütüphanesine yaptığım [pull request](https://github.com/OctopusDeploy/Library/pull/448) (PR) kabul edildi.

Deployment aracı olarak kullandığımız Octopus üzerinde, MVC projesinin yayına alınması sonrasında, Statik İçerik Hızlandırma (CDN) sistemindeki statik dosyaların da yenilenmesi için [Medianova CDN](http://www.medianova.com/servisler/statik-icerik-hizlandirma/) hizmetinin Purge (içeriğin temizlenmesi) methodunu tetiklememiz gerekiyordu.

<!--more-->

Bu işlemi otomatik hale getirebilmek için PowerShell scripti ile yazılmış Custom Step oluşturdum. Ayrıca Community Step'ler arasına ekleyerek, herkesin kullanımına açtım. [Medianova - Purge Step](https://library.octopus.com/step-templates/dce70842-466e-4ae7-acd4-9aa18bfac065) detayına Octopus Deploy Library sitesinden ulaşabilir veya Octopus yönetim panelinizde ki Community Steps sayfasından aşağıda göründüğü gibi doğrudan yükleyebilirsiniz.

![MedianovaStepTemplate]({{site.baseurl}}/img/MedianovaStepTemplate.PNG)

Not: Statik dosyalarda cache sorunu oluşmasın diye her zaman versiyon parametresini de eklemeliyiz. Bu yöntem browser cache'i yenilemeyecektir.
