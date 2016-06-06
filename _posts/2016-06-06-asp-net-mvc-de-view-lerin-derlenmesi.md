---
author: Olcay Bayram
layout: post
categories: IDE Tips
published: true
title: ASP.NET MVC'de View'lerin Derlenmesi
image: /img/mvcbuildviews.png
subtitle: Visual Studio İpucları
tags:
  - visual studio
  - tips
  - razor
---
**ASP.NET MVC**'de uygulamanın ayağa kalkmasını hızlandırmak için View'lar çalışma zamanında derlenir. Bu sebeple projeyi derlediğimiz sırada View'lar içerisinde hata varsa fark edemeyiz. Bunun önüne geçmek için projede küçük bir değişiklik yapabiliriz.

Visual Studio seçeneklerinde olmayan bu özelliği değiştirebilmek için öncellikle ilgili projeyi, `.csproj` dosyası üzerinde `Unload Project` seçeneği ile kaldırmalıyız. Daha sonra `Edit ...csproj` seçeneği ile ilgili dosyayı düzenleyebiliriz. Açılan XML yapısında ilk `PropertyGroup` elementi içerisinde `MvcBuildViews` etiketinin `false` olarak ayarlandığını görebilirsiniz.

Bu değeri `true` olarak değiştirip kaydeder ve projeyi `Reload Project` seçeneği ile tekrar yüklersek. Artık projeyi derlediğimiz sırada View hatalarını da Error List penceresinde görebiliriz.

<!--more-->

![mvcbuildviews_error]({{site.baseurl}}/img/mvcbuildviews_error.png)
