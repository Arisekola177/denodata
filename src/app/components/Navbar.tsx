'use client'
import Link from "next/link"
import logo from '../../../public/images/logo.jpg'
import Image from "next/image"
import { useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { IoClose } from "react-icons/io5"
import { fadeIn, staggerContainer } from "../utils/motion"
import {motion} from 'framer-motion'
const Navbar = () => {

  const [open, setOpen] = useState(false)


  const ToggleNav = () => {
    setOpen(!open)
  }
  return (
    <motion.div 
    variants={staggerContainer(0.2, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="w-ful text-slate-800 py-4">
        <motion.div 
         variants={fadeIn('up', 'tween', 0.2, 2)}
        className="lg:w-10/12 xs:w-11/12 mx-auto flex justify-between items-center">
          <Link href='/'>
             <div className="flex items-center hover:border-b-[2px] border-slate-800 cursor-pointer">
              <div className="w-[40px]">
                 <Image src={logo} alt="logo" className="w-full" />
              </div>
              <div className="flex flex-col mt-3">
             <h1 className="uppercase font-bold xs:text-[14px] lg:text-[18px] leading-none">Denodata</h1>
              <p className="text-[8px] font-mono mt-0">The Retail Store Consultants</p>
              </div>

        
              </div>
              </Link>
             
               <div className="hidden md:flex text-[10px] font-medium uppercase items-center gap-6">
                <Link className="hover:font-bold font-semibold hover:text-red-500 hover:border-b-[2px] border-red-500 duration-300" href='/'>Home</Link>
                <Link className="hover:font-bold font-semibold hover:text-red-500 hover:border-b-[2px] border-red-500 duration-300" href='/about'>About</Link>
                <Link className="hover:font-bold font-semibold hover:text-red-500 hover:border-b-[2px] border-red-500 duration-300" href='/service'>Services</Link>
                <div className="border-[2px] border-white bg-red-500 hover:bg-red-950 py-2 rounded-md">
                <Link className=" px-6 text-white font-semibold" href='/contact'>Contact</Link> 
                </div>
                
              </div>
              <div onClick={ToggleNav} className="block md:hidden">
                {
                  open ?  (null) : 
                  (<CiMenuFries />)
                }

           <div className={`absolute z-[50] top-5 left-0 w-[80%] bg-white transition-all shadow-md duration-500 ease-in-out px-3 py-4 ${open? 'left-0 ':'left-[-490px]'}`}>
            
            <div className='flex justify-between'>
               <div className='flex flex-col gap-4'>
              <div className='p-4  '>
              <Link href='/'>
             <div className="flex items-center hover:border-b-[2px] border-slate-800 cursor-pointer">
              <div className="w-[30px]">
                 <Image src={logo} alt="logo" className="w-full" />
              </div>
              <h1 className="uppercase font-bold xs:text-sm md:text-sm lg:text-lg mt-2">Denodata</h1>
              </div>
              </Link>  
              
               <p className='text-[10px]'>Business Solutions</p>
              </div>
               <div className='flex flex-col gap-4 px-4 py-2'>
               <Link className='text-[10px]' href='/'>Home</Link>
               <Link className='text-[10px]' href='/about'>About</Link>
               <Link className='text-[10px]' href='/service'>Services</Link>
               <Link className='text-[10px] bg-red-500 text-white rounded-md py-1 px-3' href='/contact'>Contact</Link>
               </div>
               </div>

               <div className='px-4 py-2'>
                {
                   open ? (  <IoClose />) : ( null)
                }
               </div>
            </div>
          </div>
           
              </div>
              
        </motion.div>
    </motion.div>
  )
}

export default Navbar