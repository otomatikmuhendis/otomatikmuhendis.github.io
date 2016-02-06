---
title: Sayfaya Resim Gömmek
author: Olcay Bayram
layout: post
permalink: /2013/10/31/sayfaya-resim-gommek/
categories:
  - Yazılım
tags:
  - base64
  - 'C#'
  - embed
  - gömme
  - PHP
  - resim
  - uri
---
Tasarımlarımızda kullandığımız bazı ufak resimleri kod olarak sayfalarımıza gömebiliriz. Bu HTTP isteklerini azaltacaktır. En basitini düşünecek olursak toplu olarak gönderdiğiniz epostalarınızda ki görseller bu şekilde içeriğe gömülürse, eposta okunduğunda sitenize HTTP istekleri gelmemiş olur. Tabi bu da takip için kullanılan bir yöntem olduğundan en azından ufak bir resim takip amaçlı kullanılabilir.

Hem konudan kopmamak, hem de takip olayını havada bırakmamak için kısaca açıklayayım. Eposta içeriğindeki bir görsele her hangi bir sayfanın adresini verirseniz, eposta açıldığında o sayfaya istek gelecektir. Bu sayfa üzerinden o epostanın okunup okunmadığını kontrol edebilirsiniz. En iyisi bu konuyu başka yazıda örneklerle anlatayım. Ayrıca bu konuda <a href="https://www.madmimi.com" target="_blank">madmimi.com</a>&#8216;u öneririm.

Bu yöntemin kötü yanı IE&#8217;de çalışmaması. Tabi ki sorunun etrafından dolaşan çözümler mevcut. Bu işlemleri StyleSheet ile yapıp IE için ayrı bir CSS dosyası hazırlamanız gerekecektir. Diğer taraftan bu şekilde gömülü resimler için boyut kısıtları mevcut. O nedenle daha küçük boyuttaki tasarım için kullandığınız resimler için kullanabilirsiniz. Ayrıca Base64 kodlanan resimler aslına göre %33 daha büyük boyutta oluyorlar. Bunu da göz önüne almalısınız.

Kullanım örnekleri;

Dosya ikonu:  
<img src="data:image/gif;base64,R0lGODlhEAAOANUAAMyZNP/MZ7OBG8uYM4ODg8jIyLqHIriFIK58FplnAcmWMaBuCJ5sBpxqBG1tbb2KJf/mgbWCHceUL7B+GIyMjMCNKKNxC5poAsKPKreEH0tLS7+MJ6h2ENOgO/f399ypROazTrSBHLyJJKVzDe+8V97e3vjFYKt5E//0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAQAA4AAAaWwNkMMFBIVCmhcglYYgrJpbApq8pmD0MmIpioPLPBC0UmSxGU0kzhgrTe8IroEBIIVBJWS7qEzCwULSsAVoVVJjILDhgBAzIvkJGQJDIMMRUBLTIunJ2cIDINMQ8BGzIsqKmoHzIXMQYBBzIrtLW0HTIJDipcEwgnHCMWCwwNFwkaBCkFBDHOz9AxBAUzKSow2NnaMEhBADs=" width="16" height="14" />

<pre class="brush: xml; title: ; notranslate" title="">&lt;img src="data:image/gif;base64,R0lGODlhEAAOANUAAMyZNP/MZ7OBG8uYM4ODg8jIyLqHIriFIK58FplnAcmWMaBuCJ5sBpxqBG1tbb2KJf/mgbWCHceUL7B+GIyMjMCNKKNxC5poAsKPKreEH0tLS7+MJ6h2ENOgO/f399ypROazTrSBHLyJJKVzDe+8V97e3vjFYKt5E//0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAQAA4AAAaWwNkMMFBIVCmhcglYYgrJpbApq8pmD0MmIpioPLPBC0UmSxGU0kzhgrTe8IroEBIIVBJWS7qEzCwULSsAVoVVJjILDhgBAzIvkJGQJDIMMRUBLTIunJ2cIDINMQ8BGzIsqKmoHzIXMQYBBzIrtLW0HTIJDipcEwgnHCMWCwwNFwkaBCkFBDHOz9AxBAUzKSow2NnaMEhBADs=" width="16" height="14"&gt;
</pre>

veya

Stumbleupon ikonu:  
[![Stumbleupon][1]][2]

