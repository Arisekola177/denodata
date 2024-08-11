'use client'
import Image from 'next/image';
import pattern from '../../../public/images/bg-pattern-intro-right-desktop.svg';
import pattern2 from '../../../public/images/bg-pattern-intro-left-desktop.svg';
import deno from '../../../public/images/deno.jpg';
import { motion } from "framer-motion";
import {fadeIn, slideIn, staggerContainer, textVariant} from '@/app/utils/motion'
const Homebanner = () => {

  return (
    <motion.main 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className="bg-Dark-Violet min-h-screen text-white flex xs:py-16 md:py-0 md:items-center relative">
    <motion.div 
     variants={fadeIn('right', 'tween', 0.5, 5)}
    className='absolute top-5 z-50 right-0 xs:w-[150px] md:w-[300px] lg:w-[400px]'>
      <Image src={pattern} alt="pattern" width={400} height={400} />
    </motion.div>
    <motion.div 
     variants={fadeIn('left', 'tween', 0.5, 5)}
    className='absolute bottom-0 z-50 left-0 xs:w-[150px] md:w-[300px] lg:w-[500px]'>
      <Image src={pattern2} alt="pattern" width={200} height={200} />
    </motion.div>
    
    <div className='w-10/12 mx-auto flex xs:flex-col items-center md:flex-row gap-10'>
      <motion.div 
      variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex w-full md:w-[600px] flex-col gap-6'>
      <hr className='w-20 border-b-[2px] border-red-500' />
        <motion.h1 
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='xl:text-5xl lg:text-3xl md:text-xl xs:text-2xl font-semibold '>Transforming Supermarkets <br/>
        into Efficient and<br/>
         Profitable Enterprises - <br/>
         Whether You're Starting Out or Scaling Up.</motion.h1>
        <motion.p 
         variants={textVariant(1.4)}
        className='lg:text-lg xs:text-sm font-medium leading-6'>
         Denodata Business Solutions is a retail consulting firm aimed at offering top class retail service solutions and consultancy to enable new and growing retail businesses achieve their retail objectives thereby boosting profitability and safe guarding company assets. This is achieved through efficient business processes, recruitment, staff training, general inventory management procurement guidelines and recommendations.
        </motion.p>
      
        
      </motion.div>
      
          <motion.div
           variants={slideIn('right', 'tween', 0.2, 4)}
            className='xl:w-[500px] md:w-[600px] w-full xs:mt-10 md:mt-0 xl:mt-10   '>
            <Image src={deno} alt="pattern" className='p-2 rounded-lg'  />
          </motion.div>
     
    </div>
  </motion.main>
  )
}

export default Homebanner




