
'use client'
import Link from 'next/link';
import service from '../../../public/images/business-1.webp'
import component from '../../../public/images/Component 1 (2).png'
import Image from 'next/image'
import { serviceData } from '../constant/data';
import Achievement from '../components/Achievement';
import {motion} from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../utils/motion'
import { TypingText } from '../components/CustomTexts'
const Service = () => {

  return (
    <div  className='w-full'>
       <div className='relative h-[200px] bg-[#3E3E70] '>
           <div className='absolute xs:top-1/2 md:top-1/3 left-1/3 flex flex-col gap-4'>
           <h1 className='md:text-4xl xs:text-xl font-bold text-white'>Our Service</h1>
           <div className='flex items-center md:gap-4 xs:gap-2 text-white'>
            <Link  className='hover:text-slate-400 md:text-base xs:text-xs' href='/'>Home</Link>
            <p> /</p>
            <h2 className='md:text-base xs:text-xs '>Our services</h2>
           </div>
        </div>
        </div>
        <div 
          
          className='bg-[#F6F8FF]'>
      <div
         className='w-9/12 mx-auto '>
           <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 py-16'>
               <div className='xl:w-[500px]'>
                 <Image src={service} alt='service' className='w-full' />
               </div>
               <div className=''>
                <h2 className='lg:text-5xl xs:text-center md:text-start text-2xl font-semibold text-slate-800'>Grow Your <span className='text-red-500'> Business</span><br />
                  <span className=''>With Us.</span></h2>
                  <p className="text-start lg:leading-6 mt-4 text-sm">
           Denodata Business Solutions offers retail services to our clients in line with industry standards, 
           in areas where the requisite  capabilities don not exist, we adopt partnership with stakeholders 
           in such areas of capabilities to maximize synergy operations.
        </p>
               </div>
           </div>
      </div>
      </div> 
       <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
          {
            serviceData.map((service:any, index:number) => (
              <div 
              
              className='flex flex-col bg-white h-auto rounded-md shadow-lg items-start xs:py-5 md:py-10 xs:px-2 md:px-4 gap-2 hover:shadow-2xl duration-300 cursor-pointer' key={index}>
                  <div className='w-[80px]'>
                     <Image src={component} alt='component' />
                  </div>
                   <p className='text-lg xs:text-center md:text-start font-semibold text-red-900'>{service.title}</p>
                   <p className='text-xs text-start leading-6'>{service.description}</p>
              </div>
            ))
          }
      </div>
      <div className='w-10/12 mx-auto'>
      <Achievement />
      </div>
      
    </div>
  )
}

export default Service;
