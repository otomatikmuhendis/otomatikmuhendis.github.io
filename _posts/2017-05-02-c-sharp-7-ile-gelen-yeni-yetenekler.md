---
author: Olcay Bayram
layout: post
categories: Yazılım
published: true
title: 'C# 7.0 ile Gelen Yeni Yetenekler'
tags:
  - 'C#'
en: /2017/05/03/new-features-in-c-7-0-in-one-file/
image: /img/c-sharp-logo.png
---
C# 7.0 ile programlama diline; veri yönetimine, kod sadeleştirmeye ve performansa yönelik yeni yetenekler katıldı. Bunlardan en önemlileri çoklu sonuç döndürmemizi sağlayan _tuples_ ve verinin şekillendirilmesini kolaylaştıran _pattern matching_. Daha temiz ve verimli kodlar yazmamız artık daha kolay.

### Out variables
Parametrelerde verilen `out` anahtarı artık satıriçi değişken tanımlamaya da izin veriyor. Tanımlama yapmak istemiyorsanız `_` yazmanız yeterli.

### Patterns "is"
_Constant_, _Type_ veya _Var_ pattern ile koşul yazılabilir hatta `out` anahtarında olduğu gibi nesnenin tipi uygunsa doğrudan koşuldaki tipte bir değişken üretilebilir.

### Switch statements
Artık switch case koşullarında eşitlikten daha fazlası istenebiliyor. Koşullar için `when` kelimesi kullanılıyor.
<!--more-->
### Tuples
Bu özellik için öncellikle `System.ValueTuple` referansı eklenmesi gerekiyor. Fonksiyonun dönüş parametresi _tuple type_ olarak tanımlandığında, isimli ise isimleriyle, isimsiz ise Item1, Item2 vb. isimlerle ile erişilebilir. Diğerlerinde olduğu gibi yine satır içi değişken tanımlaması yapılarak veya yerel değişkenlere atanarak Tuples yok edilebilir.

### Local Functions
Fonksiyon scope'u içerisinde private fonksiyonlar yazılabilir. Bu yöntem recursive methodların düzenli kullanımını sağlayacaktır.

### Literal improvements
Kodun okunabilirliğini arttırmak adına `_` işareti sayı ayracı olarak kullanılabilir.

### Ref returns and locals
Artık _ref_ modifier ile değerden daha fazlasını ifade eden referansını yani dizinin içindeki yerini dönebilirsiniz.

Bu yeteneklerin tümünü aşağıdaki kod blogundaki gibi uygulayabiliriz;

<script src="https://gist.github.com/olcay/e8954ab45ba7b2a0bcd842c4f76c668e.js"></script>

Son olarak bunları kullanabilmek için Visual Studio 2017 kullanmalısınız. Eğer yoksa [Visual Studio 2017 Community](https://www.visualstudio.com/downloads/) sayfasından ücretsiz Community versiyonunu indirebilirsiniz.

Kaynak: [New Features in C# 7.0](https://blogs.msdn.microsoft.com/dotnet/2017/03/09/new-features-in-c-7-0/)
