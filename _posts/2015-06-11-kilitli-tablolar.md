---
title: Kilitli Tablolar
author: Olcay Bayram
layout: post
permalink: /2015/06/11/kilitli-tablolar/
categories:
  - Veritabanı
tags:
  - mongo
  - mssql
  - mysql
  - oracle
  - plsql
  - script
  - sorgu
  - sql
  - tablo
  - tsql
  - veritabanı
image: /wp-content/uploads/2015/06/lockedTables.jpg
---
Bazen veritabanından bir veri çekerken yanıt alamayız. O sırada ilgili tablo başka bir işlem tarafından güncellenmektedir ve veritabanı sunucusu bize en güncel halini sunabilmek için bizi bekletir. Bu durumu tablo yerine satır bazlı kilitlerle veya hiç veriyi kilitlemeden çözebiliriz.

Aşağıda bu duruma düştüğünüzde sizi kurtaracak scriptler mevcuttur. Hangi tabloların neden kilitlendiğini öğrenebilirsiniz. İyi bir ekipte bunu yazılımcı yerine db adminlerin kontrol ediyor olması gerekir. Yazılımcı tabloları kilitlemeyecek şekilde kodunu yazmalıdır.

<!--more-->

**MSSQL (T-SQL)**

{% highlight sql linenos %}USE master

--Çalışmakta olan işlemler
SELECT * from sys.sysprocesses;

--SQL sunucusunda aktif bağlantılar
exec sp_who 'active';

--Kilitli tablolar
EXEC sp_lock;{% endhighlight %}

**Oracle (PL\SQL)**

Oracle için özel bir not olarak şunu düşelim: Oracle&#8217;da oluşturulan stored procedureler (önceden yazılmış, veritabanı ile birlikte tutulan methodlar) o prosedürü derleyen kişinin yetkisi ile çalışırlar. Kilitli tabloları gösteren bu sorguyu yetki sınırlandırması sebebiyle çalıştıramıyorsanız, bunu içeren bir sp&#8217;yi adminin derlemesini isteyebilirsiniz. Daha sonra sp&#8217;yi her çağırdığınızda onun yetkisiyle çalışacaktır.

{% highlight sql linenos %}select c.owner
, c.object_name
, c.object_type
, b.sid
, b.serial#
, b.status
, b.osuser
, b.machine
from v$locked_object a
, v$session b
, dba_objects c
where b.sid = a.session_id
  and a.object_id = c.object_id;
{% endhighlight %}

Ufak bir not daha: SQL sorgularını bu şekilde noktalama işareti satır başına gelecek şekilde yazarsanız imla kuralları açısından rahatsız edici olabilir ama debug sırasında satırları kolaylıkla yorum satırı yapmanıza imkan tanır. Bu örnekte olduğu gibi yorum satırı virgül akışı bozmaz.

**MySQL**

{% highlight sql linenos %}SHOW OPEN TABLES
WHERE 'Table' LIKE '%foo%'
    AND Database LIKE '[DBNAME]'
    AND In_use &gt; 0;
{% endhighlight %}

**MongoDB**

Yok. Tablo da yok, kilit de yok.