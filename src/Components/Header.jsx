import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 text-white'>
        <h1 className='text-3xl font-extrabold uppercase'>Yaya</h1>
        <nav className='hidden lg:inline'>
            <ul className='flex space-x-4'>
                <li>About</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
        </nav>

        <button className='hidden lg:inline-block border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#00003d] transition-colors cursor-pointer'>
            Contact
        </button>

        <button className='lg:hidden flex flex-col gap-2 border-2 border-white px-4 py-2 rounded-lg cursor-pointer'> 
          <span className='bg-white h-0.5 w-5'></span>
          <span className='bg-white h-0.5 w-5'></span>
          <span className='bg-white h-0.5 w-5'></span>
        </button>
    </header>
  )
}

export default Header