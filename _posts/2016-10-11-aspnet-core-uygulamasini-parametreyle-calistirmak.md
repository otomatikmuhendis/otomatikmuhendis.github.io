---
author: Olcay Bayram
layout: post
title: ASP.NET Core Sitesini Konsol Parametleriyle Çalıştırmak
categories: Yazılım
en: /2016/10/11/run-aspnet-core-application-commandline-arguments/
tags: 
  - aspnet core
  - commandline
  - dotnet
published: true 
---

[ASP.NET Core](https://www.asp.net/core) uygulamasını içeren .dll dosyası [KestrelHttpServer](https://github.com/aspnet/KestrelHttpServer) sunucusu sayesinde IIS'e ihtiyaç duymadan ayağa kalkabilmektedir. Bir konsol uygulaması gibi çalışmaktadır.

Örnek senaryomuz; [Heroku](https://www.heroku.com/) cloud platformuna kurduğumuz uygulamamız ayağa kaldırıldığı sırada `server.urls` parametresi ile belirli bir portu dinlemeye zorlanmaktadır. ASP.NET Core uygulamaları ön tanımlı olarak 5000 portu üzerinden çalışırlar. Bu durumda uygulamamız istenen portu dinlemeyecektir.

`cd /app/heroku_output && dotnet ./Libton.dll --server.urls http://+:54372`

Heroku platformunda [dotnet cli](https://github.com/dotnet/cli)'a gönderilen bu komutta istenen port değişken olarak verilmektedir.

Konsol uygulamalarında çalıştırma sırasında parametreler vererek program içerisinde bunları kullanabiliriz. Bu yeteneği uygulamamıza kazandırabilmek için NuGet Package Manager üzerinden [Microsoft.Extensions.Configuration.CommandLine](https://www.nuget.org/packages/Microsoft.Extensions.Configuration.CommandLine/) referansını ekleriz.

Daha sonra Program class'ında ki Main methodunda, komut satırı parametrelerini ayar parametlerine dönüştürerek, WebHostBuilder'a bu ayarları aktarırız.

Bu çalışma sonunda Program.cs dosyamız aşağıdaki hali alır.

<!--more-->

{% highlight csharp linenos %}
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace Libton
{
  public class Program
  {
    public static void Main(string[] args)
    {
      //Komut satırı parametrelerini ayarlara çevirir
      var config = new ConfigurationBuilder()
        .AddCommandLine(args)
        .Build();

      var host = new WebHostBuilder()
        .UseConfiguration(config)//Ayarları aktarır
        .UseKestrel()
        .UseContentRoot(Directory.GetCurrentDirectory())
        .UseIISIntegration()
        .UseStartup<Startup>()
        .Build();

      host.Run();
    }
  }
}
{% endhighlight %}

Evet, ASP.NET Heroku'da çalışabiliyor.