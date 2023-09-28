

import Slider from "react-slick";
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import heroimg1 from '../assets/image/heroimg1.jpg'
import heroimg2 from '../assets/image/heroimg2.jpg'
import heroimg4 from '../assets/image/heroimg4.jpg'

function Hero() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='w-full'>
            <div className=' h-[calc(100vh-64px)] relative'>
                <Slider {...settings}>
                    <div className="flex h-[calc(100vh-64px)] relative">
                        <div className="absolute w-full h-full bg-black/30"></div>
                        <img className="w-full h-full object-cover" src={heroimg4} alt="img" />
                        <div className=" absolute z-50 h-screen w-full left-0 top-0">
                            <div className="container relative flex h-full justify-center items-center md:items-start md:ml-40  flex-col gap-4">
                                <h1 className="text-2xl md:text-3xl font-normal text-gray-300">Donate blood, save life !</h1>
                                <h1 className="text-3xl md:text-6xl uppercase font-bold text-gray-300">YOUR BLOOD <br className="uppercase" /> can be bring smile. <br className="uppercase" /> in other person face</h1>
                                <div className="flex gap-5 mt-8">
                                    <button className="bg-red-600 outline-0 px-2 py-2 md:px-6 md:py-3 text-base md:text-2xl font-semibold capitalize text-white rounded-md hover:bg-red-800 duration-300">Donate now</button>
                                    <button className="bg-gray-600 outline-0 px-2 py-2 md:px-6 md:py-3 text-base md:text-2xl font-semibold capitalize text-white rounded-md hover:bg-gray-700  duration-300">call : 017********</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-[calc(100vh-64px)] relative">
                        <div className="absolute w-full h-full bg-black/50"></div>
                        <img className="w-full h-full object-cover" src={heroimg1} alt="img" />
                        <div className="absolute z-50 h-screen w-full left-0 top-0">
                            <div className="relative container flex h-full justify-center items-center md:items-start md:ml-40  flex-col gap-4">
                                <h1 className="text-2xl md:text-3xl font-normal text-gray-300">Donate blood, save life !</h1>
                                <h1 className="text-3xl md:text-6xl uppercase font-bold text-gray-300">Donate BLOOD <br className="uppercase" /> and inspires others.</h1>
                                <div className="flex gap-5 mt-8">
                                    <button className="bg-red-600 outline-0 px-2 py-2 md:px-6 md:py-3 text-base md:text-2xl font-semibold capitalize text-white rounded-md hover:bg-red-800 duration-300">Donate now</button>
                                    <button className="bg-gray-600 outline-0 px-2 py-2 md:px-6 md:py-3 text-base md:text-2xl font-semibold capitalize text-white rounded-md hover:bg-gray-700  duration-300">call : 017********</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-[calc(100vh-64px)] relative">
                        <div className="absolute w-full h-full bg-black/30"></div>
                        <img className="w-full h-full object-cover" src={heroimg2} alt="img" />
                        <div className="absolute z-50 h-screen w-full left-0 top-0">
                            <div className="relative container flex h-full justify-center items-center md:items-start md:ml-40  flex-col gap-4">
                                <h1 className="text-2xl md:text-3xl font-normal text-gray-300">Donate blood, save life !</h1>
                                <h1 className="text-3xl md:text-6xl uppercase font-bold text-gray-300">JOIN WITH US  <br className="uppercase" /> and help other persion.</h1>
                                <div className="flex gap-5 mt-8">
                                    <button className="bg-red-600 outline-0 px-2 py-2 md:px-6 md:py-3 text-base md:text-2xl font-semibold capitalize text-white rounded-md hover:bg-red-800 duration-300">Donate now</button>
                                    <button className="bg-gray-600 outline-0 px-2 py-2 md:px-6 md:py-3 text-base md:text-2xl font-semibold capitalize text-white rounded-md hover:bg-gray-700  duration-300">call : 017********</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </Slider>
            </div>
        </div>
    )
}

export default Hero

function SampleNextArrow({onClick}){
    return (
        <span onClick={onClick} className="absolute flex h-full items-center top-0 right-0 z-10" >
            <span className="cursor-pointer text-gray-100 px-0.5 md:px-2 md:py-1 bg-red-600/50 rounded-l-md" >
                <AiOutlineArrowRight size={25} />
            </span>
        </span>
    )
}

function SamplePrevArrow({onClick}){
    return (
        <span onClick={onClick} className="absolute flex h-full items-center top-0 left-0 z-10" >
            <span className="cursor-pointer text-gray-100 px-0.5 md:px-2 md:py-1 bg-red-600/50 rounded-r-md">
                <AiOutlineArrowLeft size={25} />
            </span>
        </span>
    )
}