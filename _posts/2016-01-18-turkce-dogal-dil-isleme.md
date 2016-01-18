---
author: Olcay Bayram
layout: post
subtitle: null
image: ""
categories: Yazılım
tags: 
  - nlp
  - lsa
  - ontoloji
  - morfoloji
  - sözdizimi
  - tekilleştirme
  - zemberek
published: true
title: Türkçe Doğal Dil İşleme
---


23 Aralık 2015 günü [Yazılım Buluşmaları](http://www.yazilimbulusmalari.com/) kapsamında [Dr. Aşkın Karakaş](https://tr.linkedin.com/in/askink)'ın sunduğu "Türkçe doğal dil işleme ve semantik analiz" adlı etkinliğe katıldım. Biraz etkinlik içeriğini, biraz da kendi aldığım notları paylaşmaya çalışacağım.

Öncelikli olarak doğal dil işlemeye neden gerek duyarız sorusuna yanıt verelim. Verinin depolanabilmesi için yapısal bir halde olması gerekir. İlişkisel veya değil her hangi bir veritabanında yapısal olmayan veri depolanamaz. Türkiye'de sözlük sitelerinde, küresel olarak bakıldığında [Wikipedia](https://tr.wikipedia.org/)'da bulunan bilginin metin formatında olması yapısal olmayan veriye örnek gösterilebilir.

[DBpedia](http://wiki.dbpedia.org/) gibi topluluklar Wikipedia içerisindeki bilgiyi yapısal hale getirerek bunu webde erişilebilir kılar. Böylece karmaşık sorgularla, webdeki farklı veri setlerine bağlamanızı sağlar.

Bilginin metinlerden ayrılması, sınıflandırılması ve aranabilir hale getirilmesi arama motoru geliştiricileri için önemli bir konudur. Bu sebeple [Schema.org](https://schema.org/) gibi veri yapısı şemaları ortaya çıkaran topluluklar oluşturulmaktadır. Schema.org; Google, Microsoft, Yahoo ve Yandex tarafından desteklenmektedir.

Metinlerin içerdiği bilgiler [LSA](http://lsa.colorado.edu/whatis.html) gibi istatiksel hesaplamalarla sınıflandırılmaya çalışılsa da gerçek hazine bilginin anlamsal karşılıklarını ve ilişkilerini bulmakta yatar. Bu konuda her dil için ayrı çalışma yapılması gerekmektedir. Türkçe üzerine hazırlanmış olan [Zemberek](https://github.com/ahmetaa/zemberek-nlp) yaygın olarak kullanılmaktadır.

Etkinliğin devamında ["Özgeçmişlerden ve İş İlanlarından Doğal Dil İşleme Yöntemleri ile Bilgi Çıkarımı"](http://www.cmpe.boun.edu.tr/~gungort/papers/Ozgecmislerden%20ve%20Is%20Ilanlarindan%20Dogal%20Dil%20Isleme%20Yontemleri%20ile%20Bilgi%20Cikarimi.pdf) çalışmasının detayları anlatıldı.

Diğer ontoloji siteleri;
- [Freebase](https://www.freebase.com/)
- [BabelNet](http://babelnet.org/)
- [WordNet](http://wordnet.princeton.edu/)
