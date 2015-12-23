---
title: AppFabric Kurulumu, Ayarları ve Kullanımı
author: Olcay Bayram
layout: post
permalink: /2014/10/15/appfabric-kurulumu-ayarlari-ve-kullanimi/
categories:
  - Yazılım
tags:
  - AppFabric
  - Cache
  - Cluster
  - IIS
  - Kurulum
  - Server
  - windows
---
Microsoft Windows Server AppFabric, Windows Server&#8217;ın web uygulamaları ve orta katman servisler için hosting, yönetim ve cache&#8217;leme yeteneklerini arttıran bir sunucu uygulamasıdır.

Bu adresten indirerek başlayabiliriz; <a href="http://www.microsoft.com/en-us/download/details.aspx?id=27115" target="_blank">Microsoft AppFabric 1.1 for Windows Server Install</a>

Eğer Windows 7 kullanıyorsanız <a href="http://go.microsoft.com/fwlink/?LinkId=182018" target="_blank">IIS 7 Manager for Remote Administration</a> kurmanız faydalı olabilir. Bu sayade uzaktan IIS sunucularınızı kontrol edebilirsiniz.

Aşağıdaki gibi tüm özelliklerin kurulumunu istiyoruz.

[<img class="aligncenter size-full wp-image-140" src="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/10/Step1.png?fit=474%2C346" alt="Step1" data-recalc-dims="1" />][1]

Ön şartlar (Prerequisities) ekranında bilgisayarınızda kurulu olması gereken yazılımları kontrol edecektir. Bunlar hakkında yardımı uygulamanın kurulum dökümanında bulabilirsiniz. Bende Microsoft FTP Service&#8217;in durdurulması gerektiğini söylüyordu. Konsolda &#8220;`net stop ftpsvc`&#8221; yazarak veya Control Panel > Administrative Tools > Services üzerinden durdurabilirsiniz. Gerekli değişiklikleri yaptıktan sonra Refresh butonu ile tekrar kontrol etmesini sağlayınız.

Kurulum başarıyla tamamlandıktan sonra ayarlarını yapabilmemiz için Configuration Wizard (Ayar Sihirbazı) açılacaktır. Bu yardımcı araca isteiğimiz zaman Başlat menüsündeki AppFabric > Configure AppFabric üzerinden ulaşabiliriz.

Hosting Service yapılandırmasını geçerek Caching Service ile başlayabilirsiniz. Servis ayarlarını kaydetmek için veritabanı veya bir XML dosyası göstermenizi isteyecek. Biz aşağıdaki şekilde Configure butonuyla açılan ekranda yeni bir isim yazarak ve ilgili iki kutuyu seçili hale getirerek yeni bir veritabanı oluşturmasını sağlıyoruz.

[<img src="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/10/Step2-300x224.png?fit=300%2C224" alt="Step2" class="aligncenter size-medium wp-image-141" data-recalc-dims="1" />][2]

<a href="http://otomatikmuhendis.com/2014/10/15/appfabric-kurulumu-ayarlari-ve-kullanimi/step3/" rel="attachment wp-att-142"><img src="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/10/Step3-300x224.png?fit=300%2C224" alt="Step3" class="aligncenter size-medium wp-image-142" data-recalc-dims="1" /></a>

Not: Henüz ayarları ilk kez yaptığınız için sizin ekranınızda &#8220;This machine is not a member of an AppFabric Caching cluster.&#8221; yazabilir. Ayarları başarıyla tamamladıktan sonra bu sihirbazı tekrar çalıştırırsanız mesajın değiştiğini görebilirsiniz.

[<img class="aligncenter size-medium wp-image-143" src="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/10/Step4-300x152.png?fit=300%2C152" alt="Step4" srcset="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/10/Step4.png?resize=300%2C152 300w, http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/10/Step4.png?w=640 640w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />][3]

Şimdi cache yönetimi için PowerShell&#8217;e ilgili modülün yüklenmesi gerekiyor. Bunu yapmak için Başlat menüsü > AppFabric > Caching Administration Windows PowerShell aracını kullanacağız. Bu konsol uygulamasını Administrator olarak çalıştırırsak gerekli ayarlamaları otomatik olarak yapacaktır.

İlk çalıştırıldığında &#8220;Failed to connect to hosts in the cluster&#8221; hatası ile karşılaşılabilir. Bunun sebebi AppFabric&#8217;in sunucu içerisinde bile Remote Registry servisini kullanmasıdır. Bu servisi konsolda &#8220;`net start RemoteRegistry`&#8221; yazarak veya Control Panel > Administrative Tools > Services üzerinden başlatabilirsiniz.

Artık aşağıdaki komut ile cluster&#8217;ı başlatabilir ve çalışmakta olan servisleri görebiliriz.

`Start-CacheCluster`

Servis durumlarını daha sonra gözlemleyebilmek için aşağıdaki komut kullanılabilir.

`Get-CacheHost`

Diğer komutlar hakkında bilgi almak için ise şunu yazabilirsiniz;

`get-command *cache*`

Sonuç; AppFabric kurulumunu ve ayarlanmasını gördük ve kullanımına giriş yapmış olduk. Daha sonraki yazıda cache oluşturulması ve uygulamalarımızdan bu cache&#8217;e nasıl ulaşacağımızı işleyeceğiz.

 [1]: http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/10/Step1.png
 [2]: http://otomatikmuhendis.com/2014/10/15/appfabric-kurulumu-ayarlari-ve-kullanimi/step2/
 [3]: http://otomatikmuhendis.com/2014/10/15/appfabric-kurulumu-ayarlari-ve-kullanimi/step4/