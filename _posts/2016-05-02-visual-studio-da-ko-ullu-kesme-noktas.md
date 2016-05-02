---
author: Olcay Bayram
layout: post
subtitle: null
image: /img/conditionsDialog.png
categories: Yazılım
tags: 
  - visual studio
  - tips
published: true
title: "Visual Studio'da Koşullu Kesme Noktası"
---

Kesme noktası koşulu (**breakpoint condition**), ayıklayıcının (**debugger**) kesme noktasına (**breakpoint**) ulaştığı anda değerlendirdiği ifadedir. Koşulun şartları yerine gelirse ayıklayıcı bu noktada durur.

Koşulda yazım yanlışı varsa, anında uyarı mesajı görüntülenir. Yazım geçerliyse ama semantik olarak hata varsa kesme noktasına ilk temasta uyarı görünür. Her iki durumda da ayıklayıcı yürütmeyi durdurur. Koşul geçerli ve sonucu **_false_** olarak değerlendiriliyorsa kesme noktası atlanır.

Kısaca **_for_** döngüsünde belirli bir kayıt için döngünün içine girmek istiyorsak, **_url == "otomatikmuhendis.com"_** gibi bir koşul yazabiliriz.

![conditions.png]({{site.baseurl}}/img/conditions.png)


### Koşullu kesme noktası nasıl eklenir:

1. Öncelikle her zamanki gibi bir kesme noktası oluşturun.

* Kırmızı kesme noktası üzerinde sağ tuş tıklayın. Açılan menüde **Conditions...** seçeğini tıklayın.

* Açılan pencerede geçerli bir koşul girin.

* **Is true** seçilirse koşul sağlandığında durur, **Has changed** seçili ise koşulun değeri değiştiğinde durur.

Ekran görüntüsü, Microsoft Visual Studio Community 2015 versiyonundandır. Diğer versiyonlarda farklılık göstermekle beraber. Express versiyonlarda yer almamaktadır.