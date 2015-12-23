---
title: NHibernate ile İyimser Denkleme
author: Olcay Bayram
layout: post
permalink: /2013/11/11/nhibernate-ile-iyimser-denkleme/
categories:
  - Veritabanı
tags:
  - concurrency
  - denklik
  - eşitleme
  - güncelleme
  - iyimser
  - Nhibernate
  - optimistic
  - sql
  - update
---
Databasedeki bir kaydın aynı anda birden fazla session tarafından update edilmesi sonucu data kaybı yaşanabiliyor. ReadUncommited şekilde select edilen bir kayıt, update edilene kadar başka bir session tarafından update edilirse, artık güncel olmayan bir kaydı (dirty) update etmiş oluyoruz.

Bunun önüne geçmek için NHibernate’in sunduğu Optimistic Lock’u kullanabiliyoruz. Mapping class’a DynamicUpdate.True ve OptimisticLock.All veya OptimisticLock.Dirty ekleyerek update esnasında bu tablodaki kaydın en güncel halini mi update ettiğimizi kontrol edebiliyoruz. Eğer güncel olmayan kaydı update etmek istersek, bu sayede hata alıp bunu handle edebiliyoruz.

DynamicUpdate.True:  
Update SQL’inin runtime’da dinamik olarak oluşmasını sağlıyor.

OptimisticLock.All:  
Update statement’ın Where clause’unda kaydın tüm alanlarını orijinal değerleriyle kontrol ederek update esnasında kaydın hiçbir alanının değişmemiş olmasından emin oluyor.

OptimisticLock.Dirty:  
Update statement’ın Where clause’una sadece dirty durumdaki (güncel olmayan) alanları ekleyerek kaydın güncelliğinden emin oluyor. Bu şekilde aynı kaydın farklı alanlarını birden fazla session aynanda update edebiliyor.

Özetle:  
Amount:100 olan bir kaydı update ederken  
NHibernate tarafından oluşturulan 

<pre class="brush: sql; title: ; notranslate" title="">UPDATE TABLE SET AMOUNT=110 WHERE ID=1</pre>

şeklindeki bir update statement 

<pre class="brush: sql; title: ; notranslate" title="">UPDATE TABLE SET AMOUNT=110 WHERE ID=1 AND AMOUNT=100</pre>

haline geliyor. Eğer select ile update arasında başka bir session bunun değerini 120 yapmışsa, amount’u 110 olarak güncellememize izin vermiyor.

Bilgi: <a href="http://nhforge.org/doc/nh/en/index.html#transactions" target="_blank">http://nhforge.org/doc/nh/en/index.html#transactions</a>