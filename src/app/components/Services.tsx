
'use client'

import Image from 'next/image';
import component from '../../../public/images/Component 1 (1).png'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from '../utils/motion';
import {TypingText} from '../components/CustomTexts'
import Divider from './Divider';
const Services = () => {

  return (
    <motion.div 
    variants={staggerContainer(0.2, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className="w-full bg-[#F6F8FF] shadow-lg py-10 ">
      <div className="flex items-center justify-center mt-10 flex-col gap-2 mb-6">
      <TypingText title="Our Services" textStyles="text-center" />
       
        <motion.p 
         variants={fadeIn ('up', 'tween', 0.2, 2)}
        className="md:w-[600px] xs:w-full mx-auto mb-4 xs:p-2 md:p-0 text-sm text-justify">
           Denodata Business Solutions offers retail services to our clients in line with industry standards, 
           in areas where the requisite  capabilities don not exist, we adopt partnership with stakeholders 
           in such areas of capabilities to maximize synergy operations.
        </motion.p>
      </div>

      <motion.div 
       variants={staggerContainer(0.2, 0.5)}
       initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.30}}
      className="xl:w-10/12 xs:w-full xs:px-2 xl:px-0  mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 xs:gap-3 xl:gap-6">
        <motion.div 
        variants={fadeIn ('up', 'tween', 0.2, 3)}
        className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 xs:px-4 md:px-0 group">
          
                <motion.div 
                variants={fadeIn ('up', 'tween', 0.2, 3)}
                className='flex flex-col bg-white h-auto rounded-md shadow-lg items-start xs:py-5 lg:py-10 xs:px-2 lg:px-4 gap-2 hover:shadow-2xl duration-300 cursor-pointer'>
                  <div className='w-[80px]'>
                     <Image src={component} alt='component' />
                  </div>
                  <h2 className='font-semibold xs:text-lg md:text-sm lg:text-lg'>Retail Store Consultancy</h2>
                  <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur cumque minus sunt facere illum iste excepturi enim dolores molestiae optio, repellendus voluptatum doloremque eveniet praesentium placeat ipsum natus! Numquam, iusto? </p>
                </motion.div>
                
                <motion.div 
                variants={fadeIn ('up', 'tween', 0.2, 3)}
                className='flex flex-col bg-white h-auto rounded-md shadow-lg items-start xs:py-5 lg:py-10 xs:px-2 lg:px-4 gap-2 hover:shadow-2xl duration-300 cursor-pointer '>
                  <div className='w-[80px]'>
                     <Image src={component} alt='component' />
                  </div>
                  <h2 className='font-semibold xs:text-lg md:text-sm lg:text-lg'>Retail Store Consultancy</h2>
                  <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur cumque minus sunt facere illum iste excepturi enim dolores molestiae optio, repellendus voluptatum doloremque eveniet praesentium placeat ipsum natus! Numquam, iusto? </p>
                </motion.div>
              
              
                <motion.div 
                variants={fadeIn ('up', 'tween', 0.2, 3)}
                className='flex flex-col bg-white h-auto rounded-md shadow-lg items-start xs:py-5 lg:py-10 xs:px-2 lg:px-4 gap-2 hover:shadow-2xl duration-300 cursor-pointer'>
                  <div className='w-[80px]'>
                     <Image src={component} alt='component' />
                  </div>
                  <h2 className='font-semibold xs:text-lg md:text-sm lg:text-lg'>Retail Store Consultancy</h2>
                  <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur cumque minus sunt facere illum iste excepturi enim dolores molestiae optio, repellendus voluptatum doloremque eveniet praesentium placeat ipsum natus! Numquam, iusto? </p>
                </motion.div>
              
              
                <motion.div 
                variants={fadeIn ('up', 'tween', 0.2, 3)}
                className='flex flex-col bg-white h-auto rounded-md shadow-lg items-start xs:py-5 lg:py-10 xs:px-2 lg:px-4 gap-2 hover:shadow-2xl duration-300  cursor-pointer'>
                  <div className='w-[80px]'>
                     <Image src={component} alt='component' />
                  </div>
                  <h2 className='font-semibold xs:text-lg md:text-sm lg:text-lg'>Retail Store Consultancy</h2>
                  <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur cumque minus sunt facere illum iste excepturi enim dolores molestiae optio, repellendus voluptatum doloremque eveniet praesentium placeat ipsum natus! Numquam, iusto? </p>
                </motion.div>
              
              <button className='bg-red-500 w-40 mx-auto text-white py-2 px-4 mt-5 rounded-md hover:bg-red-800'>
                Read More
              </button>
               
         
        </motion.div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
      >
          <motion.div 
           variants={fadeIn('down', 'tween', 0.3, 3)}
          className="mt-2">
            <h2 className="xs:text-xl md:text-2xl text-center py-4 text-slate-800 font-semibold">
              Assuring you of our <br />
              <span className="text-red-500">best services</span>
            </h2>
            <p className="text-slate-800 text-sm mt-4 text-justify">
              Denodata Limited offers Business Solutions that support a wide range of businesses for reaching their customers, increasing sales, and brand awareness. All of our business solutions provide the managerial decision-making environment that enables organizations to achieve business outcomes and realize the business impact.
            </p>
            <p className="text-slate-800 text-sm mt-4 text-justify">
              We recognize the need for quality services to enhance performance and appreciable profit in the retail industry we serve you to know latest happenings and implements policies strategies to achieve high standards driven by high turnover and profit figures.
            </p>
          </motion.div>

          <div className="rounded-md mt-6">
            <iframe
              src="https://www.youtube.com/embed/8MYwk1UC8G8"
              title="A YouTube video"
              className=" w-full h-[350px]"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        
       
        
        </motion.div>
      </motion.div>
     
    </motion.div>
  );
};

export default Services;
