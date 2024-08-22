'use client'
import Image from 'next/image';
import fill from '../../../public/images/Fill 133.png';
import box from '../../../public/images/38.png';
import desktop from '../../../public/images/desktop.png';
import { motion } from "framer-motion";
import {fadeIn, slideIn, staggerContainer, textVariant} from '@/app/utils/motion'
const Homebanner = () => {

  return (
    <motion.main 
    variants={staggerContainer(0.2, 0.5)}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
       className="bg-[#F6F8FF] flex py-24 md:items-center relative">
    <motion.div 
     variants={fadeIn('right', 'tween', 0.5, 5)}
    className='absolute xs:top-3 md:top-10 xs:left-10 md:left-40'>
      <Image src={fill} alt="pattern" width={20} height={20} />
    </motion.div>
    <motion.div 
     variants={fadeIn('left', 'tween', 0.5, 5)}
    className='absolute xs:top-5 md:top-16 z-50 xs:right-8 md:right-40'>
      <Image src={box} alt="pattern" width={40} height={40} />
    </motion.div>
    
    <div className='w-10/12 mx-auto grid xs:grid-cols-1 md:grid-cols-2 gap-10'>
      <motion.div 
      variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex w-full xs:mt-6 lg:mt-16 flex-col gap-6'>
      <hr className='w-20 border-b-[2px] border-red-500' /> 
        <motion.h1 
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='xl:text-4xl lg:text-3xl md:text-lg xs:text-2xl text-blue-800 font-semibold'>Transforming Supermarkets <br/>
         into Efficient and<br/>
         Profitable Enterprises - <br/>
         <span className='text-red-500'>
         Whether You're Starting Out or Scaling Up.
         </span>
        </motion.h1>
        <motion.p 
         variants={textVariant(1.4)}
        className='lg:text-lg xs:text-sm md:text-xs font-medium leading-6 text-purple-800'>
         Denodata Business Solutions is a retail consulting firm aimed at offering top class retail service solutions and consultancy to enable new and growing retail businesses achieve their retail objectives thereby boosting profitability and safe guarding company assets. This is achieved through efficient business processes, recruitment, staff training, general inventory management procurement guidelines and recommendations.
        </motion.p>
      
        
      </motion.div>
      
          <motion.div
           variants={slideIn('right', 'tween', 0.2, 4)}
            className=' w-full    '>
            <Image src={desktop} alt="pattern" className='p-2 rounded-lg'  />
          </motion.div>
     
    </div>
  </motion.main>
  )
}

export default Homebanner




