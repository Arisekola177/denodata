import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './ContactForm'
import Mapping from '../components/Mapping'
const page = () => {
  return (
    <div className="w-full overflow-hidden">
         <div className='relative  h-[300px] bg-Dark-Violet  '>
         
        
        <div className='absolute xs:top-1/2 md:top-1/3 left-1/3 flex flex-col gap-4'>
           <h1 className='md:text-4xl xs:text-xl font-bold text-white'>Contact Us</h1>
           <div className='flex items-center md:gap-4 xs:gap-2 text-white'>
            <Link  className='hover:text-slate-400 md:text-base xs:text-xs' href='/'>Home</Link>
            <p> /</p>
            <h2 className=' md:text-base xs:text-xs'>Contact Us</h2>
           </div>
        </div>
        </div>

         <div className="lg:w-10/12 xs:w-11/12 mx-auto mt-20">
            <ContactForm />
            <div className='mt-20'>
            <Mapping />
            </div>
           
        </div>
    </div>
  )
}

export default page