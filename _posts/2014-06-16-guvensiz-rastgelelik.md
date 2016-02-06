---
title: Güvensiz Rastgelelik
author: Olcay Bayram
layout: post
permalink: /2014/06/16/guvensiz-rastgelelik/
categories:
  - Yazılım
tags:
  - güvenlik
  - insecure
  - randomness
  - rastgele
---
<img src="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/06/yagmur.png?fit=604%2C147" alt="yagmur" class="aligncenter size-full wp-image-135" srcset="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/06/yagmur.png?resize=300%2C73 300w, http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/06/yagmur.png?w=800 800w" sizes="(max-width: 800px) 100vw, 800px" data-recalc-dims="1" />

Yağmurlu bir İstanbul gününde, yağmur damlalarının rastgele yağışını izlerken aklıma geldi. Acaba kodlarımızın içerisinde ürettiğimiz sayılarla, bu damlaların düştüğü noktalar arasında bir bağlantı kurulabilir mi? Yağış formülize edilebilir mi?  
Bunun üzerine rastgele sayılar üzerine bir araştırma yaptım ve ne kadar güvensiz olduklarını öğrendim. Testlerde yeterince çeşitli olduğunu düşündüğümüz ama bir yerden sonra tekrar eden sayılar kümesi ile güvenliği sağlamaya çalışıyoruz. Farklılık yaratmak için kullanıldığında sorun olmayabilir ama güvenlik amaçlı kullanıldığında dayanaksız bir araçtır rastgelelik. Güvensizliğinin sebebi tahmin edilebilirliğidir.

Normalden biraz daha güvenli olması için tohumunda zaman faktörünü de kullanıyorlar ama bu da tavsiye edilmiyor. Henüz .NET kütüphanesinde güzel bir örnek bulamadım ama Java&#8217;da güvenli rastgelelik için ayrı bir class mevcut.

<pre class="brush: java; title: ; notranslate" title="">public static int generateRandom(int maximumValue) {
	SecureRandom ranGen = new SecureRandom();
	return ranGen.nextInt(maximumValue);
}
</pre>