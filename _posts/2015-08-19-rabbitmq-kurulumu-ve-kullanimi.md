---
title: RabbitMQ Kurulumu ve Kullanımı
author: Olcay Bayram
layout: post
permalink: /2015/08/19/rabbitmq-kurulumu-ve-kullanimi/
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
RabbitMQ, Unix üzerine Erlang ile yazılmış mesaj kuyruğu sistemidir. MSMQ&#8217;dan performans olarak daha iyidir ve içerdiği &#8220;Publish/Subscribe&#8221; ve &#8220;Routing&#8221; özellikleri sayesinde AMQP (Gelişmiş Mesaj Kuyruğu Protokolü) tanımına oldukça yakındır.

**Kurulumu**

Öncelikle Erlang framework&#8217;ü makinanızda yüklü olmalı. Uygun versiyonu <a href="http://www.erlang.org/download.html" target="_blank">Erlang/OTP indirme sayfası</a>ndan bulabilirsiniz. Erlang kurmadığınız takdirde aşağıdaki gibi bir uyarıyla karşılaşacaksınız. <img class="aligncenter size-full wp-image-158" src="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/11/ErlangNotFound.jpg?fit=415%2C168" alt="ErlangNotFound" srcset="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/11/ErlangNotFound.jpg?resize=300%2C121 300w, http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/11/ErlangNotFound.jpg?w=415 415w" sizes="(max-width: 415px) 100vw, 415px" data-recalc-dims="1" />

Daha sonra RabbitMQ&#8217;yu <a href="http://www.rabbitmq.com/download.html" target="_blank">şu sayfa</a>dan indirerek kurabilirsiniz.

Programınız ile RabbitMQ bağlantısını kurabilmek için, isteğinize göre client kütüphanesi kurabilirsiniz. <a href="https://www.rabbitmq.com/dotnet.html" target="_blank">Bu sayfa</a>dan RabbitMQ&#8217;nun kendi kütüphanesini veya <a href="http://masstransit.readthedocs.org/en/latest/installation/install.html" target="_blank">şuradan</a> MassTransit service bus&#8217;ını indirebilirsiniz.

<!--more-->

**Kullanımı**

<img class=" size-full wp-image-161 alignleft" src="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/11/StartMenu.jpg?fit=252%2C382" alt="StartMenu" data-recalc-dims="1" />Kurulum başarıyla gerçekleştiyse artık bu servisi kullanmamızı kolaylaştıracak arayüzü de kurabiliriz. RabbitMQ Management eklentisini aktifleştirmemiz gerekiyor. Bunun için Başlat menüsündeki RabbitMQ Server klasörü içerisinde RabbitMQ Command Prompt yönetici olarak açılır. Aşağıdaki kod çalıştırılır.

    rabbitmq-plugins enable rabbitmq_management

Bu eklenti bağımlı eklentilerle birlikte aktif edilir. Aşağıdaki Komut İstemi penceresinden de görebileceğiniz gibi benim kurduğum sırada toplam 6 eklenti aktif edilmiş görülüyor.

Sonrasında değişikliklerin servise de yansıması için servisi durdurup başlatmamız gerekir. Bunun için de aşağıdaki komutları sırasıyla çalıştırırız.

    rabbitmq-service.bat stop
    rabbitmq-service.bat install
    rabbitmq-service.bat start

[<img class="aligncenter size-full wp-image-160" src="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/11/RabbitMQEnablePluginsStopStart.jpg?fit=604%2C301" alt="RabbitMQEnablePluginsStopStart" srcset="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/11/RabbitMQEnablePluginsStopStart.jpg?resize=300%2C149 300w, http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/11/RabbitMQEnablePluginsStopStart.jpg?w=671 671w" sizes="(max-width: 671px) 100vw, 671px" data-recalc-dims="1" />][1]

Şimdi <http://localhost:15672/> adresine girerek RabbitMQ portalini kurcalayabiliriz. Öntanımlı kullanıcı adı `guest` ve şifre de yine `guest`&#8216;dir.

> **Önemli!** Guest kullanıcısı sadece localhost adresinde çalışır. Dışarıdan erişim için yeni bir kullanıcı tanımlanmalıdır.

Yeni bir kullanıcı tanımlamak için RabbitMQ Command Prompt üzerinde aşağıdaki komutları çalıştırabilirsiniz. Bu komutlar R1spencere şifresiyle admin yetkilerine sahip root kullanıcısını oluşturur.

    rabbitmqctl add_user root R1spencere
    rabbitmqctl set_user_tags root administrator
    rabbitmqctl set_permissions -p / root ".*" ".*" ".*"

Servise dışarıdan erişim için **5672** nolu portun dışarıya açık olması gerekmektedir.

Ayrıca kullanım yöntemleri konusunda örneklendirmeli bilgiyi [Tutorials][2] sayfasından bulabilirsiniz.

Hata Notu: Aşağıdaki hatalar ile zaman zaman karşılaşıyordum bunun çözümünü [bu site][3]deki yönteme ek olarak `C:\Users\[username]\AppData\Roaming\RabbitMQ` dizinini de silerek buldum.

    Error: The RabbitMQ service terminated with the following error: The process terminated unexpectedly.
    Error: RabbitMQ: Erlang machine stopped instantly (distribution name conflict?). The service is not restarted as OnFail is set to ignore.
    Warning: RabbitMQ: Erlang machine voluntarily stopped. The service is not restarted as OnFail is set to ignore.

 [1]: http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2014/11/RabbitMQEnablePluginsStopStart.jpg
 [2]: https://www.rabbitmq.com/getstarted.html
 [3]: http://plus-odin.blogspot.co.il/2013/04/erlang-machine-stopped-instantly-code.html