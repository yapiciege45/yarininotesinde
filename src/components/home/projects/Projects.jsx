import React from 'react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: projectTitleRef, inView: projectTitleIsVisible } = useInView()
  const { ref: projectsRef, inView: projectsIsVisible } = useInView()

  return (
    <div className='h-screen w-full bg-black/80 text-white flex flex-col items-center justify-center'>
      <h2 ref={projectTitleRef} className={`text-4xl mb-2 font-bold ${projectTitleIsVisible ? 'animate-rightappear' : ''}`}>Projelerimiz</h2>
      <div ref={projectsRef} className={`flex w-full justify-center ${projectsIsVisible ? 'animate-bottomappear' : ''}`}>
        <Link href='/' className='group h-full xl:w-3/12 lg:w-4/12 md:w-5/12 w-5/12 bg-white mx-1 relative'>
          <img src="https://yarininotesinde.org/img/projects/cankiri/afis.png" alt="Çankırı afiş" className='w-full h-full' />
          <div className='absolute h-full w-full bg-black/80 top-0 lg:hidden xl:group-hover:flex flex flex-col justify-center items-center transition-all'>
            <h2 className='md:text-4xl sm:text-3xl text-lg font-bold mt-2'>Çankırı - Ilgaz</h2>
            <h4 className='sm:text-lg text-sm'>23-24 Aralık 2022</h4>
            <h4 className='sm:text-lg text-sm bottom-5 absolute'>Detaylı Bilgi</h4>
          </div>
        </Link>
        <Link href='/' className='group h-full xl:w-3/12 lg:w-4/12 md:w-5/12 w-5/12 bg-white mx-1 relative'>
          <img src="https://yarininotesinde.org/img/projects/soma/afis.jpeg" alt="Soma afiş" className='w-full h-full' />
          <div className='absolute h-full w-full bg-black/80 top-0 lg:hidden xl:group-hover:flex flex flex-col justify-center items-center transition-all'>
            <h2 className='md:text-4xl sm:text-3xl text-lg font-bold mt-2'>Soma - Manisa</h2>
            <h4 className='sm:text-lg text-sm'>23-24 Nisan 2022</h4>
            <h4 className='sm:text-lg text-sm bottom-5 absolute'>Detaylı Bilgi</h4>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Projects