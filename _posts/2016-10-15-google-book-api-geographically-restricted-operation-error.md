---
author: Olcay Bayram
layout: post
title: Google Books API'den Konum Hatası
categories: hata
tags: 
  - google books
  - api
published: true
subtitle: Code 403 Cannot determine user location for geographically restricted operation 
---

Google AppEngine veya Heroku üzerindeki uygulamanızda Google Books API'a erişimde aşağıdaki hatayı almanız muhtemeldir.

`Code 403: Cannot determine user location for geographically restricted operation`

Hata mesajında da belirtildiği gibi kullanıcının konumu belirlenemediği için bu hata oluşmaktadır. Bunun da önüne geçmek için Google Books API clientıyla çağrı yaparken request'in header bilgilerine `country` parametresini de eklemeliyiz. Bu parametre Java ve .Net kütüphanelerinde public set edilebilir değildir. Bu sebeple request oluşturulurken `RequestInitializer` methodunda bunu eklemeliyiz.

[Java için çözümü](https://productforums.google.com/forum/#!topic/books-api/zYETdaACrnU)ne bakabilirsiniz veya aşağıdaki örnekte olduğu gibi C# için uygulanışını görebilirsiniz.

<!--more-->

{% highlight csharp linenos %}
public class BookSearch
{
  private BooksService service;

  public BookSearch(string applicationName, string apiKey)
  {
    service = new BooksService(
    new BaseClientService.Initializer
    {
      ApplicationName = applicationName,
      ApiKey = apiKey,
      HttpClientInitializer = new GBookRequest()
    });
  }

  public async Task<IList<Volume>> Search(string search)
  {
    using (service)
    {
      var result = await service.Volumes.List(search).ExecuteAsync();
      if (result != null && result.Items != null)
      {
        return result.Items;
      }
      return null;
    }
  }
}

public class GBookRequest : IConfigurableHttpClientInitializer
{
  public void Initialize(ConfigurableHttpClient httpClient)
  {
    httpClient.DefaultRequestHeaders.Add("country", "TR");
  }
}
{% endhighlight %}
