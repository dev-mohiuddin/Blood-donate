
import { GiSelfLove } from 'react-icons/gi'
import { FiUserCheck } from 'react-icons/fi'
import {BiDonateBlood} from 'react-icons/bi'
import {FaAward} from 'react-icons/fa'

function Achievements() {
    return (
        <div className='w-full '>
            <div className='container py-5 md:py-10'>
                <h1 className='text-2xl md:text-4xl text-center text-gray-700 font-bold uppercase mb-5'>Our Achievements</h1>
                <p className='text-center text-base md:text-xl font-medium text-gray-700'>We have been working since 2021/09/28 with a prestigious vision to helping patient to provide blood.</p>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 md:py-10 '>
                    <div className='flex flex-col gap-5 group justify-center items-center cursor-pointer bg-white p-4 rounded-md shadow hover:scale-105 duration-300'>
                        <span className='text-red-600 text-6xl'><BiDonateBlood /></span>
                        <span className='text-3xl font-bold text-gray-700 group-hover:text-red-600'>2668</span>
                        <span className='text-3xl font-normal text-gray-700'>Blood Request</span>
                    </div>
                    <div className='flex flex-col gap-5 group justify-center items-center cursor-pointer bg-white p-4 rounded-md shadow hover:scale-105 duration-300'>
                        <span className='text-red-600 text-6xl'><GiSelfLove /></span>
                        <span className='text-3xl font-bold text-gray-700 group-hover:text-red-600'>2659</span>
                        <span className='text-3xl font-normal text-gray-700'>Success Smile</span>
                    </div>
                    <div className='flex flex-col gap-5 group justify-center items-center cursor-pointer bg-white p-4 rounded-md shadow hover:scale-105 duration-300'>
                        <span className='text-red-600 text-6xl'><FiUserCheck /></span>
                        <span className='text-3xl font-bold text-gray-700 group-hover:text-red-600'>770</span>
                        <span className='text-3xl font-normal text-gray-700'>Persional Donors</span>
                    </div>
                    <div className='flex flex-col gap-5 group justify-center items-center cursor-pointer bg-white p-4 rounded-md shadow hover:scale-105 duration-300'>
                        <span className='text-red-600 text-6xl'><FaAward /></span>
                        <span className='text-3xl font-bold text-gray-700 group-hover:text-red-600'>06</span>
                        <span className='text-3xl font-normal text-gray-700'>Award</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements