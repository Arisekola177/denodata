'use client'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import {motion} from 'framer-motion'
import { TypingText } from './CustomTexts';

const Mapping = dynamic(() => import('./Mapping'), { ssr: false });

const ContactLeft = () => {
  return (
    <motion.div 
    variants={staggerContainer(0.2, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className='w-full mt-20'>
       <TypingText title="Contact Us" textStyles="text-center mb-10"/>
    <motion.div 
     variants={fadeIn('left', 'tween', 0.2, 2)}
     className="lg:w-10/12 w-11/12 mx-auto bg-Dark-Violet text-white rounded-md shadow-md grid grid-cols-1 md:grid-cols-3 xs:p-4 md:p-8 xs:gap-4 md:gap-6">
      <motion.div 
      variants={slideIn('up', 'tween', 0.2, 3)}
      className="col-span-1 flex  flex-col gap-3 justify-center">
        <motion.h1
          variants={textVariant(1.1)} 
        className='lg:text-2xl xs:text-xl font-extralight uppercase'>Contact Us</motion.h1>
          <motion.div 
           variants={textVariant(1.2)} 
          className='flex flex-col gap-2'>
            <h3 className='text-sm font-semibold'>Solutions and Services</h3>
            <p className='font-light text-sm'>Please contact our manager</p>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                <FaPhone className='md:text-xs lg:text-base' />
                <p className='md:text-xs lg:text-base'>+234(0) 8036254827</p>
              </div>
              <div className='flex items-center gap-2'>
                <FaEnvelope className='md:text-xs lg:text-base' />
                <p className='md:text-xs lg:text-base'>denodata.bs@gmail.com</p>
              </div>
            </div>
            <Link href='/contact' className='bg-red-500 mt-4 w-40 text-white rounded-md py-2 hover:bg-red-800 px-4'>
              <button className='flex items-center justify-center w-full mx-auto'>Contact now</button>
            </Link>
          </motion.div>
      </motion.div>
      <motion.div
       variants={slideIn('up', 'tween', 0.2, 3)}
      className='col-span-2 '>
        <Mapping />
      </motion.div>
    </motion.div>
    </motion.div>
  );
};

export default ContactLeft;
