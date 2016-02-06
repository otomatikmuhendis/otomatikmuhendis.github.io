---
title: Bağlantı Cümleciği Elde Etmenin Kolay Yolu
author: Olcay Bayram
layout: post
permalink: /2013/09/04/baglanti-cumlecigi-elde-etmenin-kolay-yolu/
categories:
  - Veritabanı
tags:
  - bağlantı
  - connection
  - connection string
  - data link
  - database
  - db
  - OLE
  - sql
  - string
  - udl
  - veritabanı
---
Bağlantı cümlecikleri (connection strings) veritabanına erişimimizi sağlarlar. Bu cümleler içerisinde veritabanı adresi, adı ve güvenlik bilgilerini barındırırlar. Yeni bir projeye başlarken nasıl bir bağlantı cümleciği yazacağımızı bilemediğimiz anlar olur. [Connection Strings][1] sitesi neredeyse her ihtimale karşı oluşturulmuş birer bağlantı cümleciği barındırmaktadır. Aradığınız cümleyi bulamadığınızda ise daha farklı bir yöntemle bunu üretebilirsiniz.

Öncelikle istediğiniz bir klasörde `.udl` uzantılı bir dosya oluşturun. Eğer dosya uzantılarını göremiyorsanız (ki görmelisiniz, bir yazılımcı olarak dosya uzantılarına aşina olmalısınız), notdefterini açın ve boş dosyayı `herHengiBirIsim.udl` adıyla kaydedin.

Artık elinizde bir Microsoft Data Link dosyası var. Bunu açtığınızda OLE DB Core Services ile açılır ve aşağıdaki gibi bir arayüzle karşılaşırsınız.

[<img src="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/09/udl.png?fit=604%2C373" alt="Microsoft Data Link" class="aligncenter size-full wp-image-54" srcset="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/09/udl.png?resize=300%2C185 300w, http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/09/udl.png?w=765 765w" sizes="(max-width: 765px) 100vw, 765px" data-recalc-dims="1" />][2]

Öncelikle bağlanmak istediğiniz sunucu tipini seçin ve sonraki ekranda gerekli yerleri doldurun. Ben burada localhost için &#8220;.&#8221; girdim. Güvenlik olarak Windows entegre güvenliğini seçtim ve bağlantı sağlandığı için sunucuda yer alan veritabanları listelendi. Orchard için hazırladığım &#8220;orchard_dev&#8221; veritabanını seçtim.

&#8220;Test Connection&#8221; butonunu tıkladığınızda başarılı mesajını alıyorsanız artık OK diyerek çıkabilirsiniz. Dosyanızı notdefteri ile açtığınızda içerisinde aşağıdaki bağlantı cümleciğini görebilirsiniz.

`<br />
[oledb]<br />
; Everything after this line is an OLE DB initstring<br />
Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=orchard_dev;Data Source=.<br />
`

 [1]: http://www.connectionstrings.com/
 [2]: http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/09/udl.png