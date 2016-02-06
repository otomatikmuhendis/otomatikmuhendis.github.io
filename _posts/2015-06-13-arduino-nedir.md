---
title: Arduino Nedir?
author: Olcay Bayram
layout: post
permalink: /2015/06/13/arduino-nedir/
categories:
  - Sistem
tags:
  - arduino
  - mikro işlemci
  - raspberry pi
---
<a href="http://www.arduino.cc/" target="_blank">Arduino</a>, bir açık kaynak kodlu elektronik platformudur, donanım ve yazılımı kolaylıkla kullanmayı ilke edinmiştir. Herkesin kolaylıkla etkileşimli projeler çıkarmasına imkan tanır.

Arduino iki kısımdan oluşur; biri anakartı diyebileceğimiz kendisi, diğeri ise içerisinde bulunan yazılımdır.

<a href="http://www.arduino.cc/en/Main/Products" target="_blank">Arduino kartı</a>, çeşitli sensörlerle toplanan bilgiyi giriş birimlerinden alarak bunları yazılıma aktarabilir. Aynı zamanda yazılımdan gelen komutları ışık, motor ve diğer çıkış birimlerine aktararak bunların kontrol edilmesini sağlar.

![Arduino IDE](/wp-content/uploads/2015/06/Arduino_1.0_IDE_Ubuntu_11.10.png)

<!--more-->

Arduino IDE

<a href="http://www.arduino.cc/en/Main/Software" target="_blank">Arduino yazılımı</a>, kendine has IDE&#8216;siyle (tümleşik geliştirme ortamı, kısaca editörü) ve kendine has programlama dilinde yazılmaktadır. C/C++ diline benzeyen bu kodu yazdıktan sonra Arduino kart üzerindeki işlemciye yükleriz ve anında çalışmaya başlar.

<a href="https://www.raspberrypi.org/" target="_blank">Raspberry PI</a> ile çok fazla karşılaştırılmaktadır ama detaylı bakıldığında donanım olarak büyük farklılık vardır. Bu donanım farklılıkları sebebiyle Raspberry PI&#8217;a işletim sistemi yükleyebilirken Arduino&#8217;ya yükleyemeyiz. Hadi bu kadar net konuşmayayım. Arduino&#8217;ya da işletim sistemi kurabiliriz ama bu kesinlikle karıncalar için olur. Kısaca Arduino bir mikro işlemcidir, Raspberry PI ise kredi kartı boyutlarında bir bilgisayardır. İkisinin de yapılacak olan projeye göre avantajları ve dezavantajları olacaktır. Örneğin içinde işletim sistemi olan bir bilgisayarı çalıştırmak için 9V&#8217;luk bir pil yeterli olmayacaktır.