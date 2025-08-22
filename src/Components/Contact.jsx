import { Mail, MapPinCheck, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='bg-[#00001a] flex flex-col lg:flex-row items-center justify-center gap-16 py-10 px-5'>
        <div className='bg-white  rounded flex flex-col items-start lg:px-10 px-3 py-8'>
            <h1 className='text-3xl capitalize max-w-xl text-center text-[#391400] font-bold'>Get in touch</h1>
            <form className='flex flex-col mt-3 gap-4 items-end' action="">
                <input type="text" className='border-2 border-[#F3D1BF] lg:w-xl w-80 px-4 py-2 rounded placeholder:text-[#391400] placeholder:font-light' placeholder='Your email' />
                <input type="text" className='border-2 border-[#F3D1BF] lg:w-xl w-80 px-4 py-2 rounded placeholder:text-[#391400] placeholder:font-light' placeholder='Subject' />
                <textarea placeholder='Message' className='border-2 border-[#F3D1BF] lg:w-xl w-80 px-4 py-2 rounded placeholder:text-[#391400] placeholder:font-light' rows="5"></textarea>
                <button type='submit' className='bg-[#EF6D58] text-xl px-3 py-2 rounded font-medium text-white'>Submit now</button>
            </form>
        </div>
        <div className='text-white flex flex-col gap-4'>
            <h1 className='uppercase text-lg text-[#EF6D58] font-medium'>Contact</h1>
            <h1 className='text-4xl capitalize max-w-md  font-bold'>Contact Me</h1>
            <p className='text-gray-400 font-normal'>If you would love to hire me or have any more enquires</p>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#EF6D58] p-5 w-fit  h-fit rounded-full'>
                        <MapPinCheck className='text-white' />
                    </div>
                    <p className='capitalize'>ajara tako, badagry lagos state, nigeria</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#EF6D58] p-5 w-fit  h-fit rounded-full'>
                        <Phone  className='text-white'/>
                    </div>
                    <p className='capitalize'>+2347041400350</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#EF6D58] p-5 w-fit  h-fit rounded-full'>
                        <Mail className='text-white' />
                    </div>
                    <p>yayaisrael99@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact