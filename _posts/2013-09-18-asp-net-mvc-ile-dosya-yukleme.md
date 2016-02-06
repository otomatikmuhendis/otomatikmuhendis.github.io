---
title: ASP.NET MVC ile Dosya Yükleme
author: Olcay Bayram
layout: post
permalink: /2013/09/18/asp-net-mvc-ile-dosya-yukleme/
categories:
  - Yazılım
tags:
  - ASP.NET
  - dosya
  - file
  - MVC
  - upload
  - yükleme
---
[<img src="http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/09/Capture.png?fit=253%2C211" alt="Capture" class="alignleft size-full wp-image-76" data-recalc-dims="1" />][1]Dosya yükleme bir çok uygulamada gerekmektedir. Aşağıdaki kodlar ASP.NET MVC ortamı için hazırlanmış en basit yöntemi göstermektedir. Ayrıca yüklediğiniz dizindeki tüm dosyaları gösteren bir kod parçası da mevcuttur.

Boş bir ASP.NET MVC projesi oluşturduktan sonra Views klasörü altına Home klasörünü ekliyoruz. Home içerisine de Index.cshtml adında bir sayfa oluşturduktan sonra şu kodları yazıyoruz;

<pre class="brush: xml; title: ; notranslate" title="">&lt;h2&gt;FileUpper&lt;/h2&gt;

&lt;form action="/Home/Index" method="post" enctype="multipart/form-data"&gt;

  &lt;label for="desc"&gt;Description:&lt;/label&gt;
  &lt;input type="text" name="desc" id="desc" /&gt;
  &lt;br /&gt;
  &lt;label for="file1"&gt;Filename:&lt;/label&gt;
  &lt;input type="file" name="files" id="file1" /&gt;
  &lt;br /&gt;
  &lt;input type="submit"  /&gt;
&lt;/form&gt;


@if (TempData["files"] != null)
{
    &lt;ul&gt;
    @foreach (string file in (string[])TempData["files"])
    {
        &lt;li&gt;@file&lt;/li&gt;
    }
        &lt;/ul&gt;
}
</pre>

Daha sonra Controllers klasörü altında HomeController oluşturduktan sonra aşağıdaki kodları ekliyoruz. Daha önceden bir Index fonksiyonu varsa çakışmaması için onu silebilirsiniz. Ayrıca referanslara `using System.IO;` eklemeniz gerekebilir.

<pre class="brush: csharp; title: ; notranslate" title="">public ActionResult Index()
{
	string[] files = Directory.GetFiles(Server.MapPath("~/App_Data/uploads"));
	string[] fileNames = new string[files.Count()];
	for (int i = 0; i &lt; files.Count(); i++)
	{
		fileNames[i] = files[i].Substring(files[i].IndexOf("uploads"));
	}
	TempData["files"] = fileNames;
	return View();
}

[HttpPost]
public ActionResult Index(IEnumerable&lt;HttpPostedFileBase&gt; files, string desc)
{
	foreach (var file in files)
	{
		if (file != null && file.ContentLength &gt; 0)
		{
			var fileName = desc + "_" + Path.GetFileName(file.FileName);
			var path = Path.Combine(Server.MapPath("~/App_Data/uploads"), fileName);
			file.SaveAs(path);
		}
	}
	return RedirectToAction("Index");
}
</pre>

Son olarak App_Data klasörü altına uploads klasörünü eklerseniz, siteniz çalışmaya hazırdır. Yüklediğiniz her dosya bu uploads atılacak ve sayfanızın altında listelenecektir. Kodu incelediğinizde post metodunun birden fazla dosya için hazırlandığını görebilirsiniz. Aşağıdaki gibi eklediğiniz her `file input` işlemden geçecek ve belirtilen dizine kayıt edilecektir.

<pre class="brush: xml; title: ; notranslate" title="">&lt;label&gt;Filename:&lt;/label&gt;&lt;input type="file" name="files" /&gt;
</pre>

Dosya yükleme sırasında dizinde aynı isimli dosya mevcut ise hata verecektir bu nedenle dosya ismini değiştirmeniz gerekebilir. Dosya isimleri konusunda en uygun yöntem `Guid.NewGuid()` ile üreteceğiniz benzersiz bir guid oluşturup, uzantı olarak da bilinmeyen bir uzantı vermektir. Resimlere &#8220;.rsm&#8221; gibi bir uzantı verebilirsiniz. Eğer dosyanın asıl adı size lazımsa onu yeni adıyla ilişkili olarak veritabanında tutabilirsiniz. Uzantısı farklı olan resim dosyalarının web sayfası üzerinde gösteriminde sorun olmayacaktır.

Bir de yüklenen her dosyayı doğrudan kopyalamak yerine tekrar oluşturmak daha güvenli olacaktır. [Resimlerin içine gömülen virüsler][2]den tutun, [resmin EXIF etiketlerine yazılabilen kod][3]larla sitenizi ele geçirebilirler.

 [1]: http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2013/09/Capture.png
 [2]: http://lifehacker.com/282119/hide-files-inside-of-jpeg-images
 [3]: http://php.webtutor.pl/en/2011/05/13/php-code-injection-a-simple-virus-written-in-php-and-carried-in-a-jpeg-image/