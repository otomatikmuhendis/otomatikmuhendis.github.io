---
author: Olcay Bayram
layout: post
title: Test Attribute ve Annotation'ları
en: /2016/10/09/test-framework-attribute-annotation/
categories: Testing
tags:
  - test
  - nunit
  - xunit
  - mstest
  - junit
published: true
subtitle: Çeşitli test frameworklerinde sıklıkla kullanılan Attribute ve Annotation'lar
---
Aşağıdaki tabloda [NUnit](https://github.com/nunit/docs/wiki/Attributes), [MSTest](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.classinitializeattribute(v=vs.140).aspx), [xUnit.net](https://xunit.github.io/) ve JUnit ([tutorialspoint](https://www.tutorialspoint.com/junit/junit_using_assertion.htm) ve [Guru99](https://www.guru99.com/junit-annotations-api.html)) test frameworklerinde sıklıkla kullandığımız Attribute ve Annotation'ları açıklamarıyla birlikte görebilirsiniz.

|NUnit|MSTest|xUnit.net|JUnit|Açıklama|
|---|---|---|---|---|
|[TestFixture]|[TestClass]|-|-|Class'ın test içerdiğini belirtir.|
|[Test]|[TestMethod]|[Fact]|@Test|Method'un test case'i olduğunu belirtir.|
|[OneTimeSetUp]|[ClassInitialize]|IClassFixture<T>|@BeforeClass|Testler başlamadan önce tek sefer çalışacak method.|
|[OneTimeTearDown]|[ClassCleanup]|IClassFixture<T>|@AfterClass|Testler tamamlandıktan sonra tek sefer çalışacak method.|
|[SetUp]|[TestInitialize]|Constructor|@Before|Her testten önce çalışacak methoddur.|
|[TearDown]|[TestCleanup]|IDisposable.Dispose|@After|Her test tamamlandıktan sonra çalışacak methoddur.|
|[Ignore]|[Ignore]|[Fact(Skip="reason")]|@Ignore|Test case olmasına rağmen çalıştırılmasını istemediğimiz methodları bununla işaretleyebiliriz.|
|[Category("")]|[TestCategory("")]|[Trait("Category", "")]|@Category(*.class)|Testleri kategoriler halinde sınıflandırmamızı sağlar.|

<!--more-->

xUnit diğerlerinden farklı olarak Attribute veya Annotation kullanmak yerine kalıtımın getirdiği methodları kullanmayı tercih etmiştir.

Testlerde Category kullanımı best practice olarak geçmektedir. Test runner aracınızda kategorilere göre görüntüleyebilir veya bir Continuous Integration aracında testlerinizi kategorilerine göre çalıştırabilirsiniz.

Geçici olarak çalıştırmak istemediğiniz test caselerinizde, Ignore kullanabilirsiniz. Ignore kullanmak yerine test tanımının silinmesi halinde bir daha asla o testi bulamayabilirsiniz. Ignore olarak işaretlenen methodlar test runner aracınızda veya test raporunuzda verdiğiniz mesajla görüntülenir.

<span class="responsiveImg">
[![testingIgnore.png]({{site.baseurl}}/img/testingIgnore.png)]({{site.baseurl}}/img/testingIgnore.png)
</span>
*Test Explorer üzerinde görünümü*

<span class="responsiveImg">
[![testingIgnoreJenkins.png]({{site.baseurl}}/img/testingIgnoreJenkins.png)]({{site.baseurl}}/img/testingIgnoreJenkins.png)
</span>
*Jenkins CI test raporunda görünümü*

Yukarıda kullandığımız attribute'larının sırasını daha iyi görebilmek için aşağıdaki şekilde bir test hazırlayabiliriz;

Öncelikle test edeceğimiz methodu yazalım. Yeni bir Class Library projesi oluşturup aşağıdaki class'ı yazarız;

{% highlight csharp linenos %}
namespace OtomatikMuhendis.TestSample
{
  public class DivideClass
  {
    public static int DivideMethod(int numerator, int denominator)
    {
      return (numerator / denominator);
    }
  }
}
{% endhighlight %}

Daha sonra Solution'a Unit Test Project ekler ve daha önce oluşturduğumuz projeyi buna referans olarak ekleriz.

Unit Test class'ımızı da aşağıdaki şekilde oluştururuz.

{% highlight csharp linenos %}
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OtomatikMuhendis.TestSample;
using System.Diagnostics;

namespace OtomatikMuhendis.UnitTest
{
  [TestClass]
  public sealed class DivideClassTest
  {
    [AssemblyInitialize]
    public static void AssemblyInit(TestContext context)
    {
      Debug.WriteLine("AssemblyInit " + context.TestName);
    }

    [ClassInitialize]
    public static void ClassInit(TestContext context)
    {
      Debug.WriteLine("ClassInit " + context.TestName);
    }

    [TestInitialize]
    public void Initialize()
    {
      Debug.WriteLine("TestMethodInit");
    }

    [TestMethod]
    [TestCategory("MathLibTests")]
    public void DivideMethod_DivideByOne_ResultIsEqual()
    {
      //Arrenge
      var numerator = 6;
      var denominator = 1;

      //Act
      var result = DivideClass.DivideMethod(numerator, denominator);

      //Assert
      Assert.AreEqual(numerator, result);

      Debug.WriteLine("TestMethod_DivideMethod_DivideByOne_ResultIsEqual");

    }

    [TestMethod]
    [TestCategory("MathLibTests")]
    public void DivideMethod_DivideByTwo_ResultIsHalf()
    {
      //Arrenge
      var numerator = 6;
      var denominator = 2;

      //Act
      var result = DivideClass.DivideMethod(numerator, denominator);

      //Assert
      Assert.AreEqual(numerator, result * denominator);

      Debug.WriteLine("TestMethod_DivideMethod_DivideByTwo_ResultIsHalf");

    }

    [TestMethod]
    [TestCategory("MathLibTests")]
    [ExpectedException(typeof(System.DivideByZeroException))]
    [Ignore]
    public void DivideMethod_DivideByZero_ThrowsDivideByZeroException()
    {
      //Arrenge
      var numerator = 6;
      var denominator = 0;

      //Act
      var result = DivideClass.DivideMethod(numerator, denominator);

      //Assert
      Assert.AreEqual(numerator, result * denominator);

      Debug.WriteLine("TestMethod_DivideMethod_DivideByZero_ThrowsDivideByZeroException");

    }

    [TestCleanup]
    public void Cleanup()
    {
      Debug.WriteLine("TestMethodCleanup");
    }

    [ClassCleanup]
    public static void ClassCleanup()
    {
      Debug.WriteLine("ClassCleanup");
    }

    [AssemblyCleanup]
    public static void AssemblyCleanup()
    {
      Debug.WriteLine("AssemblyCleanup");
    }
  }
}
{% endhighlight %}

<span class="responsiveImg">
[![testingProject.png]({{site.baseurl}}/img/testingProject.png)]({{site.baseurl}}/img/testingProject.png)
</span>
*Projenin son hali*

Son olarak da çıktımız aşağıdaki şekilde olacaktır;

    AssemblyInit DivideMethod_DivideByOne_ResultIsEqual
    ClassInit DivideMethod_DivideByOne_ResultIsEqual
    TestMethodInit
    TestMethod_DivideMethod_DivideByOne_ResultIsEqual
    TestMethodCleanup
    TestMethodInit
    TestMethod_DivideMethod_DivideByTwo_ResultIsHalf
    TestMethodCleanup
    ClassCleanup
    AssemblyCleanup
