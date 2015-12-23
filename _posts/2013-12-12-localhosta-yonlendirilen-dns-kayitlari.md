---
title: 'Localhost&#8217;a yönlendirilen DNS kayıtları'
author: Olcay Bayram
layout: post
permalink: /2013/12/12/localhosta-yonlendirilen-dns-kayitlari/
categories:
  - Sistem
tags:
  - 127.0.0.1
  - dns
  - localhost
---
Web sitesi projeleri geliştirirken elbet bir şekilde **hosts** dosyasında değişiklik yapmamız gerekmiştir. Özellikle subdomain çalışmalarında ihtiyacımız olmaktadır.  
**C:\Windows\System32\drivers\etc** klasöründe bulunan **hosts** dosyası içerisinde hangi adreslerin, hangi iplere yönlendirileceğini tanımlayabiliyoruz.  
Kısaca yerel DNS&#8217;imiz diyebiliriz.

Hosts dosyasında fazla değişiklik yapmak istemezsek. Aşağıda verilen üç adresi kullanabiliriz, bunlar doğrudan 127.0.0.1&#8217;e yönlendirilmiş sayfalardır. Eğer IIS veya Apache gibi bir sunucunuz varsa veya bir web servisiniz yayında ise doğrudan bu adresler üzerinden ulaşabilirsiniz. İstediğiniz subdomaini veya portu yazabilirsiniz.

  * http://127-0-0-1.org.uk</p> 
      * http://test1.127-0-0-1.org.uk 
      * http://127-0-0-1.org.uk:8081 
      * http://127-0-0-1.org.uk/Categories/10 
  * http://vcap.me/ 
  * http://lacolhost.com/