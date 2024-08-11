
'use client'
import { services } from '../constant/data';
import Image from 'next/image';
import arrow from '../../../public/images/arrow.png'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from '../utils/motion';
import {TypingText} from '../components/CustomTexts'
const Services = () => {

  return (
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className="w-full shadow-lg py-10 mt-20">
      <div className="flex items-center justify-center flex-col gap-2 mb-6">
      <TypingText title="Our Services" textStyles="text-center" />
       
        <motion.p 
         variants={fadeIn ('up', 'tween', 0.2, 2)}
        className="md:w-[600px] xs:w-full mx-auto text-center xs:p-2 md:p-0 text-sm">
           Denodata Business Solutions offers retail services to our clients in line with industry standards, 
           in areas where the requisite  capabilities don not exist, we adopt partnership with stakeholders 
           in such areas of capabilities to maximize synergy operations.
        </motion.p>
      </div>

      <motion.div 
       variants={staggerContainer}
       initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.30}}
      className="xl:w-10/12 xs:w-full xs:px-2 xl:px-0  mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 xs:gap-3 xl:gap-6">
        <motion.div 
        variants={fadeIn ('up', 'tween', 0.2, 3)}
        className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 xs:px-4 md:px-0">
           {
              services.map((service:any) => (
                <motion.div 
                variants={fadeIn ('up', 'tween', 0.2, 3)}
                className='flex items-center gap-2' key={service.id}>
                  <Image src={arrow} width={30} height={30} alt='arrow' />
                  <p className='text-slate-800 text-sm '>{service.service}</p>
                </motion.div>
              ))
           }
        </motion.div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
      >
          <div className="rounded-md">
            <iframe
              src="https://www.youtube.com/embed/8MYwk1UC8G8"
              title="A YouTube video"
              className=" w-full h-[350px]"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        
          <motion.div 
           variants={fadeIn('down', 'tween', 0.3, 3)}
          className="mt-2">
            <h2 className="xs:text-xl md:text-2xl xs:py-4 md:py-0  text-center  text-slate-800 font-semibold">
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
        
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
