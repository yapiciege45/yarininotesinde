"use client";
import Footer from '@/components/shared/footer/Footer'
import Header from '@/components/shared/header/Header'
import '@/styles/global.css'
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head />
      <body>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
        <script src="https://kit.fontawesome.com/6de428ecbe.js" crossOrigin="anonymous" async></script>
      </body>
    </html>
  )
}
