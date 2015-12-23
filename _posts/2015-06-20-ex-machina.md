---
title: Ex Machina
author: Olcay Bayram
layout: post
permalink: /2015/06/20/ex-machina/
categories:
  - Yazılım
tags:
  - ex machina
  - film
  - hacker
  - python
---
[Ex Machina][1] filmini izleyenler bilir bir sahnede ekranda şöyle bir kod görülüyor.<figure id="attachment_249" style="width: 636px" class="wp-caption aligncenter">

[<img class="wp-image-249 size-full" src="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/1261624605864184746.jpg?fit=604%2C436" alt="ex machina hacker kodları" srcset="http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/1261624605864184746.jpg?resize=300%2C217 300w, http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/1261624605864184746.jpg?w=636 636w" sizes="(max-width: 636px) 100vw, 636px" data-recalc-dims="1" />][2]<figcaption class="wp-caption-text">ex machina hacker kodları</figcaption></figure> 

Genelde filmlerde kargacık burgacık saçmalıklardan, hatta ekranda anlamsızca dönen küplerin olduğu <a href="https://www.youtube.com/watch?v=pe6gGUR3Ga4" target="_blank">hacker filmleri</a>nden dolayı bunda da kodların bir sonuca götürmeyeceğini düşünebiliriz. Resimde ki kodları temize çektiğimizde aşağıdaki, derlenebilir Python kodları çıkıyor.<!--more-->

<pre class="brush: python; title: ; notranslate" title="">#BlueBook code decryption

   import sys
   def sieve(n):
       x = [1] * n
       x[1] = 0
       for i in range(2,n/2):
               j = 2 * i
               while j &lt; n:
                       x[j]=0
                       j = j+i
       return x    def prime(n,x):
       i = 1
       j = 1
       while j &lt;= n:
               if x[i] == 1:
                       j = j + 1
               i = i + 1
       return i - 1
   x=sieve(10000)
   code = [1206,301,384,5]
   key =[1,1,2,2,]    sys.stdout.write(“”.join(chr(i) for i in [73,83,66,78,32,61,32]))
   for i in range (0,4):
       sys.stdout.write(str(prime(code[i],x)-key[i]))    

print
</pre>

Bu kodu Python2.7 derleyicisinde çalıştırdığımızda ise sonuç `<abbr title="International Standard Book Number / Uluslararası Standart Kitap Numarası">ISBN</abbr> = 9780199226559` çıkıyor.

Bu da *<a href="http://www.amazon.com/Embodiment-inner-life-Cognition-Consciousness/dp/0199226555" target="_blank">Embodiment and the inner life: Cognition and Consciousness in the Space of Possible Minds</a>* kitabına karşılık geliyor.

Kaynak: <a href="http://moviecode.tumblr.com/" target="_blank">Source Code in TV and Films</a>

 [1]: http://exmachina-movie.com/
 [2]: http://i2.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/exmachina_ekran.jpg