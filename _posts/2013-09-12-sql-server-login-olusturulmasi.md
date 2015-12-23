---
title: SQL Server Login Oluşturulması
author: Olcay Bayram
layout: post
permalink: /2013/09/12/sql-server-login-olusturulmasi/
categories:
  - Veritabanı
tags:
  - database
  - login
  - management studio
  - sql
  - ssms
  - user
  - veritabanı
---
SQL Server Management Studio&#8217;da yapılan en sıkıcı işlerden biridir Login oluşturulması.  
Asla düzgün ve hızlı bir şekilde yapamazsınız çünkü ayda yılda bir lazım olur ve her ne kadar daha önce yapmış olsanız da unutursunuz.  
Microsoft SQL Server 2005 sertifikasına sahip hatta bu sınavda 1000 üzerinden 1000 yapmış biri olarak bu sorunun sanal sunucuda sorulduğunu hatırlıyorum.  
Bu da konunun ne kadar önemli olduğunu gösterir. Ayrıca asla Studio ortamına güvenmeyin. Daima SQL yazacak şekilde hazırlıklı olun.

<pre class="brush: sql; title: ; notranslate" title="">--Login oluşturulur. Şifre için kurallar ve zaman aşımı iptal edilmiştir.
CREATE LOGIN [kulllaniciAdi] 
	WITH PASSWORD=N'Sifre1234', 
	DEFAULT_DATABASE=[VERITABANIADI], 
	CHECK_EXPIRATION=OFF,
	CHECK_POLICY=OFF
	
--Veritabanınızda ilşkili User oluşturulur
USE [VERITABANIADI]
GO
CREATE USER [kulllaniciAdi] FOR LOGIN [kulllaniciAdi]
GO

--User'a db_owner rolü atanır. Artık veritabanında istediğini yapma hakkı vardır.
USE [VERITABANIADI]
GO
EXEC sp_addrolemember N'db_owner', N'kulllaniciAdi'
GO

--Sunucunuz sadece Windows login ile kurulmuş olabilir.
--Bunu da makinedeki sunucu ayarını değiştirerek düzeltiyoruz.

USE [master]
GO
EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'LoginMode', REG_DWORD, 2
GO
</pre>

Başka sıkıntılarla karşılaşanlar veya sıkıntılarla karşılaşıp çözüm bulanlar yorum olarak yazabilirler.