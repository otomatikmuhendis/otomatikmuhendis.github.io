---
title: TechCicekSepeti
author: Olcay Bayram
layout: post
permalink: /2015/12/06/techciceksepeti/
image: ciceksepeti-it-logo.jpg
categories:
  - Neler Yapıyorum?
tags:
  - github
  - jekyll
  - liquid
  - markdown
  - ruby
  - techciceksepeti
  - textile
---
Şu an çalıştığım şirketin Teknoloji departmanı için bir blog hazırlıyoruz ve içerikleri tüm departmandan kişiler oluştururken, editörlüğünü ben yürütüyorum. Ayrıca [@TechCicekSepeti](https://twitter.com/TechCicekSepeti) üzerinden duyurularını yapıyoruz.

GitHub üzerinde barındırıldığı için bloga <a href="http://techciceksepeti.github.io/" target="_blank">http://techciceksepeti.github.io/</a> adresinden ulaşabilirsiniz. <a href="http://jekyllrb.com/" target="_blank">Jekyll</a> taslak motoru sayesinde veritabanına ihtiyaç duymuyor. Ruby ile hazırlanan bu motor [Markdown][2] (veya [Textile][3]), [Liquid][4], HTML <span class="amp">&</span> CSS dosyalarınızı bir araya getirip işleyerek statik bir blog üretiyor.

Jekyll üzerinde Ruby dilinde plugin yazarak veya hazır olanları kullanarak onu daha güçlü hale getirebiliyorsunuz ama bu konuda göz önünde bulundurulması gereken tek nokta GitHub Jekyll'ı güvenlik kipinde çalıştırıyor. Bu da özel eklentileri uygulamaya dahil etmemesi anlamına geliyor. Bunun da çözümü; sitenizi lokalinizde derledikten sonra çıktıyı depoya yükleyerek sağlanabilir.

Proje sayfasına [şuradan][5] ulaşabilirsiniz. Dışarıdan yazılara da açığız Pull Request göndermeniz yeterli.

 [2]: http://daringfireball.net/projects/markdown/
 [3]: http://redcloth.org/textile
 [4]: https://github.com/Shopify/liquid/wiki
 [5]: https://github.com/techciceksepeti/techciceksepeti.github.io