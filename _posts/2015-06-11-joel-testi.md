---
title: Joel Testi
author: Olcay Bayram
layout: post
permalink: /2015/06/11/joel-testi/
categories:
  - Yazılım
tags:
  - bug
  - continuos integration
  - github
  - iş görüşmesi
  - jira
  - kariyer
  - octopus
  - pomodor
  - teamcity
  - test
---
<a href="http://turkish.joelonsoftware.com/Articles/TheJoelTest.html" target="_blank">Joel testi</a>, 2000 yılında <a href="http://www.joelonsoftware.com/" target="_blank">Joel Spolsky</a> tarafından bilişim literatürüne kazandırılmış 12 soruluk bir testtir. Bu test yazılım ekiplerinin kalitesini belirlemek amacıyla kullanılır. Ben, <a href="http://careers.stackoverflow.com/" target="_blank">stackoverflow kariyer</a> sayfasında öğrendim ve bir kaç senelik tecrübemle bu soruların günümüzde geçerliliği bir yana, bir yazılım ekibi ne yapmalıdır konusunda yol gösterici olduğunu söyleyebilirim.<figure id="attachment_197" style="width: 300px" class="wp-caption aligncenter">

<img class="size-medium wp-image-197" src="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/joelTest-300x166.jpg?fit=300%2C166" alt="stackoverflow kariyer sayfasında kullanımı" srcset="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/joelTest.jpg?resize=300%2C166 300w, http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/joelTest.jpg?w=545 545w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /><figcaption class="wp-caption-text">stackoverflow kariyer sayfasında kullanımı</figcaption></figure> 

Soruları ele almadan önce Joel Spolsky kimdir sorusunu cevaplayalım. Joel, 2000 yılında internet dünyasına adım atan, eski bir Microsoft çalışanı. 2008 yılında ortağı <a href="http://blog.codinghorror.com/" target="_blank">Jeff Atwood</a> ile birlikte <a href="http://stackoverflow.com/" target="_blank">stackoverflow</a>&#8216;u kuruyorlar. Stackoverflow her yazılımcının uğrak noktası olan bir soru&cevap sitesidir. Daha sonrasında <a href="http://stackexchange.com/" target="_blank">Stack Exchange</a> adında bir soru&cevap siteleri ağına dönüşüyor. Kısaca günümüz programcılığını hızlandıran bir etkisi olmuştur.

Şimdi sorular: Toplam 12 sorudan oluşmaktadır ve her biri de bir diğeri kadar önemlidir.

>   1. Kaynak kodu kontrol sistemi kullanıyor musunuz?
>   2. Tek bir adımda sistemi oluşturabiliyor musunuz?
>   3. Derleme (build) işlemi günlük yapılıyor mu?
>   4. Hata veritabanınız var mı?
>   5. Yeni bir kod yazmadan önce hataları düzeltiyor musunuz?
>   6. Güncel iş takviminiz var mı?
>   7. İş tanımlamalarınız var mı?
>   8. Programcıların sakin bir çalışma ortamı var mı?
>   9. Paranın alabileceği en iyi araçları kullanıyor musunuz?
>  10. Test elemanınız var mı?
>  11. İş görüşmelerinde adaylara kod yazdırılıyor mu?
>  12. Koridor kullanım testi yapıyor musunuz?

Şöyle bir göz gezdirdiğinizde, her &#8220;evet&#8221; cevabına 1 puan dersek şu an çalıştığınız firma sizce kaç puan alır? Alması gereken puan 12, eğer 11 alıyorsa hala umut var ama 10 veya daha düşük almışsa umarım fazla mesailer için ayrıca ücretlendiriliyorsunuzdur.

**1. Kaynak kodu kontrol sistemi kullanıyor musunuz?**

