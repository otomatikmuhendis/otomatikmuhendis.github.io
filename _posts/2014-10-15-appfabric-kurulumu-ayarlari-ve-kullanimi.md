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

![Birinci adım](/wp-content/uploads/2014/10/Step1.png)

Ön şartlar (Prerequisities) ekranında bilgisayarınızda kurulu olması gereken yazılımları kontrol edecektir. Bunlar hakkında yardımı uygulamanın kurulum dökümanında bulabilirsiniz. Bende Microsoft FTP Service&#8217;in durdurulması gerektiğini söylüyordu. Konsolda &#8220;`net stop ftpsvc`&#8221; yazarak veya Control Panel > Administrative Tools > Services üzerinden durdurabilirsiniz. Gerekli değişiklikleri yaptıktan sonra Refresh butonu ile tekrar kontrol etmesini sağlayınız.

Kurulum başarıyla tamamlandıktan sonra ayarlarını yapabilmemiz için Configuration Wizard (Ayar Sihirbazı) açılacaktır. Bu yardımcı araca isteiğimiz zaman Başlat menüsündeki AppFabric > Configure AppFabric üzerinden ulaşabiliriz.

Hosting Service yapılandırmasını geçerek Caching Service ile başlayabilirsiniz. Servis ayarlarını kaydetmek için veritabanı veya bir XML dosyası göstermenizi isteyecek. Biz aşağıdaki şekilde Configure butonuyla açılan ekranda yeni bir isim yazarak ve ilgili iki kutuyu seçili hale getirerek yeni bir veritabanı oluşturmasını sağlıyoruz.

[![İkinci adım](/wp-content/uploads/2014/10/Step2-300x224.png)](/wp-content/uploads/2014/10/Step2.png)

[![Üçüncü adım](/wp-content/uploads/2014/10/Step3-300x224.png)](/wp-content/uploads/2014/10/Step3.png)

Not: Henüz ayarları ilk kez yaptığınız için sizin ekranınızda &#8220;This machine is not a member of an AppFabric Caching cluster.&#8221; yazabilir. Ayarları başarıyla tamamladıktan sonra bu sihirbazı tekrar çalıştırırsanız mesajın değiştiğini görebilirsiniz.

[![Dördüncü adım](/wp-content/uploads/2014/10/Step4-300x152.png)](/wp-content/uploads/2014/10/Step4.png)

Şimdi cache yönetimi için PowerShell&#8217;e ilgili modülün yüklenmesi gerekiyor. Bunu yapmak için Başlat menüsü > AppFabric > Caching Administration Windows PowerShell aracını kullanacağız. Bu konsol uygulamasını Administrator olarak çalıştırırsak gerekli ayarlamaları otomatik olarak yapacaktır.

İlk çalıştırıldığında &#8220;Failed to connect to hosts in the cluster&#8221; hatası ile karşılaşılabilir. Bunun sebebi AppFabric&#8217;in sunucu içerisinde bile Remote Registry servisini kullanmasıdır. Bu servisi konsolda &#8220;`net start RemoteRegistry`&#8221; yazarak veya Control Panel > Administrative Tools > Services üzerinden başlatabilirsiniz.

Artık aşağıdaki komut ile cluster'ı başlatabilir ve çalışmakta olan servisleri görebiliriz.

`Start-CacheCluster`

Servis durumlarını daha sonra gözlemleyebilmek için aşağıdaki komut kullanılabilir.

`Get-CacheHost`

Diğer komutlar hakkında bilgi almak için ise şunu yazabilirsiniz;

`get-command *cache*`

Sonuç; AppFabric kurulumunu ve ayarlanmasını gördük ve kullanımına giriş yapmış olduk. Daha sonraki yazıda cache oluşturulması ve uygulamalarımızdan bu cache'e nasıl ulaşacağımızı işleyeceğiz.