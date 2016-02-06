---
title: Barkod veya Karekod Hakkında Türlü Türlü Bilgiler
author: Olcay Bayram
layout: post
permalink: /2013/09/01/barkod-veya-karekod-hakkinda-turlu-turlu-bilgiler/
categories:
  - Yazılım
tags:
  - android
  - barcode
  - barkod
  - 'C#'
  - html5
  - ios
  - iphone
  - karekod
  - MVC
  - okuyucu
  - qrcode
  - qrkod
  - Zxing
---
ing. Barcode and QRcode

Bir proje gereği QR code üzerine bir çalışma yapmam gerekiyordu.  
Bu nedenle bir kaç araştırma yaptım ve bunları aşağıdaki şekilde derledim.

<img src="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/09/chart.png?fit=250%2C250" alt="qr sample" class="alignleft size-full wp-image-37" srcset="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/09/chart.png?resize=150%2C150 150w, http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/09/chart.png?w=250 250w" sizes="(max-width: 250px) 100vw, 250px" data-recalc-dims="1" />Öncelikle bir kaç kriter belirledim;  
-HTML5 web uygulaması olacak.  
-iOS ortamında çalışacak.  
-QR code okunurken kullanıcıya zorluk çıkarmayacak.

Başlıkta barcode yazmamın sebebi aynı uygulamanın barcode için de kullanılabiliyor olmasıdır.

QRCode Oluşturulması; Bunun için aşağıdaki kod parçalarını gerekli yerlere yazmalısınız. Yorum satırı olarak nerelerde olması gerektiği belirtilmiştir.

<pre class="brush: csharp; title: ; notranslate" title="">//Controller için referans kısmı
using MessagingToolkit.QRCode.Codec;

//Controller kısmı
public ActionResult QRGen(string input)
{
	string toenc = input;

	MessagingToolkit.QRCode.Codec.QRCodeEncoder qe = new MessagingToolkit.QRCode.Codec.QRCodeEncoder();

	qe.QRCodeEncodeMode = QRCodeEncoder.ENCODE_MODE.BYTE;

	//Low - Bunu düşük tutarsak bize daha fazla yer açılacaktır.
	qe.QRCodeErrorCorrect = QRCodeEncoder.ERROR_CORRECTION.L;

	//Benim sakladığım veriyi daha aşağısı kurtarmadı
	qe.QRCodeVersion = 5;

	System.Drawing.Bitmap bm = qe.Encode(toenc);

	using (var streak = new MemoryStream())
	{
		bm.Save(streak, ImageFormat.Png);
		return File(streak.ToArray(), "image/png");
	}
}

//View kısmı
@Url.Action("QRGen", "ControllerAdı", new { input = "Kodun taşıyacağı çok gizli bilgi" })
</pre>

Şimdi sıra geldi okunmasına;

İşte bu noktada çeşit bollaşıyor. İstemediğiniz kadar çok barkod veya karekod uygulaması mevcut.  
İster bunlardan yardım alabilirsiniz. İsterseniz kendiniz yazarsınız.

Uygulamaları üçe ayırabiliriz;

&#8211; Native (yerli) uygulama üreterek cihaz kamerasına doğrudan erişenler  
&#8211; HTML5 uygulaması ile bir yerli uygulamayı tetikleyip doğrudan veriyi alan  
&#8211; HTML5 uygulaması ile cihazın kamerasından alınan fotoğrafı işleyen

## Yerli Uygulama Yöntemi

İlk tipteki uygulamalara örnek ZXing takımının ürettiği iOS&#8217;da <a href="https://itunes.apple.com/us/app/barcodes-scanner/id417257150?mt=8" target="_blank">Barcodes Scanner</a> veya Android&#8217;de <a href="https://play.google.com/store/apps/details?id=com.google.zxing.client.android&hl=tr" target="_blank">Barcode Scanner</a> örnek gösterilebilir. Bu tip uygulamalar için Adobe <a href="http://phonegap.com/" target="_blank">PhoneGap</a> çatısı tercih edilebilir. HTML, CSS ve JavaScript dosyalarınızı bir manifestoyla birleştirip istediğiniz platformda çalışacak bir uygulamaya çevirmektedir. Mobil dünyada Flash ile var olamayan Adobe&#8217;un etkili hamlelerinden biridir.

## Yerli Uygulamayı Tetikleyen HTML Uygulaması Yöntemi

İkinci tip uygulamalar ise basit bir javascript kodu ile yerli uygulamanın tetiklenmesi esasına dayanır. Az önce bahsettiğimiz Barcodes Scanner uygulaması aşağıdaki şekilde tetiklenerek, qrcode içerisindeki bilgiyi HTML sayfasına rahatlıkla geri gönderebilmektedir.

<pre class="brush: xml; title: ; notranslate" title="">&lt;!DOCTYPE html&gt;

&lt;html&gt;
&lt;head&gt;
    &lt;meta name="viewport" content="width=device-width" /&gt;
    &lt;title&gt;Barcode Reader&lt;/title&gt;

            &lt;SCRIPT type="text/javascript" &gt;
                function getHash() {
                        var hash = window.location.hash.substr(1);
                        document.getElementById('barcode').value = unescape(hash);
                }

                function getScan() {
                    var href = window.location.href;
                    var ptr = href.lastIndexOf("#");
                    if (ptr &gt; 0) {
                        href = href.substr(0, ptr);
                    }
                    window.location.href = "zxing://scan/?ret=" + escape(href + "#{CODE}");
                }
        &lt;/SCRIPT&gt;

&lt;/head&gt;
&lt;body onhashchange="getHash()"&gt;
    &lt;div&gt;
        &lt;input type="text" name="barcode" id="barcode" /&gt;
        &lt;input type="button" onClick="getScan();" value="Scan"&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

