---
author: Olcay Bayram
layout: post
title: Arduino ile Kaplumbağa Yemleyicisi
permalink: "/2015/06/24/arduino-ile-kaplumbaga-yemleyicisi/"
categories: "neler-yapiyorum"
tags: 
  - arduino
  - arduino yazılım
  - lcd
  - test
published: true
subtitle: null
image: ""
---

Çıkacağım uzun tatil sebebiyle kablumbağaları otomatik olarak yemleyecek bir makina yapmaya karar verdim. Daha önceden almış olduğum <a href="http://www.robotistan.com/Orjinal-Arduino-Super-Baslangic-Seti-Rev3,PR-954.html" target="_blank">Arduino kiti</a> bu iş için biçilmiş kaftandı.

Arduino nedir diye merak ediyorsanız sizi [şu yazıya][1] alalım.

Öncelikle program hedeflerini çıkardım;

  1. Belirli aralıklarla yemi dökecek.
  2. Sistemin çalışıp çalışmadığını gösterecek bir test butonu olacak.
  3. Bilgilendirme mesajları için bir LCD ekran olacak.

Ayrıca süre aralığını elle dinamik olarak yönetebilmeyi düşündüm ama bunun fazladan efor olacağını düşünerek listemden çıkardım.

Yemi dökebilmek için arduinoya bağladığım servo motorun hareketli kısmına bir yem kutusu yapıştırdım. Servo motor kod ve şema bilgilerini <a href="http://www.arduino.cc/en/Tutorial/Sweep" target="_blank">şu adreste</a> görebilirsiniz. Daha sonra sistemi test etmemizi sağlayacak <a href="http://www.arduino.cc/en/Tutorial/Button" target="_blank">butonun bağlantısı</a>nı gerçekleştirdim. Son olarak bilgilendirme mesajları için <a href="http://www.arduino.cc/en/Tutorial/LiquidCrystal" target="_blank">LCD ekranı</a> bağladım. Ekranı ayrıca kod içerisinde de görebileceğiniz gibi komik mesajlar için de kullandım.

Bağlantıları tamamladıktan devre tahtası bu hale geldi;

[![](/wp-content/uploads/2015/06/arduino_kaplumbaga_yemleyici_sema-604x270.png)](/wp-content/uploads/2015/06/arduino_kaplumbaga_yemleyici_sema.png)
Tüm bağlantıları tamamladıktan sonra devre tahtası 

Artık yazılım tarafına geçebiliriz. Kodları yorum satırlarıyla yerinde inceleyelim.

<pre class="brush: cpp; title: ; notranslate" title="">// LCD ekran ve Servo motor için ihtiyacimiz olan
// kütüphaneleri ekliyoruz.
#include &lt;LiquidCrystal.h&gt;
#include &lt;Servo.h&gt;

// Değişkenlerin tanımlanması ve sabitlerin atanması
// (çeşitli atama yöntemleri uygulanmıştır)

// LCD ekranın bağlı olduğu pinler
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

// Servo motoru
Servo myservo;

// Butonun bağlı olduğu pin
const int buttonPin = 8; 

// LCD arka ışığının bağlı olduğu pin
#define LCD_LIGHT_PIN A4

// Süre sayacı
unsigned long sayac; 

// Süre aralığı milisaniye cinsinden 8 saat
const long sure = 28800000;

// Yem kutusu besleme pozisyonu
const int posfeed = 115;

// Yem kutusu bekleme pozisyonu
const int poswait = 10; 

// Milisaniye cinsinden bir saniye
const int onesec = 1000; 

// Test sayacı
long sayacTest = 0; 

// Lokma sayacı
// Tatilin sonunda kaç defa çalıştığını görebilmek için.
long sayacLokma = 0; 

// Komikli mesajlar
// 16 karakter ile sınırlı olduğu için bu kadar oluyor.
String mesajlar[] = {
 "Suratin cok sertHusnu.",
 "I want to play a GAME",
 "- domateees, domates vaaar!",
 "Fear is the pathto dark side.",
 "Benim olcak fistik vurcam kirbac",
 "Teenage Mutant Ninja Turtles",
 "Yalniz agamiza beles, buyir agam",
 "Arap sen icme bokunu cikariyorsun"
};

// Mesaj için satır başına düşen karakter sayısı
int mesajlarLen = 8;

