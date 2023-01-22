import Link from 'next/link'
import React from 'react'
import "@/styles/global.css"

const NotFound404 = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white text-2xl flex justify-center items-center'>
      Böyle bir sayfa bulunamadı | <Link href="/" className='mx-2 underline hover:text-slate-400 transition-colors'>Ana Sayfaya Dön</Link>
    </div>
  )
}

export default NotFound404