## HTML5 Uygulaması

Üçüncü ve son tipteki uygulamalar ise HTML sayfası üzerinden, cihazda çekilen bir fotoğrafı sunucuya yükler ve sunucuda bilgi işlenerek geri gönderilir.  
Bunu bir bilgisayarda yapıyor olsaydık bir HTML5 sayfası üzerinden bilgisayara bağlı bir web kamerasına erişir ve anlık görüntü ile barkodumuzu okurduk ama mobil cihazlarda henüz web uygulaması ile kameraya doğrudan erişim bulunmuyor. Öte yandan HTML5 ile gelen güzelliklerden bir tanesi yani eski bir bileşene gelen yeni bir özellik; input file nesnesinde ki ses ve görüntü eklentileri çok iyi düşünülmüş.

Bahsettiğim yenilik `capture` özelliği. Kullanımı için çeşitli yöntemler mevut ama ben w3.org&#8217;un dökümanını baz alacağım.

<pre class="brush: xml; title: ; notranslate" title="">&lt;input type="file" name="image" accept="image/*" capture&gt;
&lt;input type="file" name="image" accept="video/*" capture&gt;
&lt;input type="file" name="image" accept="audio/*" capture&gt;
</pre>

Bu güzelliklerden biri olan `image capture`&#8216;dan şöyle faydalanabiliriz;

<pre class="brush: csharp; title: ; notranslate" title="">//View kısmı
@using (Html.BeginForm("Index", "Home", FormMethod.Post, new { enctype = "multipart/form-data" }))
{
    &lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;
            //Güzellik işte bu noktada göze çarpıyor
            &lt;input name="file" id="file" type="file"  accept="image/*" capture/&gt;
        &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;
        &lt;input type="submit" id="btnQuery" class="button" title="Query" value="Scan" /&gt;
            &lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
}


//Controller içinde referans kısmı
using ZXing;

//Controller içinde metod kısmı
[HttpPost]
public ActionResult Index(HttpPostedFileBase file)
{
	if (file.ContentLength &gt; 0)
	{
		// Barcode okuyucu oluşturulur
		IBarcodeReader reader = new BarcodeReader();
		// Input file'dan gelen bitmap yüklenir
		var barcodeBitmap = (Bitmap)Bitmap.FromStream(file.InputStream);
		// Büyük boyutlarda okuyamadığı için fotoğrafın boyutu küçültülür
		var newImage = ScaleImage(barcodeBitmap, 400, 400);
		// Barcode içindeki veri tespit edilir ve deşifre edilir
		var result = reader.Decode(newImage);
		// Sonuç ekrana yazılması için geçici veri olarak depolanır
		TempData["barcode"] = result == null ? "Try again." : result.ToString();
	}

	return RedirectToAction("Index");
}


//Bit pazarında bulduğum, iş görür bir bitmap boyutlandırıcı
public static Bitmap ScaleImage(Image image, int maxWidth, int maxHeight)
{
	var ratioX = (double)maxWidth / image.Width;
	var ratioY = (double)maxHeight / image.Height;
	var ratio = Math.Min(ratioX, ratioY);

	var newWidth = (int)(image.Width * ratio);
	var newHeight = (int)(image.Height * ratio);

	var newImage = new Bitmap(newWidth, newHeight);
	Graphics.FromImage(newImage).DrawImage(image, 0, 0, newWidth, newHeight);
	return newImage;
}
</pre>

Bir de sadece android sistemlerde çalışan doğrudan cihazın kamerasını görüntüleme var. Ama cihazın önbelleğinin yeterli olmayacağını unutmayın. Örnek şu şekilde;

<pre class="brush: xml; title: ; notranslate" title="">&lt;div&gt;
        &lt;video autoplay style="width: 307px;height: 250px;"&gt;&lt;/video&gt;
        &lt;img src="" style="width: 307px;height: 250px;"&gt;
        &lt;canvas style="display:none;"&gt;&lt;/canvas&gt;
&lt;script&gt;
    var video = document.querySelector('video');
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var localMediaStream = null;

    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                              navigator.mozGetUserMedia || navigator.msGetUserMedia;

    var video = document.querySelector('video');

    if (navigator.getUserMedia) {
        navigator.getUserMedia({ audio: false, video: true }, function (stream) {
            video.src = window.URL.createObjectURL(stream);
            localMediaStream = stream;
        }, onFailSoHard);
    } else {
        video.src = 'somevideo.webm'; // fallback.
    }

  var onFailSoHard = function(e) {
    console.log('Reeeejected!', e);
  };


  function snapshot() {
      if (localMediaStream) {
          ctx.drawImage(video, 0, 0);
          // "image/webp" works in Chrome 18. In other browsers, this will fall back to image/png.
          document.querySelector('img').src = canvas.toDataURL('image/webp');
      }
  }

  video.addEventListener('click', snapshot, false);

&lt;/script&gt;
&lt;/div&gt;
</pre>

Çekilen fotoğrafı sunucuya göndermeden işlemenin de bir yöntemi mevcut. Nette bunun için açıklayıcı bir örnek yoktu ve benim de yeterince zamanım olmadı. <a href="https://github.com/LazarSoft/jsqrcode" target="_blank">LazarSoft&#8217;un github sayfası</a>nda gerekli bilgileri bulabilirsiniz. Oradaki örnek flash içermekte. Mobil uygulamalarda flash olamayacağı için belki `image capture` ile birleştirerek güzel bir uygulama yapabilirsiniz.

Her türlü konuda, iyi veya kötü yorumlarınızda çekinmeden yazabilirsiniz. Geç de olsa elbet dönüş yaparım.