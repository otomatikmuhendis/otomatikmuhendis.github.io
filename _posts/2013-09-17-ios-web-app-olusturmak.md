---
title: iOS Web App Oluşturmak
author: Olcay Bayram
layout: post
permalink: /2013/09/17/ios-web-app-olusturmak/
categories:
  - Yazılım
tags:
  - application
  - html5
  - ios
  - ipad
  - iphone
  - ipod
  - uygulama
  - viewport
  - web app
---
Çalışmalarımızda çeşitlilik hız kesmeden devam ediyor. Şimdi de oluşturduğumuz HTML5 web sitesini, bir kaç ufak değişiklikle iOS Web App haline çeviriyoruz. Görüntüde native app&#8217;e çok yakın bir sonuç elde ediyoruz. Bunu sağlayabilmek için sitenin meta tagları arasına şu bilgileri girmemiz gerekiyor:

Öncelikle görüntü alanımızı ayarlayalım. Aşağıdaki `viewport` metasında ekran genişliği ve yakınlaştırma oranı sabitlenir. Bu şekilde siteniz iOS uygulaması gibi daha sabit bir görüntü elde edecektir. Diğer metalarda ise sitenin web app olduğunu yani site içerisinde dolaşmak için Safari&#8217;nin işlevlerine ihtiyaç kalmadığını gösterir. Son satırda ise tepedeki durum çubuğunun olabilecek en dar halde kalması sağlanır.

<pre class="brush: xml; title: ; notranslate" title="">&lt;meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" /&gt;
&lt;meta name="apple-mobile-web-app-capable" content="yes" /&gt;
&lt;meta name="apple-mobile-web-app-status-bar-style" content="black" /&gt;
</pre>

Sitenin görüntüsünü tamamladıktan sonra şimdi de dışarıdaki ikon ve açılış ekranına gelelim. Siteniz ana ekrana eklendiğinde nasıl bir ikonla görüntülenecek ve açılırken sitenin parça parça yüklenmesi yerine hangi görsel gösterilecek. Bunların cevapları ise aşağıdaki metalarda yazılmıştır. Buradaki sıkıntı her cihaz için ayrı çözünürlükte görselin oluşturulmasıdır. Eğer cihazın beklediği boyutlarda görsel mevcut değilse işe yaramayacaktır.

<pre class="brush: xml; title: ; notranslate" title="">&lt;!-- İkonlar --&gt;
&lt;link rel="apple-touch-icon" href="touch-icon-iphone.png" /&gt;
&lt;link rel="apple-touch-icon" sizes="72x72" href="touch-icon-ipad.png" /&gt;
&lt;link rel="apple-touch-icon" sizes="114x114" href="touch-icon-iphone-retina.png" /&gt;
&lt;link rel="apple-touch-icon" sizes="144x144" href="touch-icon-ipad-retina.png" /&gt;

&lt;!-- Açılış ekranı görseli --&gt;
&lt;!-- iPhone --&gt;
&lt;link rel="apple-touch-startup-image"
      media="(device-width: 320px)"
      href="apple-touch-startup-image-320x460.png"&gt;
&lt;!-- iPhone (Retina) --&gt;
&lt;link rel="apple-touch-startup-image"
      media="(device-width: 320px)
         and (-webkit-device-pixel-ratio: 2)"
      href="apple-touch-startup-image-640x920.png"&gt;

&lt;!-- iPad (portrait) --&gt;
&lt;link rel="apple-touch-startup-image"
      media="(device-width: 768px)
         and (orientation: portrait)"
      href="apple-touch-startup-image-768x1004.png"&gt;
&lt;!-- iPad (landscape) --&gt;
&lt;link rel="apple-touch-startup-image"
      media="(device-width: 768px)
         and (orientation: landscape)"
      href="apple-touch-startup-image-748x1024.png"&gt;
&lt;!-- iPad (Retina, portrait) --&gt;
&lt;link rel="apple-touch-startup-image"
      media="(device-width: 768px)
         and (orientation: portrait)
         and (-webkit-device-pixel-ratio: 2)"
      href="apple-touch-startup-image-1536x2008.png"&gt;
&lt;!-- iPad (Retina, landscape) --&gt;
&lt;link rel="apple-touch-startup-image"
      media="(device-width: 768px)
         and (orientation: landscape)
         and (-webkit-device-pixel-ratio: 2)"
      href="apple-touch-startup-image-1496x2048.png"&gt;
</pre>

Bunları tamamladıktan iOS sistemi olan (iPod Touch, iPhone, iPad) cihazınızda Safari ile siteyi açabilir ve yukarıdaki &#8220;kutudan çıkan ok&#8221; butonuna tıklayarak &#8220;Ana Ekrana Ekle&#8221; butonu ile ana ekranda uygulama kısayolu oluşturabilirsiniz. Doğru uyguladıysanız yeni ikonu ve açtığınızda açılış görselini görebilirsiniz. Uygulama tam ekran olarak açılacaktır.

Önceden mobil uygulama olarak planlanmamış sitelerde tıklanan linkler sonucu Safari&#8217;nin açılması gibi bir hata oluşuyor. Sistem uygulamada tıklanan linkleri Safari ile açması gereken web sayfaları olarak görüyor. Bunu engellemek için ya baştan sitenin mimarisini AJAX üzerine kurarak sadece değişmesi gereken bölgenin dinamik olduğu geri kalanının statik olduğu bir site yapabilirsiniz yada aşağıdaki javascript kodu ile sayfa üzerindeki bütün linkleri değiştirerek yapabilirsiniz. AJAX kullanımını tavsiye ederim.

<pre class="brush: jscript; title: ; notranslate" title="">var a = document.getElementsByTagName("a");
for (var i = 0; i &lt; a.length; i++) {
	a[i].onclick = function () {
		window.location = this.getAttribute("href");
		return false
	}
}
</pre>

Dipnot: 2009 yılında Apple Developer seminerinde bunları öğrenmiştim ama hiç uygulamadığım için hatırlayamadım. Artık unutmam.

Kaynak: [https://developer.apple.com/&#8230;/ConfiguringWebApplications.html][1]

 [1]: https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html