// Sadece program başlatıldığında çalışan method.
void setup() {

 // Gerekli atamaları burada yapabiliriz.

 // Programın çalışma süresi sayaca atanır.
 sayac = millis(); 

 // LCD ekran satır ve sütun sayısı atanır.
 lcd.begin(16, 2); 

 // Buton veri giriş elemanı olarak atanır.
 pinMode(buttonPin, INPUT);

 // LCD ekran arka ışığı veri çıkış olarak atanır.
 pinMode(LCD_LIGHT_PIN, OUTPUT);

 // Servo motoru 9 nolu pine bağlanır.
 myservo.attach(9); 

 // Ekran temizlenir ve arka ışığı kapatılır.
 lcdClear(); 

 // Motor bekleme pozisyonuna getirilir.
 myservo.write(poswait);

 // Rastgele mesaj gösterimi için rastgelelik ayarlanır.
 randomSeed(analogRead(0));
}

// Setup methodundan sonra ardı ardına çalışan methoddur.
// Senkron yapıdadır.
void loop() {
 // Sayaç belirli süreyi geçmiş ise beslemeye başlanır.
 if(millis() - sayac &gt; sure) {
 // Sayaç çalışma süresiyle eşitlenir.
 sayac = millis(); 

 // Beslenir.
 feed();
 }

 // Test butonu basılı ise test edilir.
 if (digitalRead(buttonPin) == HIGH) {

 // Test sayacını arttırarak bu değer ekrana yazdırılır.
 sayacTest++;
 lcd.clear();
 String desc = "Test no:";
 desc += sayacTest;
 lcdPrint("Test basliyor...", desc);
 delay(onesec * 2);
 lcdClear();

 // Beslenir.
 feed();
 }
}

void feed() {
 // Rastgele mesajı seçilir ve hazırlanır.
 String satir1 = mesajlar[random(0, mesajlarLen)];
 String satir2 = "";

 if(satir1.length() &gt; 16){
 satir2 = satir1.substring(16, 32);
 satir1 = satir1.substring(0, 16);
 }

 // Ekrana yazdırılır
 lcdPrint(satir1, satir2);

 // 3 saniye beklenir.
 delay(onesec * 3);

 // Lokma sayacı arttırılır.
 sayacLokma = sayacLokma + 1; 

 // Motor besleme pozisyonuna getirilir.
 myservo.write(posfeed);

 // 1 saniye motor hareketi için beklenir.
 delay(onesec);

 // Motor bekleme pozisyonuna getirilir.
 myservo.write(poswait);

 // Ekrana bilgilendirme mesajı yazılır.
 lcd.clear();
 String desc = "Lokma no:";
 desc += sayacLokma;
 lcdPrint("Afiyet olsun!", desc);
 delay(onesec * 3);
 lcdClear();
}

void lcdPrint(String satir1, String satir2) {
 // Arka ışığı açarak, ekrana iki satır alt alta yazdırılır.
 digitalWrite(LCD_LIGHT_PIN, HIGH);
 lcd.print(satir1);
 lcd.setCursor(0, 1);
 lcd.print(satir2);
}

void lcdClear() {
 // Ekran boşaltılır ve arka ışığı kapatılır.
 lcd.clear();
 digitalWrite(LCD_LIGHT_PIN, LOW);
}
</pre>

Sonuç olarak böyle bir sistem ortaya çıktı.

[![](/wp-content/uploads/2015/06/arduino_kaplumbaga_yemleyici_is_basinda-604x270.jpg)][3]

Pilin ömrünü düşünerek LCD ekranı çıkarttım. Ama daha önemli bir noktayı unutuyordum. **TEST!** Sadece duman testini yaptığım bu sistemi 1 hafta boyunca kaplumbağaları yemlesin diye bıraktım. Haftanın ortasında aşırı beslemeden dolayı yenememiş yemler suyu balçık kıvamına sokmuş ve sağolsun çalışma arkadaşlarım kaplumbağaların imdadına yetişmişler.

Kısaca test önemli!

 [1]: http://otomatikmuhendis.com/2015/06/13/arduino-nedir/
 [2]: http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/arduino_kaplumbaga_yemleyici_sema.png
 [3]: http://i1.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/arduino_kaplumbaga_yemleyici_is_basinda.jpg
