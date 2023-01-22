import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black/90 text-white text-center'>
        <div className="h-full sm:w-1/2 w-11/12 m-auto p-6">
            <h1 className='text-4xl font-bold'>Yarının Ötesinde</h1>
            <p className='mt-4'>"Çocuklar geleceğimizin güvencesi, yaşama sevincimizdir. Bugünün çocuğunu, yarının büyüğü olarak yetiştirmek hepimizin insanlık görevidir."</p>
            <p className='font-bold text-xl mt-2'>- Mustafa Kemal Atatürk</p>
        </div>
        <hr />
        <div className="h-full sm:w-1/2 w-11/12  m-auto p-6 flex flex-col">
            <a href='tel:02163521105' className='hover:text-orange-500 transition-colors my-2'><i className="fa-solid fa-phone mx-2"></i> 0216 352 11 05</a>
            <a href='mailto:info@yarininotesinde.org' className='hover:text-orange-500 transition-colors my-2'><i className="fa-solid fa-envelope mx-2"></i> info@yarininotesinde.org</a>
        </div>
        <hr />
        <div className="h-full sm:w-1/2 w-11/12  m-auto p-6 flex flex-col">
            <p>Made by Ege Yapıcı</p>
        </div>
    </div>
  )
}

export default Footer