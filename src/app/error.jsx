"use client";
import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white text-2xl flex justify-center items-center'>
      Beklenmeyen bir hata oluştu | <Link href="/" className='mx-2 underline hover:text-slate-400 transition-colors'>Ana Sayfaya Dön</Link>
    </div>
  )
}

export default Error