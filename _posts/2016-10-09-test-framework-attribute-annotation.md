---
author: Olcay Bayram
layout: post
title: Test Attribute ve Annotation'ları
en: /2016/10/09/test-framework-attribute-annotation/
categories: test
tags: 
  - test
  - nunit
  - xunit
  - mstest
  - junit
published: true
subtitle: Çeşitli test frameworklerinde sıklıkla kullanılan Attribute ve Annotation'lar 
---
Aşağıdaki tabloda [NUnit](https://github.com/nunit/docs/wiki/Attributes), [MSTest](https://msdn.microsoft.com/en-us/library/microsoft.visualstudio.testtools.unittesting.classinitializeattribute(v=vs.140).aspx), [xUnit.net](https://xunit.github.io/) ve [JUnit](https://www.tutorialspoint.com/junit/junit_using_assertion.htm) test frameworklerinde sıklıkla kullandığımız Attribute ve Annotation'ları açıklamarıyla birlikte görebilirsiniz.

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

Testlerde Category kullanımı best practice olarak geçmektedir. Daha sonra kullanacağınız bir Continuous Integration aracında testlerinizi kategorilerine göre çalıştırabilirsiniz.

Geçici olarak çalıştırmak istemediğiniz test caselerinizde, Ignore kullanabilirsiniz. Ignore kullanmak yerine test tanımını silerseniz bir daha asla o testi bulamayabilirsiniz. Ignore olarak işaretlenen methodlar test runner aracınızda verdiğiniz mesajla görüntülenir.
