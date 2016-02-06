---
title: Orchard Kurulumu
author: Olcay Bayram
layout: post
permalink: /2013/07/22/orchard-kurulumu/
categories:
  - CMS
  - Orchard
tags:
  - ASP.NET
  - CMS
  - IIS
  - MVC
  - Orchard
  - todo
  - WebMatrix
image: /img/orchardLogo.jpg
---
Orchard kurulumunu dört farklı yöntemle yapabilirsiniz:

* <a href="http://www.microsoft.com/web/downloads/platform.aspx" target="_blank">Microsoft Web Platform Installer</a> kullanarak yüklemek  
* <a href="http://www.microsoft.com/web/" target="_blank">Microsoft WebMatrix</a> ile kurulumu ki buna daha sonra değineceğiz.  
* Orchard .zip dosyasını indirip kurmak. Bundan da daha sonra bahsediyor olacağız.  
* Orchard kaynak kodunu komut satırından veya Visual Studio üzerinden derleyerek kurulum.

Bu başlık Orchard'ın Microsoft Web Platform Installer ile kurulumunu anlatmaktadır.

## Gereksinimler

Orchard'ın çalışabilmesi için IIS (Express 8, 7.5 veya IIS 7.x) sunucunuzda en azından ASP.NET 4 olmalı.  
IIS sunucunuzu kurarken ASP.NET modüllerinin aktif olduğundan emin olun ve Orchard'ı ASP.NET 4 uygulama havuzunda koşacak şekilde ayarlayın.

<!--more-->

![Orchard Project](/img/orchardLogo.jpg)

Orchard siteleri geliştirmek isteyen yazılımcılar SQL sunucusunda barındırılan bir veritabanına ve WebMatrix veya Visual Studio 2010 gibi bir yazılım geliştirme ortamına ihtiyaç duymaktadır. Sıradaki kurulum Web Platform Installer üzerinden yapılmakla birlikte Orchard ve IIS Express 7.5 içermektedir. Ayrıca geliştirme yapabileceğiniz WebMatrix ve SQL Server Compact 4.0 gibi uygulamalardan da bahsedilmektedir.

## Kurulum

Başlangıç için Web Platform Installer indirin ve kurun. Programı çalıştırdığınızda açılan uygulamadan Orchard CMS bulun ve yüklenecek uygulama listenize ekleyin. Artık yükleyebilirsiniz.

[![Orchard Kurulum](/wp-content/uploads/2013/07/image.jpg)][1]

**Install** butonunu tıklayın ve kullanım lisansını onaylayın.

[![Orchard Kurulum](/wp-content/uploads/2013/07/image2.jpg)][2]

Kurulum tamamlandığında diyalog kutusunda yüklenen araçlar listelenecektir. Yeni oluşturduğumuz siteyi WebMatrix&#8217;de açmak için **Launch** butonunu tıklayınız.

[![Orchard Kurulum](/wp-content/uploads/2013/07/image3.jpg)][3]

## WebMatrix&#8217;de İlk Sürüş

WebMatrix çalıştırıldığında **Files** çalışma alanında Orchard sitenizin dosya yapısını görebilirsiniz. **Run** butonuna bastığınızda sitenizi görüntülemek istediğiniz web tarayıcısını seçebilir ve artık sitenizi görebilirsiniz.

[![Orchard Kurulum](/wp-content/uploads/2013/07/image4.jpg)][4]

Orchard&#8217;ı ilk başlattığınızda aşağıdaki gibi bir görüntü ile karşılacaksınız.

[![Orchard Kurulum](/wp-content/uploads/2013/07/image5.jpg)][5]

Orchard dahili bir veritabanı sunucusu içermektedir. Mamafih, SQL Server veya SQL Server Express kullanıyorsanız, bu ekranda bağlantı cümlesi (connection string) girerek Orchard&#8217;ın istediğiniz sunucuyu kullanmasını sağlayabilirsiniz. Ayrıca diyelim ki bir adet veritabanınız bulunmasına rağmen birden çok siteniz bulunuyor. Bu sitelerin çakışmaması için bu ekranda tablo ön adı (table prefix) belirleyebilirsiniz. Bu ön ad bu site için üretilecek bütün tablo isimlerine eklenecektir.

[![Orchard Kurulum](/wp-content/uploads/2013/07/image6.jpg)][6]

Başlangıç ekranının diğer bir bölümü de Orchard Recipe (yemek tarifi gibi düşünebilir) seçtiğimiz bölümdür. Bu Recipe'ler sitenin kurulumu için önceden belirlenmiş tariflerdir;

* **Default** (Varsayılan) Sıklıkla kullanılan özelliklerin aktif olarak geldiği Orchard kurulumudur.  
* **Blog** Siteyi kişisel blog olarak hazırlanmasını sağlayan tariftir.  
* **Core** Sadece Orchard çekirdeğini hazırlar ve geliştirmek için gerisini size bırakır.

[![Orchard Kurulum](/wp-content/uploads/2013/07/image7.jpg)][7]

Orchard Recipe, aynı tarzda siteler oluşturmak istediğinizde işinize yarayacaktır. Sitenizin yayına alınabilmesi için bir kaç ortamda (Ortamlar: Geliştirme, Test, Kullanıcı Kabul, Yayın) kurmanız gerekeceği için bu tariflerin kullanılması şart olacaktır. Daha sonra nasıl oluşturulduklarını da yazacağım.

Başlangıç ekranındaki gerekli alanları doldurduktan sonra artık **Finish Setup** butonuna tıklayarak kurulumu bitirebiliriz. İşlem tamamlandıktan sonra yeni sitenizin ana sayfası görünecektir.

[![Orchard Kurulum](/wp-content/uploads/2013/07/image1.jpg)][8]

Artık yeni sitenizi kurcalayabilirsiniz.

 [1]: http://otomatikmuhendis.com/wp-content/uploads/2013/07/image.jpg
 [2]: http://otomatikmuhendis.com/wp-content/uploads/2013/07/image2.jpg
 [3]: http://otomatikmuhendis.com/wp-content/uploads/2013/07/image3.jpg
 [4]: http://otomatikmuhendis.com/wp-content/uploads/2013/07/image4.jpg
 [5]: http://otomatikmuhendis.com/wp-content/uploads/2013/07/image5.jpg
 [6]: http://otomatikmuhendis.com/wp-content/uploads/2013/07/image6.jpg
 [7]: http://otomatikmuhendis.com/wp-content/uploads/2013/07/image7.jpg
 [8]: http://otomatikmuhendis.com/wp-content/uploads/2013/07/image1.jpg