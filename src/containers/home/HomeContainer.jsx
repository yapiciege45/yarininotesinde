"use client";
import About from '@/components/home/about/About'
import Projects from '@/components/home/projects/Projects';
import Top from '@/components/home/top/Top'
import React from 'react'

const HomeContainer = () => {
  return (
    <>
        <Top />
        <About name="MİSYONUMUZ" img="https://yarininotesinde.org/img/misyon.webp" description="Ulaşabildiği her alanda fırsat eşitliğini desteklemeyi amaçlayan organizasyonumuz bu hedefinde öncelikli olarak her çocuğun kalbine dokunmayı, onların yüzlerindeki mutluluğu, gülümsemeyi ortaya çıkarıp yarınlarımızı onların sevgisi ve sevinciyle aydınlatmayı kendine görev bilmiş ve bu doğrultuda çalışmaktadır." />
        <About name="HEDEFİMİZ" img="https://yarininotesinde.org/img/hedefimiz.jpeg" description="81 İlde ulaşabildiği her alanda fırsat eşitliğine katkı sağlamak için çalışan Yarının Ötesinde, eşzamanlı bir şekilde çok çalışarak ilk etapta 10.000 öğrencinin fiziki ihtiyaçlarını karşılamayı, daha sonrasında ise her ilde yürütülen bir proje haline gelmeyi hedeflemiştir." />
        <About name="MOTİVASYONUMUZ" img="https://yarininotesinde.org/img/motivasyonumuz.jpeg" description="Yarınlarımız olan çocukların yüzlerinde oluşturduğumuz tek bir tebessüm bizim için her şeyin ötesinde. Onların gülümsemesi bizlere enerji, yarınlarımıza ışık kaynağı oluyor. Bu süreçte kalbine dokunduğumuz her çocuk aynı zamanda yarınlarımızı da aydınlatıyor. Siz de bu sürecin bir parçası olmak isterseniz her türlü destek ve yardımlarınız için bize ulaşabilirsiniz." />
    </>
  )
}

export default HomeContainer