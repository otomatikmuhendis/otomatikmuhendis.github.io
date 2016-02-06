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
---
Bazen veritabanından bir veri çekerken yanıt alamayız. O sırada ilgili tablo başka bir işlem tarafından güncellenmektedir ve veritabanı sunucusu bize en güncel halini sunabilmek için bizi bekletir. Bu durumu tablo yerine satır bazlı kilitlerle veya hiç veriyi kilitlemeden çözebiliriz.

<img class="aligncenter size-full wp-image-213" src="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/lockedTables.jpg?fit=306%2C149" alt="Kilitli Tablolar" srcset="http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/lockedTables.jpg?resize=300%2C146 300w, http://i0.wp.com/otomatikmuhendis.com/wp-content/uploads/2015/06/lockedTables.jpg?w=306 306w" sizes="(max-width: 306px) 100vw, 306px" data-recalc-dims="1" />

Aşağıda bu duruma düştüğünüzde sizi kurtaracak scriptler mevcuttur. Hangi tabloların neden kilitlendiğini öğrenebilirsiniz. İyi bir ekipte bunu yazılımcı yerine db adminlerin kontrol ediyor olması gerekir. Yazılımcı tabloları kilitlemeyecek şekilde kodunu yazmalıdır.

**MSSQL (T-SQL)**

<pre class="brush: sql; title: ; notranslate" title="">USE master

--Çalışmakta olan işlemler
SELECT * from sys.sysprocesses;

--SQL sunucusunda aktif bağlantılar
exec sp_who 'active';

--Kilitli tablolar
EXEC sp_lock;</pre>

**Oracle (PL\SQL)**

Oracle için özel bir not olarak şunu düşelim: Oracle&#8217;da oluşturulan stored procedureler (önceden yazılmış, veritabanı ile birlikte tutulan methodlar) o prosedürü derleyen kişinin yetkisi ile çalışırlar. Kilitli tabloları gösteren bu sorguyu yetki sınırlandırması sebebiyle çalıştıramıyorsanız, bunu içeren bir sp&#8217;yi adminin derlemesini isteyebilirsiniz. Daha sonra sp&#8217;yi her çağırdığınızda onun yetkisiyle çalışacaktır.

<pre class="brush: sql; title: ; notranslate" title="">select c.owner
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
</pre>

Ufak bir not daha: SQL sorgularını bu şekilde noktalama işareti satır başına gelecek şekilde yazarsanız imla kuralları açısından rahatsız edici olabilir ama debug sırasında satırları kolaylıkla yorum satırı yapmanıza imkan tanır. Bu örnekte olduğu gibi yorum satırı virgül akışı bozmaz.

**MySQL**

<pre class="brush: sql; title: ; notranslate" title="">SHOW OPEN TABLES
WHERE 'Table' LIKE '%foo%'
    AND Database LIKE '[DBNAME]'
    AND In_use &gt; 0;
</pre>

**MongoDB**

Yok. Tablo da yok, kilit de yok.