<pre class="brush: xml; title: ; notranslate" title="">&lt;a href="http://www.stumbleupon.com/submit?url=http%3A//otomatikmuhendis.com&amp;title=Otomatik%20Muhendis" title="Otomatik Muhendis'i Stumbleupon'da Paylaşın"&gt;&lt;img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAE/UlEQVRYw92Ze2wUVRSH1wQfKK0ioIBaLSoYJSICFelDRNQaCUWr0SjWCEajsalGowEtJESNYjBbNFr+AAMtUYyC+ECFIlpiQaRx4wMbSYyIYWd29tV9P3s85yy77XRnZ2bvttVlkkmzM52Z7577O697LVDgEe3eD4FNb4B3RQO4GmpAWTQNHLdPwbMclMVXg+uRBeBd9SgE29dD7LfuQj8HFpGHIgf2gPvJRSBdfxbIc88DueZCcCy4GBy3XsqwSu3lfBI0X7v5IpCrLwD5hnNBmn0OeF94EGJHuocfONyxHQEuA7mihCEGwpk92frzJ4M062xw3j0Doj91DT1w0q2As34myHNK2GL5QmqeBH5LGc7SaHA/Xjt0wKEdm0CacQa+/JKhAdWyOlkcpRL98bvCgHtXP4ZTN1po6vOGvq0cDTMKApvfFAP2NN3FDqXUDj/sQH2TgXzWFfkBe5uXjzisChp1HWyzmgMOfriBPXikQbOgrx2lGUFUwAnHCdTR6SOiWTOapvCpC0yZaTijQd7QN00CT+MSbeDQZ22YiUoLmkbOaDeOBWnOGLaOPG9cYQYgacw8E2K/27KBHfMncRYTgy1n3Xua6iF6sAOSThkS9uMQ/vojcN5XwQ4sKjMasPOBuWrgcMcOzvPCsBj0Y7YDOUNRsK2FBySayilqxP/6ox/Y1VAtNnX0MspQh741zFC+lhdBrpogqOWJ0LvmiX5g0onQ6LFCcy9faLoOkKvGs/cLRYx556eAI51f8A+RkZNThb/ali2Bba0Q6dqTnepfaWTPF/kWOXL82FGw+Nc3s8mFgFH3g+va8N5PwD79NLBPtUDS51EPBIt4UVnQ7IR2bgaL+6nFwqFHC5heKleOQ4uUYLSQBmXRVnEdYxTzrX0WLMqS6UK6yglM8RyBqcMIbHw9cz328w/gbqxj3YuGNyrILKKwRsCpaZzA7RMPAP9XFJaBMUe4llaihc2AVY5n0adP0pMpYOr10DKOhdjX1UzkQn2gw3I/ePKkLGkUKZz3zjIGJliKBORACUXCv14I73qfoXUlgbDB9hbsoq9iy/rfWgW+155maIKNdO6C6OFOjOH7IPbLIejFzloPOgNsJAmqDaIH96pb+67dfF0XmJzOo6id7oN3WCaUbPricdW9wLtreJDGkjBwOgKLfL9b3ebv/zIDHD1yOCdw4sQxNVS7NQOcDPpV92gGdIHTTmcU1hh4UBKIfLOTKztOy+j9KuDPt/YD2/9WA7+3lqVEmTXp71UDv71aHzgd1owSB2XByL5PVS/vC4dSaxOox+yOpfWkvksh/meP6l6sxwb2Kyyaz/mtK3WBM4nDKDVz4fFqk+l6wfPMPam6GJ019PHGrPt9yaTmc6RPvZnOpGaj4ofKR61WRevoQ12mlwUolFGEMHMkpOO65aeq+DFTXpLFXA9VG35YqbtG9R7Ssm/d88bP3TkVB1hmvrw0U8CTvpz113EnMfiIH/0VlDuuVCWGdL0sV5SCt3lZDsv+g7DT0CCT8yvgzbZIZL30Ip73pWXgXfkwT7s0e0xKArnW0NBCJCvPc/eDf8PL4Mdi3rW0KiUDHcvmbJHyakJZn2VsTbJManFwivkmlWqLdMo2ahrSTWiPrZja/LpTaCHlf7dUZesqnsXAwBbrKbzc+t8uaK8rcMtgexFtGRTlpkxRbnsV7cZiQVu3W4dm6/Zf1jurMWtR59YAAAAASUVORK5CYII=" alt="Stumbleupon" /&gt;&lt;/a&gt;
</pre>

### PHP

<pre class="brush: php; title: ; notranslate" title="">&lt;?php
function data_uri($file, $mime) {
    $contents = file_get_contents($file);
    $base64 = base64_encode($contents);
    return "data:$mime;base64,$base64";
}
?&gt;
 
&lt;img src="&lt;?php echo data_uri('elephant.png', 'image/png');
?&gt;" alt="An elephant"&gt;
</pre>

### C# (ASP)

