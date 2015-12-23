---
title: 'Chrome&#8217;da GIF&#8217;lerin yüklenirken beyaz, videoların ise siyah gözükmesi sorunu'
author: Olcay Bayram
layout: post
permalink: /2015/07/05/chromeda-giflerin-yuklenirken-beyaz-videolarin-ise-siyah-gozukmesi-sorunu/
categories:
  - Sistem
tags:
  - beyaz
  - black
  - bug
  - chrome
  - gif
  - siyah
  - video
  - visual studio
format: aside
---
Chrome&#8217;da GIF&#8216;lerin yüklenirken beyaz, videoların ise yüklenmesi sırasında siyah gözükmesi gibi bir yavaşlık sorunu bulunuyor.

Bunun çözümü Chrome&#8217;un Gelişmiş Ayarları&#8217;ndan (<a href="//settings/" target="_blank">chrome://settings/</a> adresine girdikten sonra &#8220;Gelişmiş ayarları göster&#8230;&#8221; bağlantısını tıklayarak görüntüleyebilirsiniz) **Kullanılabilir olduğunda donanım ivmesini kullan** ayarını pasif duruma getirmektir.

**Güncelleme:** Aynı hafta içinde başka bir bilgisayarda, aynı yavaşlamayı Visual Studio 2013 içerisinde de yaşadım.

Bunun da çözümü aynı yöntem oldu. `Tools > Options > Environment > General` altında **“Automatically adjust visual experience based on client performance”** seçeneğini kaldırdıktan sonra **“Use hardware graphics acceleration if available”** seçeneği değiştirilebilir oldu ve onu da pasif duruma getirdim.

Böylece Visual Studio normal şekilde çalışmaya devam etti. Bir yazılımcı olarak performansı, daima görselliğe tercih ettim.