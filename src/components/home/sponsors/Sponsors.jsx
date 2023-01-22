import React from 'react'
import { useInView } from 'react-intersection-observer';

const Sponsors = () => {
    const { ref: sponsorTitleRef, inView: sponsorTitleIsVisible } = useInView()
    const { ref: sponsorsRef, inView: sponsorsIsVisible } = useInView()
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center text-4xl font-bold'>
        <h2 ref={sponsorTitleRef} className={`mb-5 ${sponsorTitleIsVisible ? 'animate-rightappear' : ''}`}>Sponsorlar</h2>
        <div ref={sponsorsRef} className={`flex items-center ${sponsorsIsVisible ? 'animate-bottomappear' : ''}`}>
            <a className='opacity-75 hover:opacity-100' href="https://www.sentosatour.com.tr/" target="_blank"><img className='mx-4' src="https://yarininotesinde.org/img/sponsors/sentosa.png" alt="Sentosa Tour" width="128" /></a>
            <a className='opacity-75 hover:opacity-100' href="https://www.sysmex.com.tr/" target="_blank"><img className='mx-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Sysmex_company_logo.svg/1200px-Sysmex_company_logo.svg.png" alt="Sentosa Tour" width="128" /></a>
        </div>
    </div>
  )
}

export default Sponsors