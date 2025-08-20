import React from 'react'
import Header from './Header'

const HeroSection = () => {
  return (
    <section className='bg-[#00003d] lg:h-svh pb-7 text-white w-full'>
        <Header />

        <div className='flex items-center flex-col-reverse lg:flex-row justify-center gap-7 lg:gap-40 lg:ml-28 lg:mt-28'>
            <div className='space-y-2'>
                <p className='text-[#EF6D58]'>Hi There!</p>
                <h1 className='text-7xl font-extrabold leading-right'>
                    I'm <span className='text-[#911dc0] block'>Israel Yaya</span>
                </h1>
                <p>I offer <span className='text-[#e3afff]'>Frontend Development</span></p>
                <button className='bg-[#EF6D58] px-3 py-2 rounded font-medium'>See My work</button>
            </div>

            {/* Developer Image */}
            <div className='relative flex-1 lg:h-48 h-32'>
                <div className='bg-gray-700/50 hidden rounded-full w-52 h-52 lg:top-1/2 top-0 lg:left-48 left-0 lg:absolute lg:block'></div>
                <div className='w-52 h-24 rounded-lg overflow-hidden bg-white hidden lg:absolute top-2/3 left-22 z-50 lg:flex px-1 gap-4 py-1  transform'>
                  <div className='bg-[#EF6D58] w-10 h-10 rounded-full'>
                  </div>
                  <div className=' flex-1 flex flex-col justify-center gap-1'>
                    <span className='bg-gray-700/20 h-6 w-2/3 rounded-2xl'></span>
                    <span className='bg-gray-700/20 h-8 w-2/4 rounded-2xl'></span>
                    <span className='bg-gray-700/20 h-24 w-full rounded-md'></span>
                  </div>
                </div>
                  <div className='lg:absolute lg:-bottom-36 bottom-0  lg:left-2/6 left-0 transform'>
                    <img src="./bro_d_pic.png" className='h-96 rounded-t-full ' alt="" />
                  </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection