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
---
Orchard kurulumunu dört farklı yöntemle yapabilirsiniz:  
&#8211; <a href="http://www.microsoft.com/web/downloads/platform.aspx" target="_blank">Microsoft Web Platform Installer</a> kullanarak yüklemek  
&#8211; <a href="http://www.microsoft.com/web/" target="_blank">Microsoft WebMatrix</a> ile kurulumu ki buna daha sonra değineceğiz.  
&#8211; Orchard .zip dosyasını indirip kurmak. Bundan da daha sonra bahsediyor olacağız.  
&#8211; Orchard kaynak kodunu komut satırından veya Visual Studio üzerinden derleyerek kurulum.

Bu başlık Orchard&#8217;ın Microsoft Web Platform Installer ile kurulumunu anlatmaktadır.

Gereksinimler

Orchard&#8217;ın çalışabilmesi için IIS (Express 8, 7.5 veya IIS 7.x) sunucunuzda en azından ASP.NET 4 olmalı.  
IIS sunucunuzu kurarken ASP.NET modüllerinin aktif olduğundan emin olun ve Orchard&#8217;ı ASP.NET 4 uygulama havuzunda koşacak şekilde ayarlayın.

Orchard siteleri geliştirmek isteyen yazılımcılar SQL sunucusunda barındırılan bir veritabanına ve WebMatrix veya Visual Studio 2010 gibi bir yazılım geliştirme ortamına ihtiyaç duymaktadır. Sıradaki kurulum Web Platform Installer üzerinden yapılmakla birlikte Orchard ve IIS Express 7.5 içermektedir. Ayrıca geliştirme yapabileceğiniz WebMatrix ve SQL Server Compact 4.0 gibi uygulamalardan da bahsedilmektedir.

## Kurulum

Başlangıç için Web Platform Installer indirin ve kurun. Programı çalıştırdığınızda açılan uygulamadan Orchard CMS bulun ve yüklenecek uygulama listenize ekleyin. Artık yükleyebilirsiniz.

[<img src="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image.jpg?fit=604%2C446" alt="Web Platform Installer uygulama listesi" class="aligncenter size-full wp-image-6" srcset="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image.jpg?resize=300%2C221 300w, http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image.jpg?w=675 675w" sizes="(max-width: 675px) 100vw, 675px" data-recalc-dims="1" />][1]

**Install** butonunu tıklayın ve kullanım lisansını onaylayın.

[<img src="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image2.jpg?fit=604%2C423" alt="Web Platform Installation" class="aligncenter size-full wp-image-9" srcset="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image2.jpg?resize=300%2C210 300w, http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image2.jpg?w=675 675w" sizes="(max-width: 675px) 100vw, 675px" data-recalc-dims="1" />][2]

Kurulum tamamlandığında diyalog kutusunda yüklenen araçlar listelenecektir. Yeni oluşturduğumuz siteyi WebMatrix&#8217;de açmak için **Launch** butonunu tıklayınız.

[<img src="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image3.jpg?fit=604%2C418" alt="Web Platform Installation" class="aligncenter size-full wp-image-10" srcset="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image3.jpg?resize=300%2C207 300w, http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image3.jpg?w=675 675w" sizes="(max-width: 675px) 100vw, 675px" data-recalc-dims="1" />][3]

## WebMatrix&#8217;de İlk Sürüş

WebMatrix çalıştırıldığında **Files** çalışma alanında Orchard sitenizin dosya yapısını görebilirsiniz. **Run** butonuna bastığınızda sitenizi görüntülemek istediğiniz web tarayıcısını seçebilir ve artık sitenizi görebilirsiniz.

[<img src="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image4.jpg?fit=604%2C488" alt="WebMatrix" class="aligncenter size-full wp-image-11" srcset="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image4.jpg?resize=300%2C242 300w, http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image4.jpg?w=675 675w" sizes="(max-width: 675px) 100vw, 675px" data-recalc-dims="1" />][4]

Orchard&#8217;ı ilk başlattığınızda aşağıdaki gibi bir görüntü ile karşılacaksınız.

[<img src="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image5.jpg?fit=604%2C840" alt="Orchard Kurulum Ekranı" class="aligncenter size-full wp-image-12" srcset="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image5.jpg?resize=300%2C417 300w, http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image5.jpg?w=700 700w" sizes="(max-width: 700px) 100vw, 700px" data-recalc-dims="1" />][5]

Orchard dahili bir veritabanı sunucusu içermektedir. Mamafih, SQL Server veya SQL Server Express kullanıyorsanız, bu ekranda bağlantı cümlesi (connection string) girerek Orchard&#8217;ın istediğiniz sunucuyu kullanmasını sağlayabilirsiniz. Ayrıca diyelim ki bir adet veritabanınız bulunmasına rağmen birden çok siteniz bulunuyor. Bu sitelerin çakışmaması için bu ekranda tablo ön adı (table prefix) belirleyebilirsiniz. Bu ön ad bu site için üretilecek bütün tablo isimlerine eklenecektir.

[<img src="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image6.jpg?fit=595%2C385" alt="Orchard DB Ayarı" class="aligncenter size-full wp-image-13" srcset="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image6.jpg?resize=300%2C194 300w, http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image6.jpg?w=595 595w" sizes="(max-width: 595px) 100vw, 595px" data-recalc-dims="1" />][6]

Başlangıç ekranının diğer bir bölümü de Orchard Recipe (yemek tarifi gibi düşünebilir) seçtiğimiz bölümdür. Bu Recipe&#8217;ler sitenin kurulumu için önceden belirlenmiş tariflerdir;  
&#8211; **Default** (Varsayılan) Sıklıkla kullanılan özelliklerin aktif olarak geldiği Orchard kurulumudur.  
&#8211; **Blog** Siteyi kişisel blog olarak hazırlanmasını sağlayan tariftir.  
&#8211; **Core** Sadece Orchard çekirdeğini hazırlar ve geliştirmek için gerisini size bırakır.

[<img src="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image7.jpg?fit=590%2C308" alt="Orchard Recipe Seçmek" class="aligncenter size-full wp-image-14" data-recalc-dims="1" />][7]

Orchard Recipe, aynı tarzda siteler oluşturmak istediğinizde işinize yarayacaktır. Sitenizin yayına alınabilmesi için bir kaç ortamda (Ortamlar: Geliştirme, Test, Kullanıcı Kabul, Yayın) kurmanız gerekeceği için bu tariflerin kullanılması şart olacaktır. Daha sonra nasıl oluşturulduklarını da yazacağım.

Başlangıç ekranındaki gerekli alanları doldurduktan sonra artık **Finish Setup** butonuna tıklayarak kurulumu bitirebiliriz. İşlem tamamlandıktan sonra yeni sitenizin ana sayfası görünecektir.

[<img src="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image1.jpg?fit=604%2C380" alt="Orchard ilk ana sayfa" class="aligncenter size-full wp-image-7" data-recalc-dims="1" />][8]

Artık yeni sitenizi kurcalayabilirsiniz.

 [1]: http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image.jpg
 [2]: http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image2.jpg
 [3]: http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image3.jpg
 [4]: http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image4.jpg
 [5]: http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image5.jpg
 [6]: http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image6.jpg
 [7]: http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image7.jpg
 [8]: http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/07/image1.jpg