<pre class="brush: csharp; title: ; notranslate" title="">&lt;% string base64Data = Convert.ToBase64String(File.ReadAllBytes("elephant.png")); %&gt;
&lt;img alt="sample" src="data:image/png;base64,&lt;%=base64Data%&gt;"&gt;
</pre>

 [1]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAE/UlEQVRYw92Ze2wUVRSH1wQfKK0ioIBaLSoYJSICFelDRNQaCUWr0SjWCEajsalGowEtJESNYjBbNFr+AAMtUYyC+ECFIlpiQaRx4wMbSYyIYWd29tV9P3s85yy77XRnZ2bvttVlkkmzM52Z7577O697LVDgEe3eD4FNb4B3RQO4GmpAWTQNHLdPwbMclMVXg+uRBeBd9SgE29dD7LfuQj8HFpGHIgf2gPvJRSBdfxbIc88DueZCcCy4GBy3XsqwSu3lfBI0X7v5IpCrLwD5hnNBmn0OeF94EGJHuocfONyxHQEuA7mihCEGwpk92frzJ4M062xw3j0Doj91DT1w0q2As34myHNK2GL5QmqeBH5LGc7SaHA/Xjt0wKEdm0CacQa+/JKhAdWyOlkcpRL98bvCgHtXP4ZTN1po6vOGvq0cDTMKApvfFAP2NN3FDqXUDj/sQH2TgXzWFfkBe5uXjzisChp1HWyzmgMOfriBPXikQbOgrx2lGUFUwAnHCdTR6SOiWTOapvCpC0yZaTijQd7QN00CT+MSbeDQZ22YiUoLmkbOaDeOBWnOGLaOPG9cYQYgacw8E2K/27KBHfMncRYTgy1n3Xua6iF6sAOSThkS9uMQ/vojcN5XwQ4sKjMasPOBuWrgcMcOzvPCsBj0Y7YDOUNRsK2FBySayilqxP/6ox/Y1VAtNnX0MspQh741zFC+lhdBrpogqOWJ0LvmiX5g0onQ6LFCcy9faLoOkKvGs/cLRYx556eAI51f8A+RkZNThb/ali2Bba0Q6dqTnepfaWTPF/kWOXL82FGw+Nc3s8mFgFH3g+va8N5PwD79NLBPtUDS51EPBIt4UVnQ7IR2bgaL+6nFwqFHC5heKleOQ4uUYLSQBmXRVnEdYxTzrX0WLMqS6UK6yglM8RyBqcMIbHw9cz328w/gbqxj3YuGNyrILKKwRsCpaZzA7RMPAP9XFJaBMUe4llaihc2AVY5n0adP0pMpYOr10DKOhdjX1UzkQn2gw3I/ePKkLGkUKZz3zjIGJliKBORACUXCv14I73qfoXUlgbDB9hbsoq9iy/rfWgW+155maIKNdO6C6OFOjOH7IPbLIejFzloPOgNsJAmqDaIH96pb+67dfF0XmJzOo6id7oN3WCaUbPricdW9wLtreJDGkjBwOgKLfL9b3ebv/zIDHD1yOCdw4sQxNVS7NQOcDPpV92gGdIHTTmcU1hh4UBKIfLOTKztOy+j9KuDPt/YD2/9WA7+3lqVEmTXp71UDv71aHzgd1owSB2XByL5PVS/vC4dSaxOox+yOpfWkvksh/meP6l6sxwb2Kyyaz/mtK3WBM4nDKDVz4fFqk+l6wfPMPam6GJ019PHGrPt9yaTmc6RPvZnOpGaj4ofKR61WRevoQ12mlwUolFGEMHMkpOO65aeq+DFTXpLFXA9VG35YqbtG9R7Ssm/d88bP3TkVB1hmvrw0U8CTvpz113EnMfiIH/0VlDuuVCWGdL0sV5SCt3lZDsv+g7DT0CCT8yvgzbZIZL30Ip73pWXgXfkwT7s0e0xKArnW0NBCJCvPc/eDf8PL4Mdi3rW0KiUDHcvmbJHyakJZn2VsTbJManFwivkmlWqLdMo2ahrSTWiPrZja/LpTaCHlf7dUZesqnsXAwBbrKbzc+t8uaK8rcMtgexFtGRTlpkxRbnsV7cZiQVu3W4dm6/Zf1jurMWtR59YAAAAASUVORK5CYII=
 [2]: http://www.stumbleupon.com/submit?url=http%3A//otomatikmuhendis.com&title=Otomatik%20Muhendis "Otomatik Muhendis'i Stumbleupon'da Paylaşın"