Cevabınız hayırsa Linus Torvalds&#8217;ın ihtiyacı doğrultusunda oluşturduğu Git&#8217;i ücretsiz repository&#8217;ler oluşturabileceğiniz [GitHub][1] üzerinden deneyebilirsiniz. Bu gözler network üzerinde aynı anda birden fazla kişinin çalıştığı dosya kaydedilirken, herkes işlemini sonlandırsın diye bellboy zili çalan teknoloji firmaları gördü.

**2. Tek bir adımda sistemi oluşturabiliyor musunuz?**

Müşteriden bir güncelleme isteği geldi, değişikliği yapmanız 3 dakika. Sonrasında bütün projeyi derlemeniz, ziplemeniz, güvenli bir ftp sunucusuna atmanız, müşteri tarafındaki temsilcinize zipi açıp, belirtilen klasöre kopyalamasını söylemeniz ve bunun yapılmasını beklemeniz ise 1 gün. Sistemler bağlantı noktalarında hata çıkarmaya meyillidirler. Bu kadar bağlantı da bir çok hataya sebebiyet verir. Hata olmasa bile zaman kaybı verimlilik çok fazla düşürecektir. Bunun önüne geçmek için [Octopus Deploy][2] gibi uygulama ve servislerinizi bilgisayarlara dağıtacak yazılımlar kullanabilirsiniz.

**3. Derleme (build) işlemi günlük yapılıyor mu?**

Çalıştığınız ortamlarda hatanın en kısa sürede fark edilmesi için günlük derleme işlemi yapılmalıdır. [TeamCity][3] gibi uygulamalar belirlenen aralıklarla projeleri derler ve hata durumunda uyarırlar böylece sürekli entegrasyonu sağlarlar.

**4. Hata veritabanınız var mı?**

Söz uçar, yazı kalır. Sistemdeki hataları bir yerde saklamalı ve onlar üzerinden çalışmalıyız. Bunun için GitHub üzerinde issues ([örnek bir proje][4]) sayfası kullanılabilir. Kurumsal firmalarda [Atlassian Jira][5] tercih edilmektedir.

**5. Yeni bir kod yazmadan önce hataları düzeltiyor musunuz?**

Bunu anlatacak basit bir grafik şu an çalıştığım firmanın duvarında da asılıdır.<figure id="attachment_199" style="width: 500px" class="wp-caption aligncenter">

[<img class="size-full wp-image-199" src="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/bug-time.gif?fit=500%2C354" alt="Hatanın bulunduğu zaman ile maliyet ilişkisi" data-recalc-dims="1" />][6]<figcaption class="wp-caption-text">Hatanın bulunduğu zaman ile maliyet ilişkisi</figcaption></figure> 

**6. Güncel iş takviminiz var mı?**

Hiç takvimi olmayan yerde de, takvimi değiştirilemez bir kanı olarak kabul eden yerde de çalıştım. İkisi de birbirinden kötüydü. Takvim olmalı ama işin ilerleyişine göre de güncellenebilmeli.

**7. İş tanımlamalarınız var mı?**

İşler belirli bir dokümantasyon üzerinden mi yürütülüyor? Eğer öyle değilse, analist, programcı, test uzmanı her kim olursa olsun herkes daha fazla yazmalı. Yazılmayan analizler daha sonradan farklı yorumlanabilir, rahatlıkla değiştirilebilir, hatırlanamaz, kod üzerinden ters mühendislik yapılmaya çalışılır. Bunların hepsi yazılım kalitesi açısından kabus senaryolarıdır.

**8. Programcıların sakin bir çalışma ortamı var mı?**

Günümüzde daha fazla kişiyi bir arada çalışmaya iten açık ofis tasarımları gürültüyü kontrolsüzce arttırmaktadır. Bir de yazılım ekibiyle pazarlama ekibi yan yana çalışıyorsa, bitmek bilmeyen telefon görüşmeleri yazılımcıların dikkatini dağıtacaktır.

