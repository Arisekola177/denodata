import { FaInstagram, FaSnapchat, FaTiktok, FaYoutube } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdFacebook } from "react-icons/md"
import GotoTopButton from '@/app/components/GotoTopButton'
import GotoWhatsapp from '@/app/components/GotoWhatsapp'
import logo from '../../../public/images/logo.jpg'
import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <div className="w-full bg-very-dark-violet text-white mt-16">
      <div className="lg:w-10/12 xs:w-11/12 mx-auto flex xs:flex-col md:flex-row gap-4 justify-between py-16 px-8">
          <div className="flex flex-col gap-3">
          <p className="border-t-[1px] w-40" />
              <div className="flex items-center cursor-pointer">
              <div className="w-[26px]">
                 <Image src={logo} alt="logo" className="w-full" />
              </div>
              <h1 className="uppercase font-bold md:text-lg xs:text-sm mt-2">Denodata</h1>
              </div> 
         <p className="border-b-[1px] w-40" />
               <div className=" xs:mt-5 flex flex-col gap-2">
                 <div className="flex flex-col md:flex-row gap-2">
                  <FaLocationDot />
                  <div>
                    <p className="text-xs "> 18b, Ayinke Street, Akoka, <br /> Yaba, Lagos State.</p>
                    <p className="text-xs  py-2">No 2, Lugbe F.H.A, <br /> 3rd Avenue, NIA House, Abuja</p>
                  </div>
                  
                 </div>
               </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="border-t-[1px] w-40" />
             <h2>Useful Links</h2>
             <p className="border-b-[1px] w-40" />
              <Link className='text-xs hover:text-slate-700' href='/'>Home</Link>
               <Link className='text-xs hover:text-slate-700' href='/about'>About</Link>
               <Link className='text-xs hover:text-slate-700' href='/service'>Services</Link>
               <Link className='text-xs hover:text-slate-700' href='/contact'>Contact</Link>
          </div>

          <div className="flex flex-col  gap-3">
                   <p className="border-t-[1px] w-40" />
                   <div className="flex items-center gap-4">
                   <MdFacebook />
                   <FaInstagram />
                   <FaYoutube />
                   <FaTiktok />
                   <FaSnapchat />
                </div>
                   <p className="border-b-[1px] w-40" />
          </div>
              
      </div>
      <p  className="border-b-[1px] w-10/12 mx-auto"/>
        <div className="py-4 text-center">
            <p className="text-sm font-normal">© 2024 Denodata. All Rights Reserved.</p> 
            <p className="font-mono text-xs">Developed by Aztech.</p>
        </div>
        <GotoTopButton />
        <GotoWhatsapp />
    </div>
  )
}

export default Footer