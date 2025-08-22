import { MoveUpRight } from 'lucide-react'
import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='bg-[#00001a]  px-10 py-10'>
        <div className='opacity-0 transition-opacity duration-500  flex flex-col items-start justify-center gap-4 projects-section'>
            <div className='flex flex-col items-start gap-2 lg:px-10 my-4'> 
                <h1 className='uppercase text-lg text-[#EF6D58] font-medium'>Projects</h1>
                <h5 className='text-5xl text-white font-semibold'>Latest Projects</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-full lg:px-10 mb-4">
                <a className="border p-2 border-[#9B9B9B] relative" href='https://kenpat-college.vercel.app' target='_blank'>
                    <img
                    src="/school.jpg"
                    alt="school"
                    className="lg:w-96 w-[30rem] h-[30rem] object-cover rounded"
                    />
                    <div className='absolute bottom-5 left-5 text-white flex flex-col gap-2'>
                        <div className='flex items-center gap-2 bg-white text-[#391400] w-fit px-2 py-1 rounded-full'>
                            <p className=''>Visit</p>
                            <MoveUpRight />
                        </div>
                        <h3 className='font-semibold text-3xl'>School Landing Page</h3>
                    </div>
                </a>
                <a className="border p-2 border-[#9B9B9B] relative" href='https://task-me-6x3i.vercel.app' target='_blank'>
                    <img
                    src="/freelance.jpg"
                    alt="tasking"
                    className="lg:w-96 w-[30rem] h-[30rem] object-cover rounded"
                    />
                    <div className='absolute bottom-5 left-5 text-white flex flex-col gap-2'>
                        <div className='flex items-center gap-2 bg-white text-[#391400] w-fit px-2 py-1 rounded-full'>
                            <p className=''>Visit</p>
                            <MoveUpRight />
                        </div>
                        <h3 className='font-semibold text-3xl'>Tasks for Jobs</h3>
                    </div>
                </a>
                <a className="border p-2 border-[#9B9B9B] relative" href='https://trivia-master-six.vercel.app' target='_blank'>
                    <img
                    src="/trivia-quiz.jpg"
                    alt="trivia quiz"
                    className="lg:w-96 w-[30rem] h-[30rem] object-cover rounded"
                    />
                    <div className='absolute bottom-5 left-5 text-white flex flex-col gap-2'>
                        <div className='flex items-center gap-2 bg-white text-[#391400] w-fit px-2 py-1 rounded-full'>
                            <p className=''>Visit</p>
                            <MoveUpRight />
                        </div>
                        <h3 className='font-semibold text-3xl'>Trivia Quiz App</h3>
                    </div>
                </a>
            </div>
        </div>

    </section >
  )
}

export default Projects