Ben kişisel olarak masamda bile telefon bulunmasını istemiyorum. Son çalıştığım yerlerde masamda telefon bulunmuyordu. Konsantrasyonu kaybetmesi çok kolaydır, tekrar kazanması ise en 15 dakikanızı alır.  Son olarak <a href="http://pomodorotechnique.com/" target="_blank">Pomodor </a>tekniğini de araştırmalısınız. Çalışmanızı 25 dakikalık kesintisiz tam konsantrasyon halinde yapma disiplinini edinmenizi sağlıyor ve domates sayacınız çalışırken çalışma arkadaşlarınızın sizden uzak durma disiplini edinmelerini öğretiyor.  Bunu <a href="http://tomato-timer.com/" target="_blank">tomato timer</a> gibi bir web uygulaması ile de yapabilirsiniz ama bu çalışma arkadaşlarınız için ilgi çekici bir unsur olmayacaktır.

**9. Paranın alabileceği en iyi araçları kullanıyor musunuz?**

Kullandığımız araçlar verimliliği doğrudan etkilemektedir. Derleme zamanı uzadıkça yazılımcı sıkılır, sosyal medya sitelerinde dolaşmaya başlarlar bu da verimliliği düşürür. Bunlar sadece donanımla sınırlı değil, yazılım da çok önemlidir. Visual Studio yerine Not Defteri ile kod yazdırmak bir süre sonra yazılımcının başka işlere bakmasını sağlar. Veya benim de karşılaştığım bir yöntem ise az sayıda lisans almaktır. 100 yazılımcısı olan bir şirket test programından 1 tane lisans alır ve herkes kullanmak için sırasını beklemelidir.

İş veren için notum; Bu tür araçların masrafı, çıkarılan işin kalitesini ve verimliliği arttırarak kendini çok kısa zamanda amorti edecektir. Ayrıca yazılımcılar iyi araçlara anında tav olurlar. Çift monitör, yazılımcıları anında çift kılıçlı minik Drizz&#8217;t&#8217;lere dönüştürür.

**10. Test elemanınız var mı?**

Eğer test elemanınız yoksa hemen bir tane edinin. Kimi yazılımcılar test elemanının verimliliği düşürdüğünü düşünür ve kodları teste girmesin diye elinden geleni yaparlar. O tip yazılımcılardan olmayın. Yazılım hataya çok açıktır. Test elemanı sizin hatalarınızı buldukça, siz de bu hataları çözdükçe işin kalitesi artar.

**11. İş görüşmelerinde adaylara kod yazdırılıyor mu?**

İş ile alakalı, alakasız veya bulunca çok basitmiş dediğimiz ama bulana kadar ter döktüren sorulardan vazgeçilmeli. Bunun yerine az da olsa kod yazdırmak ve bunu birlikte çalışacağı kişilerle paylaşmak güzel bir uygulamadır.

**12. Koridor kullanım testi yapıyor musunuz?**

Yapılan en büyük hatalardan biri, arayüz tasarımını yazılımcıya bırakmaktır. Yazılımcı saatlerce üzerinde çalıştığı programda neyin ne işe yaradığını evinin yolundan bile daha iyi bilir hale gelmektedir ve bunu anlamayanlara ukalaca yanıtlar verebilir. Koridor testi ise hazırlanan arayüzü daha önce görmemiş birine yani koridordan geçen rastgele birine göstermekten ibarettir. Bir kaç kişiye gösterdikten sonra asıl zorluklar rahatlıkla tespit edilebilir.

&nbsp;

Siz de çalıştığınız şirketin puanını yorumlara yazarak burada paylaşabilirsiniz. Puanlar iyi ise güzel bir reklam olacaktır, kötüyse birilerinin bir şeyler yapması gerekecektir. Umarım hepimiz 12 tam puan alan firmalarda şaheserler çıkarırız.

 [1]: https://github.com/
 [2]: https://octopusdeploy.com/
 [3]: https://www.jetbrains.com/teamcity/
 [4]: https://github.com/StackExchange/dapper-dot-net/issues
 [5]: https://www.atlassian.com/software/jira
 [6]: http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/bug-time.gif