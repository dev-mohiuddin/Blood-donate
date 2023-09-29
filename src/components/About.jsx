

import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import aboutbg from '../assets/image/aboutbg.jpg'
import emon from '../assets/image/emon.jpg'
import shadin from '../assets/image/shadin.jpg'
import sofikul from '../assets/image/sofikul.jpg'
import sojib from '../assets/image/sojib.jpg'

function About() {
  return (
    <div className='w-full bg-white'>
        <div className='relative h-[calc(100vh-200px)]'>
          <img className='absolute top-0 right-0 w-full h-full object-cover' src={aboutbg} alt="about" />
          <div className='absolute h-full w-full bg-black/60 top-0 right-0'>
            <div className='relative container py-5 '>
              <h1 className='text-2xl md:text-4xl font-bold uppercase text-white text text-center'>About Us</h1>
              <p className='text-base md:text-xl font-medium text-gray-200 text-center py-2'>Established on 28 September 2021, Operations started on 20 March 2022 at Govt Shamsul Haque College, Elenga.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative top-36 pb-8'>

                <div className='flex flex-col justify-center items-center bg-slate-100  gap-2 p-4 rounded-md shadow-md'>
                  <div className='w-52 h-52 rounded-full border-8 border-white shadow-md  overflow-hidden'>
                    <img className='w-full h-full object-cover hover:scale-105 duration-300' src={emon} alt="emon" />
                  </div>
                  <h1 className='text-xl uppercase text-gray-800 font-bold'>Emon talukdar</h1>
                  <h3 className='tex-lg uppercase text-gray-700 font-medium mb-2'>Founder</h3>
                  <div className='flex w-full justify-center items-center gap-5 py-2 bg-slate-200'>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsFacebook/></span>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsInstagram /></span>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsTwitter/></span>
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center bg-slate-100  gap-2 p-4 rounded-md shadow-md'>
                  <div className='w-52 h-52 rounded-full border-8 border-white shadow-md  overflow-hidden'>
                    <img className='w-full h-full object-cover hover:scale-105 duration-300' src={sofikul} alt="emon" />
                  </div>
                  <h1 className='text-xl uppercase text-gray-800 font-bold'>Emon talukdar</h1>
                  <h3 className='tex-lg uppercase text-gray-700 font-medium mb-2'>chairman</h3>
                  <div className='flex w-full justify-center items-center gap-5 py-2 bg-slate-200'>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsFacebook/></span>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsInstagram /></span>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsTwitter/></span>
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center bg-slate-100  gap-2 p-4 rounded-md shadow-md'>
                  <div className='w-52 h-52 rounded-full border-8 border-white shadow-md  overflow-hidden'>
                    <img className='w-full h-full object-cover hover:scale-105 duration-300' src={shadin} alt="emon" />
                  </div>
                  <h1 className='text-xl uppercase text-gray-800 font-bold'>Shadin Hasan</h1>
                  <h3 className='tex-lg uppercase text-gray-700 font-medium mb-2'>co founder</h3>
                  <div className='flex w-full justify-center items-center gap-5 py-2 bg-slate-200'>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsFacebook/></span>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsInstagram /></span>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsTwitter/></span>
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center bg-slate-100  gap-2 p-4 rounded-md shadow-md'>
                  <div className='w-52 h-52 rounded-full border-8 border-white shadow-md  overflow-hidden'>
                    <img className='w-full h-full object-cover hover:scale-105 duration-300' src={sojib} alt="emon" />
                  </div>
                  <h1 className='text-xl uppercase text-gray-800 font-bold'>Md. Sojib</h1>
                  <h3 className='tex-lg uppercase text-gray-700 font-medium mb-2'>General Secretary</h3>
                  <div className='flex w-full justify-center items-center gap-5 py-2 bg-slate-200'>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsFacebook/></span>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsInstagram /></span>
                    <span className='text-lg text-gray-800 cursor-pointer hover:text-red-600 duration-300'><BsTwitter/></span>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About