import React from 'react'

const Testimonials = () => {
  return (
    <section id='testimonials' className=' flex items-center bg-[#fce7de] justify-center gap-4 flex-col py-7'>
        <h1 className='uppercase text-lg text-[#EF6D58] font-medium'>Testimonials</h1>
        <h1 className='text-6xl capitalize max-w-xl text-center text-[#391400] font-bold'>What my clients are saying</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center  mx-5 mt-7'>
            <div className='flex flex-col items-start gap-4 px-10 py-16 border border-[#F3D1BF] rounded-md'>
                <p>⭐⭐⭐⭐⭐</p>
                <p className='max-w-sm text-[#391400] text-sm leading-6 font-light'>
                    Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.
                </p>
                <div className='flex items-center gap-4'>
                    <img src="/bro_d_pic.png" className='w-20 h-20 rounded-full' alt="" />
                    <div>
                        <p className='text-[#391400] text-2xl font-bold'>Denis Okoye</p>
                        <p className='text-sm font-normal text-[#391400]'>CEO candle light</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start gap-4 px-10 py-16 border bg-white border-[#F3D1BF] rounded-md'>
                <p>⭐⭐⭐⭐⭐</p>
                <p className='max-w-sm text-[#391400] text-sm leading-6 font-light'>
                    Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.
                </p>
                <div className='flex items-center gap-4'>
                    <img src="/bro_d_pic.png" className='w-20 h-20 rounded-full' alt="" />
                    <div>
                        <p className='text-[#391400] text-2xl font-bold'>Denis Okoye</p>
                        <p className='text-sm font-normal text-[#391400]'>CEO candle light</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start gap-4 px-10 py-16 border border-[#F3D1BF] rounded-md'>
                <p>⭐⭐⭐⭐⭐</p>
                <p className='max-w-sm text-[#391400] text-sm leading-6 font-light'>
                    Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.
                </p>
                <div className='flex items-center gap-4'>
                    <img src="/bro_d_pic.png" className='w-20 h-20 rounded-full' alt="" />
                    <div>
                        <p className='text-[#391400] text-2xl font-bold'>Denis Okoye</p>
                        <p className='text-sm font-normal text-[#391400]'>CEO candle light</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials