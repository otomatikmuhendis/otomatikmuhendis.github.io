---
author: Olcay Bayram
layout: post
categories: Yazılım
published: true
title: 'C# 7 ile Gelen Yeni Yetenekler'
tags:
  - 'C#'
---
C# 7 ile birlikte programlama diline katılan yeni yetenekler;

### Static ref
`using` ile verilen referanslarda `static` anahtarı ile referansımızı static olarak kullanabiliriz.

### Out variables
Parametrelerde verilen `out` anahtarı artık değişken tanımlamaya da izin veriyor. Tanımlama yapmak istemiyorsanız `_` yazmanız yeterli.

### Patterns "is"
Constant veya Type pattern ile koşul yazılabilir hatta `out` anahtarında olduğu gibi nesnenin tipi uygunsa doğrudan koşuldaki tipte bir değişken üretilebilir.

### Switch statements
Artık switch case koşullarında eşitlikten daha fazlası istenebiliyor. Koşullar için `when` kelimesi kullanılıyor.
<!-- more -->
### Tuples
Bu özellik için öncellikle `System.ValueTuple` referansı eklenmesi gerekiyor. Fonksiyonun dönüş parametreleri Tuples olarak tanımlandığında, isimli ise isimleriyle, isimsiz ise Item1, Item2 vb. isimlerle ile erişilebilir. Diğerlerinde olduğu gibi yine satır içi değişken tanımlaması yapılarak veya yerel değişkenlere atanarak Tuples yok edilebilir.

### Local Functions
Fonksiyon scope'u içerisinde private fonksiyonlar yazılabilir. Bu yöntem recursive methodların düzenli kullanımını sağlayacaktır.

Bu yeteneklerin tümünü aşağıdaki kod blogundaki gibi uygulayabiliriz;

<script src="https://gist.github.com/olcay/e8954ab45ba7b2a0bcd842c4f76c668e.js"></script>

Son olarak bunları kullanabilmek için Visual Studio 2017 kullanmalısınız. Eğer yoksa [Visual Studio 2017 Community](https://www.visualstudio.com/downloads/) sayfasından ücretsiz Community versiyonunu indirebilirsiniz.
