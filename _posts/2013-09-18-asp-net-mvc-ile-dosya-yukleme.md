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
image: /wp-content/uploads/2013/09/Capture.png
---
Dosya yükleme bir çok uygulamada gerekmektedir. Aşağıdaki kodlar ASP.NET MVC ortamı için hazırlanmış en basit yöntemi göstermektedir. Ayrıca yüklediğiniz dizindeki tüm dosyaları gösteren bir kod parçası da mevcuttur.

Boş bir ASP.NET MVC projesi oluşturduktan sonra Views klasörü altına Home klasörünü ekliyoruz. Home içerisine de Index.cshtml adında bir sayfa oluşturduktan sonra şu kodları yazıyoruz;

{% highlight html linenos %}
<h2>FileUpper</h2>

<form action="/Home/Index" method="post" enctype="multipart/form-data">
 <label for="desc">Description:</label>
 <input type="text" name="desc" id="desc" />
 <br />
 <label for="file1">Filename:</label>
 <input type="file" name="files" id="file1" />
 <br />
 <input type="submit"  />
</form>

@if (TempData["files"] != null)
{
 <ul>
  @foreach (string file in (string[])TempData["files"])
  {
   <li>@file</li>
  }
 </ul>
}
{% endhighlight %}

<!--more-->

Daha sonra Controllers klasörü altında HomeController oluşturduktan sonra aşağıdaki kodları ekliyoruz. Daha önceden bir Index fonksiyonu varsa çakışmaması için onu silebilirsiniz. Ayrıca referanslara `using System.IO;` eklemeniz gerekebilir.

{% highlight csharp linenos %}public ActionResult Index()
{
 string[] files = Directory.GetFiles(Server.MapPath("~/App_Data/uploads"));
 string[] fileNames = new string[files.Count()];
 for (int i = 0; i < files.Count(); i++)
 {
  fileNames[i] = files[i].Substring(files[i].IndexOf("uploads"));
 }
 TempData["files"] = fileNames;
 return View();
}

[HttpPost]
public ActionResult Index(IEnumerable<HttpPostedFileBase> files, string desc)
{
 foreach (var file in files)
 {
  if (file != null && file.ContentLength > 0)
  {
   var fileName = desc + "_" + Path.GetFileName(file.FileName);
   var path = Path.Combine(Server.MapPath("~/App_Data/uploads"), fileName);
   file.SaveAs(path);
  }
 }
 return RedirectToAction("Index");
}
{% endhighlight %}

Son olarak App_Data klasörü altına uploads klasörünü eklerseniz, siteniz çalışmaya hazırdır. Yüklediğiniz her dosya bu uploads atılacak ve sayfanızın altında listelenecektir. Kodu incelediğinizde post metodunun birden fazla dosya için hazırlandığını görebilirsiniz. Aşağıdaki gibi eklediğiniz her `file input` işlemden geçecek ve belirtilen dizine kayıt edilecektir.

{% highlight html linenos %}<label>Filename:</label><input type="file" name="files" />
{% endhighlight %}

Dosya yükleme sırasında dizinde aynı isimli dosya mevcut ise hata verecektir bu nedenle dosya ismini değiştirmeniz gerekebilir. Dosya isimleri konusunda en uygun yöntem `Guid.NewGuid()` ile üreteceğiniz benzersiz bir guid oluşturup, uzantı olarak da bilinmeyen bir uzantı vermektir. Resimlere &#8220;.rsm&#8221; gibi bir uzantı verebilirsiniz. Eğer dosyanın asıl adı size lazımsa onu yeni adıyla ilişkili olarak veritabanında tutabilirsiniz. Uzantısı farklı olan resim dosyalarının web sayfası üzerinde gösteriminde sorun olmayacaktır.

Bir de yüklenen her dosyayı doğrudan kopyalamak yerine tekrar oluşturmak daha güvenli olacaktır. [Resimlerin içine gömülen virüsler][2]den tutun, [resmin EXIF etiketlerine yazılabilen kod][3]larla sitenizi ele geçirebilirler.

 [2]: http://lifehacker.com/282119/hide-files-inside-of-jpeg-images
 [3]: http://php.webtutor.pl/en/2011/05/13/php-code-injection-a-simple-virus-written-in-php-and-carried-in-a-jpeg-image/