---
title: Karabasan.exe Online
author: Olcay Bayram
layout: post
permalink: /2015/12/04/karabasan-exe-online/
categories:
  - Neler Yapıyorum?
tags:
  - archive.org
  - JavaScript
  - karabasan
  - msdos
---
TL;DR 90&#8217;lı yılların fütursuz yapay zekası şimdi internette: [Karabasan.exe Online][1]

Son zamanlarda uğraştığım bir çok konu var ama bunları sadece arkadaşlar arasında paylaşmakla yetiniyorum. Buraya da eklemenin, hatta bilgilendirici şekilde arşivlemenin güzel olacağını düşünüyorum.

Bu çalışmalardan ilki; 90&#8217;lı yılların yapay zekası olan ünlü <a href="https://eksisozluk.com/karabasan-exe--1718561" target="_blank">karabasan.exe</a> uygulamasını online hale getirmek oldu. Bu MSDOS uygulamasını Windows üzerinde çalıştırabilmek için  <a href="http://www.dosbox.com/" target="_blank">DOSBox</a> DOS emulator&#8217;ı gerekiyor ve akıllarda virüs şüphesini uyandırıyor. Ben nostaljiye erişimi kolaylaştırmak için bir çalışma yapmak istedim.  Çalışmaya önce EXE dosyasını decompile etmeyi deneyerek başladım. Sağlıklı bir sonuç elde edemedim.

<!--more-->

İkinci aşama ters mühendislikti. Ürünü inceleyerek, verdiği tüm yanıtları not ederek devam ettim. Daha sonrasında aynı mantığı kullanarak JavaScript ile tekrar kodlamaya başlamıştım. Hatta bu iş için konsol görüntüsünü elde etmeme yardımcı olacak <a href="http://terminal.jcubic.pl/" target="_blank">Jquery Terminal</a> adında güzel bir JavaScript kütüphanesi de bulmuştum ama aklıma başka bir yöntem geldi.

Bir yöntemle zaman kaybetmektense daha kolayı aranabilir ve bulunduğunda anında yeni yönteme geçebilmelisiniz. Buna çevik geliştirme denir. Burada dikkat edilmesi gerek aramanın geliştirmeye engel olmamasıdır. Bu noktada benim şansım yaver gitti ve <a href="https://archive.org" target="_blank">archive.org</a>&#8216;un site üzerinde MSDOS uygulamaları çalıştırabildiğini fark ettim. Araştırmaya archive.org üzerinden devam ettim ama sitede EXE dosyası arşivleme konusunda yeterince bilgi bulunmuyordu. Bunun üzerine<a href="https://archive.org/details/softwarelibrary_msdos_games" target="_blank"> MSDOS oyunları</a>nın listelendiği sayfadan, bu oyunların ortak parametlerini kullanarak denemeler yaptım ve sonuç olarak archive.org üzerinde <a href="https://archive.org/details/karabasan_20151004_1738" target="_blank">karabasan.exe</a>&#8216;yi çalıştırmış oldum.

Bu uygulamaya güzel bir Windows98 teması gerekiyordu ama sanırım telif haklarından dolayı hiçbir yerde bulamadım. Son olarak tumblr sitesinde tasarımlar arasında Win98 temasını gördüm. Tumblr&#8217;dan bir blog açtım ve temasını Win98 olarak ayarladım, blogtaki tek yazının içeriğine de archive.org&#8217;un sağlamış olduğu embed kodunu yerleştirdim.

Karabasan.exe&#8217;yi tekrar yazmak amacıyla çıktığım bu yolda tek satır kod yazmadan, bu çok da güzel olmayan ama üretildiği dönem itibariyle önem arz eden uygulamayı sanal aleme kazandırmış oldum. Nostaljiyi yaşamak isteyenleri [Bilgisayar][1] sayfamıza bekleriz.

Not: archive.org MSDOS dosyasının çalışır hale gelmesi için gereken parametreler;

  * **<span class="key">Emulator</span>** <span class="value">dosbox</span>
  * <span class="value"><strong><span class="key">Emulator_ext</span></strong> <span class="value">zip</span></span>
  * <span class="value"><strong><span class="key">Emulator_start</span></strong> <span class="value">[Uygulama adı]</span><br /> </span>

 [1]: http://bilgisayar.otomatikmuhendis.com/