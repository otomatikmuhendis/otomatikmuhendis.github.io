---
author: Olcay Bayram
layout: post
categories: Testing
published: true
title: TransactionScope ile Test Verilerini İzole Etmek
tags:
  - test
  - nunit
  - integration
  - 'c#'
en: /2017/12/17/isolating-integration-test-data/
---
Entegrasyon testlerini yazarken yapmamız gereken ama canlı veritabanında çalışmadıkça aksattığımız o minik konu (veritabanını bulduğumuz gibi bırakmak) var ya işte bu yazıda onun kolay yolundan bahsedeceğiz.

Kodun en ufak scope'larına kadar giren unit testlerimizi yazdıktan sonra, happy path'i kontrol ettiğimiz entegrasyon testlerine sıra geldiğinde özellikle veritabanı entegrasyonunda eklediğimiz, güncellediğimiz hatta sildiğimiz verileri, test ortamını eski durumuna getirebilmek için silmemiz, güncellememiz hatta eklememiz gerekir. Bu rollback işlemlerini yazmak yerine System kütüphanesi içerisinde ki [TransactionScope](https://msdn.microsoft.com/tr-tr/library/system.transactions.transactionscope(v=vs.110).aspx)'u kullanabiliriz.

<!--more-->

TransactionScope test başlangıcında oluşturulup, bitiminde dispose edilerek kullanılabilir hatta NUnit test framework'un bize sağladığı ITestAction interface'i ile bunu sadece bir attribute çağrısına çevirebiliriz.

Aşağıdaki gibi kendi Isolated attribute'umuzu yazdıktan sonra...

{% highlight csharp %}
using NUnit.Framework;
using System;
using System.Transactions;

namespace OtomatikMuhendis.IntegrationTests
{
  public class Isolated : Attribute, ITestAction
  {
    private TransactionScope _transactionScope;

    public ActionTargets Targets
    {
      get { return ActionTargets.Test; }
    }

    public void BeforeTest(TestDetails testDetails)
    {
      _transactionScope = new TransactionScope();
    }

    public void AfterTest(TestDetails testDetails)
    {
      _transactionScope.Dispose();
    }
  }
}
{% endhighlight %}

İzole etmek istediğimiz test case'lerde bu attribute'u kullanabiliriz.

{% highlight csharp %}
[Test, Isolated]
public void Update_WhenCalled_ShouldUpdateTheGivenItem()
{ /* ... */ }
{% endhighlight %}
