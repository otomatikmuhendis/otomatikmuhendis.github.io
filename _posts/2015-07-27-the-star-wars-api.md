---
author: Olcay Bayram
layout: post
title: The Star Wars API
permalink: "/2015/07/27/the-star-wars-api/"
categories: "neler-yapiyorum"
tags: 
  - api
  - github
  - star wars
  - swapi
published: true
subtitle: null
image: starwars.jpg
---

<a href="http://phalt.co/" target="_blank">Paul Hallett</a> 2014 Aralık ayında Star Wars evreni için bir veritabanı oluşturuyor ve bunu <a title="The Star Wars API" href="https://swapi.co/" target="_blank">SWAPI</a> adında bir API ile paylaşıyor.

Kendi duyurduğu şekilde aktarmak gerekirse; Şimdiye kadar aradığınız Star Wars&#8217;a ait tüm bilgiler bulunuyor. Altı filmde yer alan gezegenler, uzay gemileri, araçlar, insanlar, filmler ve canlı türleri. 7 ay içerisinde sunucuya 749.239 adet istek iletilmiş. Bu da demek oluyor ki şu an bunu kullanan uygulamalar var.

İşin bir de destek kısmı var. Projeye iki kanaldan destek olunabilir; ilki doğrudan para desteği, ikincisi ise kod yazarak. [Swapi&#8217;nin çekirdeği][1]ne katkıda bulunarak veya onu kullanacak kişiler için yardımcı kütüphaneler oluşturarak destek olunabilir.

Ben C# ile yazılmış yardımcı bir kütüphane olmadığını görünce bunu yazarak destek verme yolunu tercih ettim. <a href="https://github.com/olcay" target="_blank">Github</a>&#8216;da [SharpTrooper][2] projesinde hazırladığım C# client&#8217;ı görebilirsiniz. Ayrıca [dokümantasyon sayfası][3]nda diğer dilleri de bulabilirsiniz.

 [1]: https://github.com/phalt/swapi
 [2]: https://github.com/olcay/SharpTrooper
 [3]: https://swapi.co/documentation#csharp
