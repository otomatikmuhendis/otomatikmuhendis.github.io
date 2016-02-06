---
title: AppFabric Üzerinde Cache Oluşturma ve Erişimi
author: Olcay Bayram
layout: post
permalink: /2014/10/16/appfabric-uzerinde-cache-olusturma-ve-erisimi/
categories:
  - Sistem
  - Yazılım
tags:
  - AppFabric
  - Cache
  - PowerShell
  - windows
---
[Daha önceki yazı][1]da AppFabric kurulumunu ve ayarlarını görmüştük. İşlemleri başarıyla gerçekleştirdiyseniz şu an çalışır vaziyette bir AppFabric sunucunuz olmalı. Sunucularımızı görebilmek için Caching Administration Windows PowerShell aracını Administator olarak çalıştırıyoruz ve aşağıdaki komutu giriyoruz.

`Get-CacheHost`

Eğer Powershell aracı açılırken hata aldıysanız. Daha önceki yazıda da bahsettiğimiz Remote Registry servisinin çalışmamasından dolayı hata vermiş olabilir. Bu servisi çalıştırmak için yine aşağıdaki komutu girebiliriz.

`net start RemoteRegistry`

Bu işlem sonrasında PowerShell aracını tekrar çalıştırmanız gerekir. Kısayol ayarlarından bakarsanız aslında modül ekleme komutu barından bir PowerShell kısayolu olduğunu görebilirsiniz. Sıklıkla PowerShell kullanan biriyseniz bu komutu buradan kopyalarak kullanabilirsiniz.

<!--more-->

Cache sunucusu çalışmıyorsa (durumu &#8220;DOWN&#8221; ise) aşağıdaki komutla çalıştırabiliriz.

`net start AppFabricCachingService`

Çalışması biraz zaman alacaktır. Kısa bir süre bekledikten sonra tekrar get-cachehost komutuyla son durumunu görebiliriz.

Artık ayakta olan bu sunucu üzerinde yeni bir cache oluşturabiliriz. Aşağıdaki komut &#8220;appFabricCache&#8221; adında yeni bir cache oluşturacaktır. Bu ismi değiştirebilirsiniz.

`New-Cache appFabricCache`

Oluşturduğumuz cache bilgilerini aşağıdaki komut ile görüntüleyebiliriz.

`get-cacheconfig appFabricCache`

![Komutlar](/wp-content/uploads/2014/10/Step5.png)

Şu ana kadar çalıştırdığımız komutların görüntüsü

Cache hakkında daha fazla bilgi alabilmek için kullanabileceğimiz komutlar;

`get-cache`

`get-cachestatistics appFabricCache`

Artık cache&#8217;imizi de oluşturduğumuza göre nasıl erişeceğimizi görelim.

Şu adreste <a href="http://go.microsoft.com/fwlink/?LinkId=169336" target="_blank">Windows Server AppFabric Samples</a> örnek uygulamaları indirebilirsiniz. &#8220;WindowsServerAppFabricSamples\WindowsServerAppFabricSamples\Samples\CS\Cache\CacheSampleWebApp&#8221; içerisindeki **CacheSampleWebApp.sln**&#8216;yi açarsanız cache üzerinde ekleme, getirme ve güncelleme işlemlerini yapan hazır ASP.NET uygulamasını görebilirsiniz.

Derleme hatası alıyorsanız, **Microsoft.ApplicationServer.Caching.Core** ve **.Client** referanslarını kontrol ediniz. Bunlardan dolayı hata alıyorsanız, bunları sildikten sonra Program Files içerisinde ki AppFabric içerisinde dll&#8217;lerini bulup projeye ekleyebilirsiniz.

Başarılı bir şekilde derlenen projenin oluşturduğu sayfa görünümü şu şekilde olacaktır;

![Sayfa görünümü](/wp-content/uploads/2014/10/Step6.png)

Proje içeriğindeki kodların açıklamaları;

CacheUtil sınıfı cache bağlantımızı gerçekleştiren GetCache() metodunu içermektedir.

{% highlight csharp linenos %}using Microsoft.ApplicationServer.Caching;
using System.Collections.Generic;

/// <summary>
/// Cache aygıtı
/// </summary>
public class CacheUtil
{
  private static DataCacheFactory _factory = null;
  private static DataCache _cache = null;

  public static DataCache GetCache()
  {
      if (_cache != null)
          return _cache;

      //-------------------------
      // Cache istemcisinin ayarlanması 
      //-------------------------

      //1 cache sunucusu için liste tanımlıyoruz
      List<DataCacheServerEndpoint> servers = new List<DataCacheServerEndpoint>(1);

      //Cache sunucusunun parametrelerini set ediyoruz 
      //  Parameter 1 = host adı
      //  Parameter 2 = cache port no
      servers.Add(new DataCacheServerEndpoint("localhost", 22233));

      //Cache ayarları
      DataCacheFactoryConfiguration configuration = new DataCacheFactoryConfiguration();
      
      //Cache'in hostu set edilir
      configuration.Servers = servers;
      
      //Varsayılan cache ayarları set edilir
      configuration.LocalCacheProperties = new DataCacheLocalCacheProperties();

      //Web sayfasında önemli mesajların gösterilmesi kapatılır
      DataCacheClientLogManager.ChangeLogLevel(System.Diagnostics.TraceLevel.Off);

      //Ayarlar cache factory'e aktarılır
      _factory = new DataCacheFactory(configuration);

      //"appFabricCache" factory'e kayıt edilir
      _cache = _factory.GetCache("appFabricCache");
      
    return _cache;
  }
}
{% endhighlight %}

Kendi oluşturduğum cache adını özellikle verdiğime dikkat ediniz. Burada kendi oluşturduğunuz cache adını yazabilirsiniz.

Cache'i yönetmek için aşağıdaki metodları kullanabilirsiniz;

{% highlight csharp linenos %}//Ekleme
m_cache.Add(orderid, order);

//Getirme
Order order = (Order)m_cache.Get(orderid);

//Güncelleme
m_cache.Put(orderid, order);
{% endhighlight %}

Böylece kurmuş olduğumuz sunucuyu nasıl kullanabileceğimizi görmüş olduk. Bundan sonra yapılması gereken cache&#8217;e ekleme yapan bir servis yazmaktır. Her güncellemede de cache&#8217;i güncellemesi gerekecektir. Ondan sonra istediğimiz yerden bu sunucuya ulaşarak rahatlıkla ve hızla verileri çekebiliriz.

Yorumlarınızı okumaktan ve sorularınızı yanıtlamaktan mutluluk duyarım.

 [1]: http://otomatikmuhendis.com/2014/10/15/appfabric-kurulumu-ayarlari-ve-kullanimi/