"use client";
import { useTypewriter } from 'react-simple-typewriter'
import React from 'react'

const Top = () => {
    const [text] = useTypewriter({
        words: ['Yardımsever misin?', 'O zaman doğru yerdesin!', 'Kaydırmayı dener misin :)'],
        loop: 0
    })
  return (
    <section className='min-h-screen w-full'>
        <div className='min-h-screen w-full bg-black/80 flex flex-col items-center justify-center text-white'>
            <h1 className='sm:text-6xl text-4xl font-bold animate-rightappear'>Yarının Ötesinde</h1>
            <p className='sm:text-xl text-lg animate-leftappear'>"Hayallerimiz yarınların da ötesinde"</p>
            <div className='absolute bottom-5 flex flex-col items-center text-2xl animate-bottomappear'>
                <p>{text}</p>
                <i className="fa-solid fa-chevron-down animate-pulse"></i>
            </div>
        </div>
    </section>
  )
}

export default Top