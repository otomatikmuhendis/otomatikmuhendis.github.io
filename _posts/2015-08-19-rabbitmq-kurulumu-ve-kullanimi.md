---
title: RabbitMQ Kurulumu ve Kullanımı
author: Olcay Bayram
layout: post
permalink: /2015/08/19/rabbitmq-kurulumu-ve-kullanimi/
image: "/img/rabbitmq.png"
categories:
  - Yazılım
tags:
  - erlang
  - masstransit
  - mesaj kuyruğu
  - message queue
  - msmq
  - rabbitmq
---
RabbitMQ, Unix üzerine Erlang ile yazılmış mesaj kuyruğu sistemidir. MSMQ'dan performans olarak daha iyidir ve içerdiği &#8220;Publish/Subscribe&#8221; ve &#8220;Routing&#8221; özellikleri sayesinde AMQP (Gelişmiş Mesaj Kuyruğu Protokolü) tanımına oldukça yakındır.

**Kurulumu**

Öncelikle Erlang framework'ü makinanızda yüklü olmalı. Uygun versiyonu <a href="http://www.erlang.org/download.html" target="_blank">Erlang/OTP indirme sayfası</a>ndan bulabilirsiniz. Erlang kurmadığınız takdirde aşağıdaki gibi bir uyarıyla karşılaşacaksınız.

![Erlang bulunamadı hatası](/wp-content/uploads/2014/11/ErlangNotFound.jpg)

Daha sonra RabbitMQ'yu <a href="http://www.rabbitmq.com/download.html" target="_blank">şu sayfa</a>dan indirerek kurabilirsiniz.

<!--more-->

Programınız ile RabbitMQ bağlantısını kurabilmek için, isteğinize göre client kütüphanesi kurabilirsiniz. <a href="https://www.rabbitmq.com/dotnet.html" target="_blank">Bu sayfa</a>dan RabbitMQ'nun kendi kütüphanesini veya <a href="http://masstransit.readthedocs.org/en/latest/installation/install.html" target="_blank">şuradan</a> MassTransit service bus'ını indirebilirsiniz.


**Kullanımı**

![Başlat menüsünde RabbitMQ görünümü](/wp-content/uploads/2014/11/StartMenu.jpg)

Kurulum başarıyla gerçekleştiyse artık bu servisi kullanmamızı kolaylaştıracak arayüzü de kurabiliriz. RabbitMQ Management eklentisini aktifleştirmemiz gerekiyor. Bunun için Başlat menüsündeki RabbitMQ Server klasörü içerisinde RabbitMQ Command Prompt yönetici olarak açılır. Aşağıdaki kod çalıştırılır.

    rabbitmq-plugins enable rabbitmq_management

Bu eklenti bağımlı eklentilerle birlikte aktif edilir. Aşağıdaki Komut İstemi penceresinden de görebileceğiniz gibi benim kurduğum sırada toplam 6 eklenti aktif edilmiş görülüyor.

Sonrasında değişikliklerin servise de yansıması için servisi durdurup başlatmamız gerekir. Bunun için de aşağıdaki komutları sırasıyla çalıştırırız.

    rabbitmq-service.bat stop
    rabbitmq-service.bat install
    rabbitmq-service.bat start


![RabbitMQ Komutlar](/wp-content/uploads/2014/11/RabbitMQEnablePluginsStopStart.jpg)

Şimdi <a href="http://localhost:15672" data-proofer-ignore>http://localhost:15672</a> adresine girerek RabbitMQ portalini kurcalayabiliriz. Öntanımlı kullanıcı adı `guest` ve şifre de yine `guest`&#8216;dir.

> **Önemli!** Guest kullanıcısı sadece localhost adresinde çalışır. Dışarıdan erişim için yeni bir kullanıcı tanımlanmalıdır.

Yeni bir kullanıcı tanımlamak için RabbitMQ Command Prompt üzerinde aşağıdaki komutları çalıştırabilirsiniz. Bu komutlar R1spencere şifresiyle admin yetkilerine sahip root kullanıcısını oluşturur.

    rabbitmqctl add_user root R1spencere
    rabbitmqctl set_user_tags root administrator
    rabbitmqctl set_permissions -p / root ".*" ".*" ".*"

Servise dışarıdan erişim için **5672** nolu portun dışarıya açık olması gerekmektedir.

Ayrıca kullanım yöntemleri konusunda örneklendirmeli bilgiyi [Tutorials][1] sayfasından bulabilirsiniz.

Hata Notu: Aşağıdaki hatalar ile zaman zaman karşılaşıyordum bunun çözümünü [bu site][2]deki yönteme ek olarak `C:\Users\[username]\AppData\Roaming\RabbitMQ` dizinini de silerek buldum.

    Error: The RabbitMQ service terminated with the following error: The process terminated unexpectedly.
    Error: RabbitMQ: Erlang machine stopped instantly (distribution name conflict?). The service is not restarted as OnFail is set to ignore.
    Warning: RabbitMQ: Erlang machine voluntarily stopped. The service is not restarted as OnFail is set to ignore.

 [1]: https://www.rabbitmq.com/getstarted.html
 [2]: http://plus-odin.blogspot.co.il/2013/04/erlang-machine-stopped-instantly-code.html