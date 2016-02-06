---
title: SQL Management Studio Backup ile Database Kopyalamak
author: Olcay Bayram
layout: post
permalink: /2013/08/28/sql-management-studio-backup-ile-database-kopyalama/
categories:
  - Veritabanı
tags:
  - database
  - db
  - management studio
  - mssql
  - sql
  - sqlms
  - veritabanı
---
SQL Management Studio'da çalıştığımız bir veritabanının kopyasını, sıklıkla kullandığımız Backup &#8211; Restore düzeni ile alabiliriz. Ama bu işlemin bir kaç püf noktası işinizi kolaylaştıracaktır.

Backup özellikle Full olmak zorundadır çünkü diferansiyel bir backup elinizde kullanışsız veri olarak kalacaktır.

Restore işlemini sırasında farklı bir veritabanı ismi verirseniz bu veritabanı CREATE olarak scripte eklenir. Daha önceden oluşturduğunuz bir veritabanı üzerine başka bir veritabanının Backup dosyasını Restore edemezsiniz.

<!--more-->

Restore sonrasında Database in transition gibi bir hata alırsanız. En basit yöntemi SQL Management Studio'yu kapatmaktır.

Bir de yeni veritabanı Service Broker olarak hala eskisini kullanıyor olabilir. Hataya neden olmasa da debug sırasında can sıkıcı olabilir.  
Bu durumda veritabanı üzerindeki tüm işlemleri durdurup yeni bir broker tanımlamalısınız.

{% highlight sql linenos %}
USE master
go

DECLARE @dbname sysname

SET @dbname = 'YeniVeritabanininAdi'

DECLARE @spid int
SELECT @spid = min(spid) from master.dbo.sysprocesses where dbid = db_id(@dbname)
WHILE @spid IS NOT NULL
BEGIN
EXECUTE ('KILL ' + @spid)
SELECT @spid = min(spid) from master.dbo.sysprocesses where dbid = db_id(@dbname) AND spid > @spid
END

ALTER DATABASE [YeniVeritabanininAdi] SET NEW_BROKER;
{% endhighlight %}

Diğer bir senaryoda ise var olan bir veritabanına Restore ederken, üzerinde çalıştığımız veritabanının kullanımda olduğunu söyleyen bir hata ile karşılaşabiliriz. Bunun sebebi tek kullanıcının bağlanmasına izin veriliyor olmasındandır. Önlemi ise aşağıdaki parçaları Restore öncesinde ve sonrasında çalıştırarak veritabanını çevrimdışı duruma almaktan ibarettir.

###Hata Mesajı

`Exclusive access could not be obtained because the database is in use.`

{% highlight sql linenos %}
--Restore öncesi çalıştırılacak kısım
use master
alter database [VeritabaniAdi] set offline with rollback immediate;

--Restore sonrası çalıştırılacak kısım
use master
alter database [VeritabaniAdi] set online with rollback immediate;
{% endhighlight %}