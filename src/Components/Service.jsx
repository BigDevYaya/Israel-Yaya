import { LayoutTemplate, Presentation } from 'lucide-react'
import React from 'react'

const Service = () => {
  return (
    <section className='h-[80vh] flex items-center bg-[#FDF0E9] justify-center gap-4 flex-col'>
        <p className='uppercase text-lg text-[#EF6D58] font-medium'>Service</p>
        <h1 className='text-6xl capitalize max-w-md text-center text-[#391400] font-bold'>How can i help you with</h1>

        <div className='flex flex-wrap px-7 mt-5'>
            <div className='col-span-1 lg:col-span-1 space-y-4 border border-[#F3D1BF] rounded-l-md px-6 py-10'>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#EF6D58] p-3 text-white rounded-full'>
                        <LayoutTemplate />
                    </div>
                    <h3 className='text-[#391400] text-lg font-bold capitalize'>Frontend Development</h3>
                </div>
                <p className='max-w-sm  text-[#391400] text-sm  leading-6'>I am a frontend developer fully focused on bringing plain webpages to life with my skill making websites scalable and efficient</p>
            </div>
            <div className='col-span-1 lg:col-span-1 space-y-4 border border-[#F3D1BF] rounded-r-md px-6 py-10'>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#EF6D58] p-3 text-white rounded-full'>
                    <Presentation/>
                    </div>
                    <h3 className='text-[#391400] text-lg font-bold capitalize'>Graphics Design</h3>
                </div>
                <p className='max-w-sm text-[#391400] text-sm  leading-6'>Looking for a beautiful logo or want some other design post, well you can contact me for cheap and beautiful designs made with passion</p>
            </div>
        </div>
    </section>
  )
}

export default Service