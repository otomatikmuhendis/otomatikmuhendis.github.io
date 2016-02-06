---
title: PHP ile E-posta Göndermek
author: Olcay Bayram
layout: post
permalink: /2013/09/12/php-ile-e-posta-gondermek/
categories:
  - Yazılım
tags:
  - email
  - eposta
  - mail
  - PHP
---
Bu konu gerek yazılımcılar gerekse tasarımcılar tarafından sıklıkla aranmaktadır çünkü basit bir web sitesi yapmak istediğinizde en azından bir iletişim sayfası olması beklenir.  
Bu iletişim sayfasının işlevselliğini ise HTML sayfasının ardındaki PHP kodları ile sağlayabiliriz. PHP olmasının sebebi; daha ucuz sunucuların genelde PHP koşan linux sunucuları olmasıdır.

İletişim sayfanızda gerekli formu oluşturduktan sonra aşağıdaki PHP sayfasına post edecek şekilde ayarlarsanız sayfanız işlevsel olacaktır.

{% highlight php linenos %}$to = "webmaster@siteniz.net"; /*E-posta adresiniz*/
$subject = "Sitenizden Mail Var"; /*Konu*/
$date = date ("l, F jS, Y"); 
$time = date ("h:i A");
$Email=$_REQUEST['Email'];

$msg="
Name: $_REQUEST[Name]
Email: $_REQUEST[Email]
Phone: $_REQUEST[Phone]

Mesaj  $date, hour: $time tarihinde gönderildi.\n

Mesaj:
$_REQUEST[message]";

if ($Email=="") {
	echo "Lütfen mail adresi giriniz.";
}
else{
	mail($to, $subject, $msg, "From: $_REQUEST[Email]");
	echo "Mesajınızı için teşekkürler.";
}
{% endhighlight %}