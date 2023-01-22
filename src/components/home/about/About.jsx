import React from 'react'
import { useInView } from 'react-intersection-observer';

const About = (props) => {
    const { ref: aboutRef, inView: aboutIsVisible } = useInView()
    
  return (
    <section className='w-full bg-black text-white md:text-3xl text-xl min-h-screen bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url('${props.img}')`}}>
        <div className='min-h-screen bg-black/80 w-full'>
            <div className="md:5/6 sm:w-3/4 w-11/12 m-auto min-h-screen flex justify-center items-center">
                <div ref={aboutRef} className={`element drop-shadow-about ${aboutIsVisible ? 'animate-rightappear' : ''}`}>
                    <h2 className='md:text-6xl text-3xl'>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About