---
author: Olcay Bayram
layout: post
categories: Yazılım
published: true
title: ASP.NET Web API'de JSON Formatını Güzelleştirmek
image: /img/JsonFormat.png
tags:
  - json
  - api
  - asp.net
  - newtonsoft
---
ASP.NET Web API uygulamalarında oluşan JSON formatlı yanıtları bazen okumakta zorlanıyoruz ve bu yanıtları [JSONLint](http://jsonlint.com/) gibi sitelerle okunabilir hale getiriyoruz. Bunun önüne geçmek için API ayarlarında ufak bir düzenleme ile göze hitap eden sonuçlar elde edebiliriz.

[Newtonsoft.Json](http://www.newtonsoft.com/json) kütüphanesinin yardımı ile WebApiConfig'e aşağıdaki ayarları uygularsak JSON response body'ler indented gözükecek ve property isimleri camelCase formatına çevrilecektir.

<!--more-->

{% highlight csharp %}
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Web.Http;

namespace GigHub
{
  public static class WebApiConfig
  {
    public static void Register(HttpConfiguration config)
    {
      var settings = GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings;
      settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
      settings.Formatting = Formatting.Indented;

      config.MapHttpAttributeRoutes();

      config.Routes.MapHttpRoute(
        name: "DefaultApi",
        routeTemplate: "api/{controller}/{id}",
        defaults: new { id = RouteParameter.Optional }
      );
    }
  }
}
{% endhighlight %}
