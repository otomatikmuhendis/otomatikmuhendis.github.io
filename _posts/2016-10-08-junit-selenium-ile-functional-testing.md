---
author: Olcay Bayram
layout: post
title: JUnit ve Selenium WebDriver ile Fonksiyonel Test
categories: test
tags: 
  - junit
  - selenium
  - functional
  - testing
published: true
subtitle: null
---

Basit bir CRUD (Create, Read, Update, Delete) işlemi için [JUnit](http://junit.org/) ve [Selenium WebDriver](http://www.seleniumhq.org/projects/webdriver/) kullanarak fonksiyonel test nasıl yazılır?

Fonksiyonel test; sistem içerisindeki bir fonksiyonun doğru şekilde çalışıp çalışmadığını kontrol etmektir. Diğer test türleri arasında en geniş kapsamlı olandır. Kullanıcının hareketleri test ortamında oluşturulur.

Fonksiyonel testin en büyük dezavantajı, değişen arayüzlerle birlikte değişmesi gerekliliğidir. Bu maliyetin daha düşük olabilmesi için değişkenleri POM (Page Object Model) nesneleri içerisinde toplarız. Sayfa tasarımları değiştikçe bu nesneler üzerinde değişiklik yapmak test case'ler üzerinde değişiklik yapmaktan daha kolay olacaktır.

![functionalTestingEdit.png]({{site.baseurl}}/img/functionalTestingEdit.png)

Yukarıda gördüğünüz şekilde (sayfa elementleri kırmızı ile ifade edilmiştir, farklı ifadeler için farklı erişim yöntemleri uygulanacaktır) bir düzenleme sayfası için aşağıdaki model oluşturulabilir.

<!--more-->

{% highlight java linenos %}
package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Edit_Page {
  
  private static WebDriver _driver;
  
  public Edit_Page(WebDriver driver){
    _driver = driver;
  }
  
  public WebElement txt_Name(){
    return _driver.findElement(By.id("txtName"));
  }
  
  public WebElement txt_InitialDate(){
    return _driver.findElement(By.id("txtInitialDate"));
  }
  
  public WebElement slc_Company(){
    return _driver.findElement(By.id("listCompany"));
  }
  
  public WebElement btn_Save(){
    return _driver.findElement(By.cssSelector("input[type='submit']"));
  }
  
  public WebElement btn_Cancel(){
    return _driver.findElement(By.linkText("Cancel"));
  }
  
  public WebElement btn_Remove(){
    return _driver.findElement(By.cssSelector("#frmEdit.top > input"));
  }
}
{% endhighlight %}

Burada Selenium'un By kütüphanesi ile farklı erişim yöntemlerinin kullanılışını görebilirsiniz. Id'si belirli olan elementlerde doğrudan `By.id()` ile erişebilirken id atanmamış elementlerde `By.cssSelector()` uygulayabiliyoruz. Sayfa üzerinde bir adet "Cancel" linki olduğu için de ona doğrudan `By.linkText("Cancel")` methodu ile erişebiliyoruz.

Dikkat edilmesi gereken diğer bir nokta ise methodların isimlerdirmeleri. Test case'ler içerisinde kullanımı sırasında daha anlamlı hale getirecek ve sayfa üzerinde ki tipini anlayabileceğimiz şekilde isimlendiriyoruz. Yazı veya buton elementleri `txt_` veya `btn_` önekleriyle başlarken, drop-down list için `slc_` önekini tercih ettik.

![functionalTestingList.png]({{site.baseurl}}/img/functionalTestingList.png)

Listeleme sayfasında ise sayfa üzerindeki elementlere erişim için aşağıdaki modeli oluşturuyoruz.

{% highlight java linenos %}
package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class List_Page {
  
  private static WebDriver _driver;
  
  public List_Page(WebDriver driver){
    _driver = driver;
  }
  
  public void redirect(String baseUrl){
    _driver.get(baseUrl + "/list");
  }
  
  public WebElement btn_Add(){
    return _driver.findElement(By.id("btnAdd"));
  }
  
  public WebElement txt_Search(){
    return _driver.findElement(By.id("txtSearch"));
  }
  
  public WebElement btn_Search(){
    return _driver.findElement(By.id("btnSearch"));
  }
  
  public WebElement btn_Link(String text){
    return _driver.findElement(By.linkText(text));
  }
  
  public WebElement btn_Next(){
    return _driver.findElement(By.xpath("//div[@id='pagination']/ul/li[@class='next']/a"));
  }
  
  public WebElement btn_Previous(){
    return _driver.findElement(By.xpath("//div[@id='pagination']/ul/li[@class='prev']/a"));
  }
}
{% endhighlight %}

Önceki örnekten farklı olarak burada Xpath ile erişimi görebilirsiniz. CSS ile erişime oranla daha düşük performanslı olmasına rağmen bazı durumlarda Xpath belirtecini kullanmak gerekir. Bunun için sayfalama linklerine erişimde görebileceğiniz gibi `By.xpath()` methodunu kullanırız.

Test case içerisinde navigasyonu listeleme sayfasına yönlendirebilmek için `redirect` methodu yazılmıştır. Dönen sonuç olarak WebElement dönmediği için diğerlerinden ayrılır, bu sebeple isimlendirmesi de farklı olarak sadece işlevini içerir. 

## Uygulama

Artık hazırlamış olduğumuz bu modelleri test caselerimiz içerisinde kullanabiliriz. Aşağıda veritabanına yeni bir nesne ekleyen, arayan, güncelleyen ve sonunda kaldıran bir senaryo için yazılmış test case'lerini görebilirsiniz.

{% highlight java linenos %}
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

//Modellerimizin bulunduğu paket referansı
import pageObjects.*;

//Normal şartlarda testler asenkron çalışır ama bizim senaryomuza göre 
//senkron olarak sırasıyla çalışmaları gerekiyor
//Bunun için isim sıralandırmasını devreye alıyoruz
@FixMethodOrder(MethodSorters.NAME_ASCENDING)     

public class hardwareDatabase {

  public static WebDriver driver;
  public static String testVarName;
  private static String baseUrl;
  
  public static String hardwareName = "testMakinasi"; 
  public static String initialDate = "1995-01-01"; 
  public static String hardwareNameUpdated = "güncellenenTestMakinasi";
  public static String companyName = "Otomatik Mühendis";
  
  public static Edit_Page editPage;
  public static List_Page listPage;

  @BeforeClass
  public static void setUp() throws Exception {
    //Test case'lerden önce tetiklenir, ortam hazırlanır

    //Driver oluşturulur
    driver = new FirefoxDriver();
    baseUrl = "http://hardwareshop.otomatikmuhendis.com/";

    //Driver'ın elementlere erişimi sırasında 10 saniye süre tanınır
    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    //Sayfaların yüklenmesini için beklenecek süre 200 saniye yapılır
    driver.manage().timeouts().pageLoadTimeout(200, SECONDS);

    //Senaryonun aksamadan aynı pencere üzerinden koşması için driver'ı 
    //modeller ile paylaşıyoruz
    editPage = new Edit_Page(driver);
    listPage = new List_Page(driver);
  }

  @Test
  public void test01addHardware() throws Exception {
    //Nesne ekle

    //Daha önce bahsettiğimiz şekilde ilgili sayfaya yönleniyor
    listPage.redirect(baseUrl);
    
    listPage.btn_Add().click();
    
    //Yazı alanları daima boşaltılarak dolduruluyor
    editPage.txt_Name().clear();
    editPage.txt_Name().sendKeys(hardwareName);
    
    editPage.txt_InitialDate().clear();
    editPage.txt_InitialDate().sendKeys(initialDate);
    
    //Dropdown listesinden seçim yapılıyor
    new Select(editPage.slc_Company()).selectByVisibleText(companyName);
    
    editPage.btn_Save().click();
  }

  @Test
  public void test02searchHardware() throws Exception {
    //Eklediğimiz nesneyi bul

    listPage.txt_Search().clear();
    listPage.txt_Search().sendKeys(hardwareName);
    
    listPage.btn_Search().click();
    
    listPage.btn_Link(hardwareName).click();
    
    editPage.btn_Cancel().click();
  }
  
  @Test
  public void test03updateHardware() throws Exception {
    //Eklediğimiz nesneyi bulup güncelle ve yeni ismiyle tekrar ara

    listPage.txt_Search().clear();
    listPage.txt_Search().sendKeys(hardwareName);
    
    listPage.btn_Search().click();
    
    listPage.btn_Link(hardwareName).click();
    
    editPage.txt_Name().clear();
    editPage.txt_Name().sendKeys(hardwareNameUpdated);
    
    editPage.btn_Save().click();
    
    listPage.txt_Search().clear();
    listPage.txt_Search().sendKeys(hardwareNameUpdated);
    
    listPage.btn_Search().click();
    
    listPage.btn_Link(hardwareNameUpdated).click();
    
    editPage.btn_Cancel().click();
  }

  @Test
  public void test04deleteHardware() throws Exception {
    //Güncellenen nesneyi kaldır

    listPage.txt_Search().clear();
    listPage.txt_Search().sendKeys(hardwareNameUpdated);
    
    listPage.btn_Search().click();
    
    listPage.btn_Link(hardwareNameUpdated).click();
    
    editPage.btn_Remove().click();  
  }

  @Test
  public void test05moveToNextPage() throws Exception {
    //Sonraki sayfaya git

    listPage.btn_Next().click();
  }

  @Test
  public void test06moveToPreviousPage() throws Exception {
    //Önceki sayfaya git

    listPage.btn_Previous().click();
  }
  
  @AfterClass
  public static void tearDown() throws Exception {
    //Tüm testler çalıştıktan sonra tetiklenir

    //Driver'dan çıkılarak, pencerenin kapanması sağlanır
    driver.quit();
  }
}
{% endhighlight %}

Bir dahaki fonksiyonel test yazımızda Assertion kullanımını göreceğiz. JUnit Assert methodları ile sayfa içeriğinde yazılanlar beklentilerimizi karşılıyor mu bunun uygulamasını yapacağız.