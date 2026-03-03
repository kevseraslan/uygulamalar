# CSS Kararlari

## 1. Breakpoint Secimi
- sm (640px) ve lg (1024px) breakpointlerini tercih ettim. 640px ile telefonların dikey ve yatay ekranlarını ele alırken, 1024px ile masaüstü ekran geneli için tasarım kırılımları oluşturdum.
- 640px'den küçükse elemanlar dikey (%100 genişlik) yığılırken, 640px ve üstünde yatay düzene, 1024px'de ise proje kartları 3 sütunlu grid yapısına geçiyor.

## 2. Layout Tercihleri
- Header alanında elemanları (logo ve navigasyon) karşılaşıklı yatay şekilde ortalamak ve boşlukları yönetmek daha esnek olduğu için Flexbox seçtim.
- Proje kartlarının aynı hizada, sütunlar ve satırlar halinde hem akıcı hem de iki boyutlu olarak daha verimli ölçeklenebilmesi için CSS Grid seçtim.
- `repeat(auto-fit, minmax(280px, 1fr))` kullanarak `auto-fit` ettim. Çünkü kartların mevcut alanı doldurarak ekran büyüdükçe esnemesini veya birleşmesini istedim (boşluk kalmasın istedim).

## 3. Design Tokens
- Renk paletinde modern ve okunaklı olması için ana renk olarak primary mavi (#1E3A8A) ve white background seçtim.
- Spacing skalasını 4px'in katları olacak şekilde `rem` kullanarak (0.25rem'den 4rem'e kadar) standart bir grid yapısı oluşturacak şekilde belirledim.
- Fluid typography için `clamp()` fonksiyonunda, en küçük ekranda yeterince okunur olması için `rem` ve `vw` birimini dinamik olarak harmanladım.

## 4. Responsive Stratejiler
- İlk olarak varsayılan stilleri media query kullanmadan dar ekranlara (Mobil) göre yazdım. Daha sonra `@media (min-width: 640px)` ve `1024px` şeklinde üzerine inşa ettim.
- Form düzeni, Hakkımda bölümündeki alanlar ve Navigasyon mobilde satırlar halinde alt alta yığılırken, daha büyük breakpoint'lerde yatay düzene geçiyor.
- Görsel boyutlarını `max-width: 100%` ve kart içlerinde oran bozulmaması için `object-fit: cover` kullanarak her cihazda sınırların dışına taşmamasını sağladım.
