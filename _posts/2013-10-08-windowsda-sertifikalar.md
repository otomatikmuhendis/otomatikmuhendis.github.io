---
title: 'Windows&#8217;da Sertifikalar'
author: Olcay Bayram
layout: post
permalink: /2013/10/08/windowsda-sertifikalar/
categories:
  - Sistem
  - Yazılım
tags:
  - apple
  - console
  - developer
  - mmc
  - sertifika
  - snap-in
  - windows
---
Yazılımlarımızı veya verilerimizi koruma altına alabilmek için sertifikalara ihtiyaç duyarız. Yazılım geliştiriciler olarak, üreticilerin bizlere sunduğu SDK&#8217;larla ürettiğimiz uygulamaları yayınlamak için yine bu sertifikalardan faydalanırız. Bunlar kapalı kutular olduğu için yükleme sırasında tatsız anlar yaşanabilir. Ben iki farklı hata ile karşılaştım ve bunların çözümü aşağıdaki şekildedir;

Eğer **Keyset does not exist.** hatası veriyorsa ve gerekli bilgileri yazdığınızdan eminseniz, yetkilerle ilgili bir sorun yaşıyor olabilirsiniz. O sertifikayı kullanan uygulamanızı çalıştırdığınız kullanıcının yetkilerini kontrol ediniz. Yetkilerin sebep olup olmadığını test etmek isterseniz IIS üzerinde Application Pool&#8217;da uygulamanıza Local System kullanıcısı ile giriş yetkisi verin. Eğer sorun yetkilerde ise bu şekilde çalışması gerekecektir.

Diğer hata ise **Certificate could not be found. Please ensure the thumbprint and cert location values are correct.** şeklindedir. Bu hata kullandığınız kütüphaneye göre farklılık gösterebilir. Sonuç olarak ulaşılamayan bir sertifika söz konusudur. Eğer sertifikaları doğru şekilde yüklediyseniz ve bu hatayı alıyorsanız o zaman yanlış yere yüklemişsinizdir. Doğru konuma taşımak için aşağıdaki adımları takip edebilirsiniz;

<!--more-->

1. **Başlat**, **Çalıştır**, **mmc** yazın ve **Tamam**&#8216;a tıklayın.  
2. **File** menüsünden **Add/Remove Snap-in** ve **Add**&#8216;e tıklayın.  
3. **Snap-in** altında **Certificates** seçip **My User Account** olarak ekleyin.  
4. Aynı şekilde tekrar ekleyin ama bu sefer **Computer Account** seçin.  
5. Ekleme penceresini kapatın. Artık sol tarafta sertifikalarınızı görebilirsiniz.  
6. **Current User**&#8216;daki sertifikalarınızı **Local Computer**&#8216;a sürükle bırak ile taşıyabilirsiniz.  
7. İşleminiz bittikten sonra bu çalışma ortamını daha sonra kullanmak için kaydedebilirsiniz.

Pencerenin aşağıdaki şekilde olması gerekir;

[![Windows Sertifika](/wp-content/uploads/2013/10/mmc.png)][1]

 [1]: http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/10/mmc.png