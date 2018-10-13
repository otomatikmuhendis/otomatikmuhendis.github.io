---
author: Olcay Bayram
layout: post
categories: Yazılım
published: true
title: Facebook Nasil Hacklendi?
image: /img/FacebookLDataLek.PNG
tags:
  - security
subtitle: 2018 Eylül
---
Sosyal medya devi Facebook, 2018 yılının Eylül ayında, son bir senedir kullanıcı bilgilerini [sızdırdıklarını fark etti](https://newsroom.fb.com/news/2018/09/security-update/). Basit ama bulunması zor bir yazılım hatasından faydalanan hacker'lar istedikleri kullanıcılar adına sisteme login olarak tüm bilgileri alabiliyorlardı.

Şimdi olayın ayrıntılarında açığın nasıl çalıştığını ve kullanıcı olarak ne yapmamız gerektiğini inceleyelim.

## Açık

- 2017 yılı Haziran ayında yayınlanan bir güncellemede Facebook'da paylaşımlarımızı yazdığımız kutuda, yeni bir video yükleyici kullanılmaya başlandı.
İkinci adım için şunu bilmeliyiz; Facebook'un sunduğu "Başkası Gibi Görüntüle" özelliği, profilinizi başkalarının gözünden görmenizi sağlayan, bilgilerinizin kişilere göre ne kadarının açık ne kadarının gizli olduğunu anlamanızı sağlayan kullanışlı bir özelliktir. Şu an erişip ekran görüntüsü almak istedim ama yerinde yoktu. Sanırım durumu düzeltmekten kasıtları bu özelliği tamamı ile kapatmakmış.
- Başkası adına profilinizi görüntülediğinizde, profilinizin işlevsiz olması beklenir çünkü bir işlem yaptığınızda kimin adına yaptığınız kafa karıştırıcıdır. Ama gel gör ki bu yeni video yükleyici işlevselliğini korumaktadır ve yüklediğiniz videolar o sırada adına profilinizi görüntülediğiniz kişi tarafından yüklenmiş gibi sisteme kayıt edilir.
- Bunu sağlamak için de tembel programcının hatası otomatik giriş mekanizması devreye girer. Hackerlara kalan ise bunu taklit etmektir.

## Ne yapmalıyız?

Şu an Facebook da ne yapacağını planlamaktadır. Kimlerin etkilendiği raporunu bizlere sunacaklarını bildirdiler ama ondan önce bilgi alıp öğrenmek istiyorsanız [Facebook Yardım Sayfası](https://www.facebook.com/help/2687943754764396)'na girerek hesabınızın etkilenip etkilenmediğini görebilirsiniz. Kendi hesabımın etkilenmediğini görebiliyorum.

Facebook aslında yakın zamanda bu bilgileri istekli olarak paylaştığını da kabul etmişti ama yine bizim kullanıcı olarak yapmamız gereken [Facebook Güvenlik Ayarları](https://www.facebook.com/settings?tab=security)mızı düzenli olarak kontrol etmek ve neyi kiminle paylaştığımıza dikkat etmektir.

