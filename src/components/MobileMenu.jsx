
import {RxCross2} from 'react-icons/rx'

function MobileMenu({setMobileMenu}) {
  return (
    <div className='absolute h-screen w-full bg-black/20 top-0 right-0 flex justify-end z-50'>
        <div className='relative w-64 bg-white h-screen'>
            <span onClick={()=> setMobileMenu(false)} className='absolute top-5 right-4 text-xl cursor-pointer'><RxCross2 /></span>

        </div>
    </div>
  )
}

export default MobileMenu