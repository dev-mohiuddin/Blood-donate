

import {AiOutlineBars} from 'react-icons/ai'
import { useState } from "react"
import { navLink } from "../assets/data"
import MobileMenu from "./MobileMenu"

function Header() {

    const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="w-full bg-white">
        <div className="container h-14 md:h-16 flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold  ">Blood ‍<span className="text-red-600">Donet</span> </h1>
            </div>
            <div>
                <span onClick={()=>setMobileMenu(true)} className="text-xl text-gray-800 cursor-pointer md:hidden"><AiOutlineBars /></span>
                {
                    mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />
                }
                <ul className=" hidden md:flex items-center gap-5 font-medium text-xl text-gray-800">
                    {
                        navLink?.map((link)=>(
                            <li className="cursor-pointer hover:text-red-600 duration-300" key={link.path}>{link.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header