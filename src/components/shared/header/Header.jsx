import Link from 'next/link'
import React, { useState } from 'react'
import MobileNav from '../mobile-nav/MobileNav';

const Header = () => {
    const [navIsShown, setNavIsShown] = useState(false);
  return (
    <>
        <div className='h-20 w-full text-white absolute top-0 z-10'>
            <div className="md:w-3/4 sm:w-5/6 w-11/12 h-full m-auto flex justify-between items-center">
                <Link href='/' className='font-bold text-2xl hover:text-orange-500 transition-colors animate-rightappear'>Yarının Ötesinde</Link>
                <nav className='h-full lg:flex items-center hidden animate-leftappear'>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 hover:border-b-4 transition-all'>Ana Sayfa</Link>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 hover:border-b-4 transition-all'>Hakkımızda</Link>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 hover:border-b-4 transition-all'>Projeler</Link>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 hover:border-b-4 transition-all'>Yönetim Kurulu</Link>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 hover:border-b-4 transition-all'>Sponsorlar</Link>
                </nav>
                <div className='w-6 h-3 lg:hidden animate-leftappear flex flex-col items-end' onClick={() => setNavIsShown(true)}>
                    <div className='w-3/4 h-1/6 bg-white'></div>
                    <div className='w-1/2 h-1/6 bg-white' style={{marginTop: '3px'}}></div>
                    <div className='w-1/4 h-1/6 bg-white' style={{marginTop: '3px'}}></div>
                </div>
            </div>
        </div>
        <MobileNav navIsShown={navIsShown} setNavIsShown={setNavIsShown} />
    </>
  )
}

export default Header