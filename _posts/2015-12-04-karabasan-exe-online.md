---
title: Karabasan.exe Online
author: Olcay Bayram
layout: post
permalink: /2015/12/04/karabasan-exe-online/
image: "/img/bilgisayarim.png"
categories:
  - Neler Yapıyorum?
tags:
  - archive.org
  - JavaScript
  - karabasan
  - msdos
date: "2015-12-04"
---
TL;DR 90'lı yılların fütursuz yapay zekası şimdi internette: [Karabasan.exe Online](http://bilgisayar.otomatikmuhendis.com/)

Son zamanlarda uğraştığım bir çok konu var ama bunları sadece arkadaşlar arasında paylaşmakla yetiniyorum. Buraya da eklemenin, hatta bilgilendirici şekilde arşivlemenin güzel olacağını düşünüyorum.

Bu çalışmalardan ilki; 90'lı yılların yapay zekası olan ünlü <a href="https://eksisozluk.com/karabasan-exe--1718561" target="_blank">karabasan.exe</a> uygulamasını online hale getirmek oldu. Bu MSDOS uygulamasını Windows üzerinde çalıştırabilmek için  <a href="http://www.dosbox.com/" target="_blank">DOSBox</a> DOS emulator'ı gerekiyor ve akıllarda virüs şüphesini uyandırıyor. Ben nostaljiye erişimi kolaylaştırmak için bir çalışma yapmak istedim.  Çalışmaya önce EXE dosyasını decompile etmeyi deneyerek başladım. Sağlıklı bir sonuç elde edemedim.

![Karabasan.exe Online]({{ page.image | prepend: site.baseurl | replace: '//', '/' }} "Karabasan.exe Online")

İkinci aşama ters mühendislikti. Ürünü inceleyerek, verdiği tüm yanıtları not ederek devam ettim. Daha sonrasında aynı mantığı kullanarak JavaScript ile tekrar kodlamaya başlamıştım. Hatta bu iş için konsol görüntüsünü elde etmeme yardımcı olacak <a href="http://terminal.jcubic.pl/" target="_blank">Jquery Terminal</a> adında güzel bir JavaScript kütüphanesi de bulmuştum ama aklıma başka bir yöntem geldi.

Bir yöntemle zaman kaybetmektense daha kolayı aranabilir ve bulunduğunda anında yeni yönteme geçebilmelisiniz. Buna çevik geliştirme denir. Burada dikkat edilmesi gerek aramanın geliştirmeye engel olmamasıdır. Bu noktada benim şansım yaver gitti ve <a href="https://archive.org" target="_blank">archive.org</a>'un site üzerinde MSDOS uygulamaları çalıştırabildiğini fark ettim. Araştırmaya archive.org üzerinden devam ettim ama sitede EXE dosyası arşivleme konusunda yeterince bilgi bulunmuyordu. Bunun üzerine<a href="https://archive.org/details/softwarelibrary_msdos_games" target="_blank"> MSDOS oyunları</a>nın listelendiği sayfadan, bu oyunların ortak parametlerini kullanarak denemeler yaptım ve sonuç olarak archive.org üzerinde karabasan.exe'yi çalıştırmış oldum.

Bu uygulamaya güzel bir Windows98 teması gerekiyordu ama sanırım telif haklarından dolayı hiçbir yerde bulamadım. Son olarak tumblr sitesinde tasarımlar arasında Win98 temasını gördüm. Tumblr'dan bir blog açtım ve temasını Win98 olarak ayarladım, blogtaki tek yazının içeriğine de archive.org'un sağlamış olduğu embed kodunu yerleştirdim.

Karabasan.exe'yi tekrar yazmak amacıyla çıktığım bu yolda tek satır kod yazmadan, bu çok da güzel olmayan ama üretildiği dönem itibariyle önem arz eden uygulamayı sanal aleme kazandırmış oldum. Nostaljiyi yaşamak isteyenleri [Bilgisayar](http://bilgisayar.otomatikmuhendis.com/) sayfamıza bekleriz.

Not: archive.org MSDOS dosyasının çalışır hale gelmesi için gereken parametreler;

  * **Emulator** dosbox
  * **Emulator_ext** zip
  * **Emulator_start** [Uygulama adı]
