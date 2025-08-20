import { BriefcaseBusiness, CalendarCheck, Gift } from 'lucide-react'
import React from 'react'

const Validate = () => {
  return (
    <section className='bg-[#FDF0E9] py-10'>
        <div className='bg-[#EF6D58] gift p-16 w-fit relative h-fit -top-28 rounded-full ml-9'>
            <Gift className='w-14 h-14 text-white' />
        </div>
        <div className='flex items-center justify-between mx-24 -mt-6'>
            <div className='space-y-4'>
                <h1 className='uppercase text-lg text-[#EF6D58] font-medium'>Get Started</h1>
                <p className='text-4xl capitalize max-w-96 text-[#391400] font-bold'>I help Companies Move faster</p>
                <button className='bg-[#EF6D58] text-xl px-3 py-2 rounded font-medium text-white'>Contact Me</button>
            </div>
            <p className='max-w-96 text-[#391400] leading-10 text-xl hidden lg:inline-block'>
                Put themselves in the shoes it's meant to partner on the long run
            </p>
            <div className='w-64 h-36 bg-white rounded-lg flex flex-col gap-0.5 pl-2 py-2 hidden lg:inline-block'>
                <div className='w-10 h-10 rounded-full bg-[#F7CC47]'></div>
                <div className='bg-[#F5DED1] h-6 w-2/3 rounded-2xl'></div>
                <div className='bg-[#F5DED1] h-18 w-2/3 rounded-2xl'></div>
            </div>
        </div>

        <div className='flex flex-wrap items-center justify-center mt-7 rounded-xl'>
            <div className='flex items-center border border-[#F3D1BF] pr-24 pl-12 py-5 gap-4 w-96'>
                <div className='bg-[#EF6D58] p-8 w-fit  h-fit rounded-full'>
                    <CalendarCheck className='w-14 h-14 text-white' />
                </div>
                <div>
                    <p className='text-3xl font-bold text-[#391400]'>1+ <span className='block text-lg font-light'>years of experience</span></p>
                </div>
            </div>
            <div className='flex items-center border border-[#F3D1BF] pr-24 pl-12 py-5 gap-4'>
                <div className='bg-[#EF6D58] p-8 w-fit  h-fit rounded-full'>
                    <BriefcaseBusiness  className='w-14 h-14 text-white' />
                </div>
                <div>
                    <p className='text-3xl font-bold text-[#391400]'>10+ <span className='block text-lg font-light'>projects done</span></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Validate