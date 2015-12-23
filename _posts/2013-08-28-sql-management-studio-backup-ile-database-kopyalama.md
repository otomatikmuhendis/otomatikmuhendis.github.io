---
title: SQL Management Studio Backup ile Database Kopyalama
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
SQL Management Studio&#8217;da çalıştığımız bir veritabanının kopyasını, sıklıkla kullandığımız Backup &#8211; Restore düzeni ile alabiliriz. Ama bu işlemin bir kaç püf noktası işinizi kolaylaştıracaktır.

Backup özellikle Full olmak zorundadır çünkü diferansiyel bir backup elinizde kullanışsız veri olarak kalacaktır.

Restore işlemini sırasında farklı bir veritabanı ismi verirseniz bu veritabanı CREATE olarak scripte eklenir. Daha önceden oluşturduğunuz bir veritabanı üzerine başka bir veritabanının Backup dosyasını Restore edemezsiniz.

Restore sonrasında Database in transition gibi bir hata alırsanız. En basit yöntemi SQL Management Studio&#8217;yu kapatmaktır.

Bir de yeni veritabanı Service Broker olarak hala eskisini kullanıyor olabilir. Hataya neden olmasa da debug sırasında can sıkıcı olabilir.  
Bu durumda veritabanı üzerindeki tüm işlemleri durdurup yeni bir broker tanımlamalısınız.

<pre class="brush: sql; title: ; notranslate" title="">USE master
go

DECLARE @dbname sysname

SET @dbname = 'YeniVeritabanınınAdı'

DECLARE @spid int
SELECT @spid = min(spid) from master.dbo.sysprocesses where dbid = db_id(@dbname)
WHILE @spid IS NOT NULL
BEGIN
EXECUTE ('KILL ' + @spid)
SELECT @spid = min(spid) from master.dbo.sysprocesses where dbid = db_id(@dbname) AND spid &gt; @spid
END

ALTER DATABASE [YeniVeritabanınınAdı] SET NEW_BROKER;
</pre>

Diğer bir senaryoda ise var olan bir veritabanına Restore ederken, üzerinde çalıştığımız veritabanının kullanımda olduğunu söyleyen bir hata ile karşılaşabiliriz. Bunun sebebi tek kullanıcının bağlanmasına izin veriliyor olmasındandır. Önlemi ise aşağıdaki parçaları Restore öncesinde ve sonrasında çalıştırarak veritabanını çevrimdışı duruma almaktan ibarettir.

Hata Mesajı: **Exclusive access could not be obtained because the database is in use.**

<pre class="brush: sql; title: ; notranslate" title="">--Restore öncesi çalıştırılacak kısım
use master
alter database [VeritabanıAdı] set offline with rollback immediate;

--Restore sonrası çalıştırılacak kısım
use master
alter database [VeritabanıAdı] set online with rollback immediate;
</pre>