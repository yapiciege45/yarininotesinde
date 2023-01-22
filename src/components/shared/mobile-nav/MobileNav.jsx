import Link from 'next/link'
import React from 'react'

const MobileNav = (props) => {
  let mobileNavStyle = {
    right: props.navIsShown ? '0' : '-1000px'
  }
  let backdropStyle = {
    right: props.navIsShown ? '0' : '-5000px'
  }
  return (
    <div className='lg:hidden min-h-screen w-full z-50 bg-black/80 fixed top-0 text-white text-2xl transition-all' style={backdropStyle}>
        <div className='min-h-screen sm:w-1/2 w-3/4 bg-slate-700 fixed top-0 right-0 z-30 flex flex-col items-center transition-all' style={mobileNavStyle}>
                <i className="fa-solid fa-xmark absolute text-2xl top-2 right-5" onClick={() => props.setNavIsShown(false)}></i>
                <Link href='/' className='font-bold text-2xl hover:text-orange-500 transition-colors mt-10'>Yarının Ötesinde</Link>
                <nav className='h-full flex flex-col items-center '>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 transition-all mt-2'>Ana Sayfa</Link>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 transition-all mt-2'>Hakkımızda</Link>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 transition-all mt-2'>Projeler</Link>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 transition-all mt-2'>Yönetim Kurulu</Link>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 transition-all mt-2'>Sponsorlar</Link>
                    <Link href='/' className='h-full flex items-center px-4 hover:text-orange-500 transition-all mt-2'><i className="fa-brands fa-instagram"></i></Link>
                </nav>
        </div>
    </div>
  )
}

export default MobileNav