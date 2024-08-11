'use client'
import { FaInstagram, FaSnapchat, FaTiktok, FaYoutube } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdFacebook } from "react-icons/md"
import GotoTopButton from '@/app/components/GotoTopButton'
import GotoWhatsapp from '@/app/components/GotoWhatsapp'
import logo from '../../../public/images/logo.jpg'
import Image from "next/image"
import Link from "next/link"
import { slideIn, staggerContainer } from "../utils/motion"
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="w-full bg-very-dark-violet text-white mt-16">
      <motion.div 
         variants={slideIn('down', 'tween', 0.2, 1)}
      className="lg:w-10/12 xs:w-11/12 mx-auto flex xs:flex-col md:flex-row gap-4 justify-between py-16 px-8">
          <div className="flex flex-col gap-3">
          <Link href='/'>
             <div className="flex items-center hover:border-b-[2px] border-slate-800 cursor-pointer">
              <div className="w-[30px]">
                 <Image src={logo} alt="logo" className="w-full" />
              </div>
              <div className="flex flex-col mt-1 ">
             <h1 className="uppercase font-bold xs:text-[14px] lg:text-[18px] leading-none">Denodata</h1>
              <p className="text-[8px] font-mono mt-0">The Retail Store Consultants</p>
              </div>

        
              </div>
              </Link>
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
           
             <h2>Useful Links</h2>
         
              <Link className='text-xs hover:text-slate-700' href='/'>Home</Link>
               <Link className='text-xs hover:text-slate-700' href='/about'>About</Link>
               <Link className='text-xs hover:text-slate-700' href='/service'>Services</Link>
               <Link className='text-xs hover:text-slate-700' href='/contact'>Contact</Link>
          </div>

          <div className="flex flex-col  gap-3">
          <h2>Follow us on our socials</h2>
                   <div className="flex items-center gap-4">
                   <MdFacebook />
                   <FaInstagram />
                   <FaYoutube />
                   <FaTiktok />
                   <FaSnapchat />
                </div>
                   
          </div>
              
      </motion.div>
      <p  className="border-b-[1px] w-10/12 mx-auto"/>
        <motion.div 
          variants={slideIn('down', 'tween', 0.2, 2)}
        className="py-4 text-center">
            <p className="text-sm font-normal">© 2024 Denodata. All Rights Reserved.</p> 
            <p className="font-mono text-xs">Developed by Aztech.</p>
        </motion.div>
        <GotoTopButton />
        <GotoWhatsapp />
    </motion.div>
  )
}

export default Footer