'use client'
import Count from '../components/Count'
import Link from 'next/link'
import Achievement from '../components/Achievement'
import {motion} from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../utils/motion'
import { TypingText } from '../components/CustomTexts'

const About = () => {
  return (
    <motion.div
    variants={staggerContainer(0.2, 0.5)}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className='w-full overflow-hidden'>
        <motion.div 
          
          className='relative h-[200px] bg-[#3E3E70] '>
           <div className='absolute xs:top-1/2 md:top-1/3 left-1/3 flex flex-col gap-4'>
           <h1 className='md:text-4xl xs:text-xl font-bold text-white'>About Us</h1>
           <div className='flex items-center md:gap-4 xs:gap-2 text-white'>
            <Link  className='hover:text-slate-400 md:text-base xs:text-xs' href='/'>Home</Link>
            <p> /</p>
            <h2 className='md:text-base xs:text-xs'>About Us</h2>
           </div>
        </div>
        </motion.div>
 
        <div className='bg-[#F6F8FF]'>
        <motion.div 
        variants={slideIn('left', 'tween', 0.2, 2)}
        className='lg:w-10/12 xs:w-11/12 mx-auto grid py-8 xs:mt-0 grid-cols-1 md:grid-cols-2 gap-6'>
             <div className=''>
              <TypingText title="About Us" textStyles="text-center md:text-start mb-5"/>
                <div className='text-justify font-normal leading-8 mt-5'>
                Denodata Business Solutions is a retail consulting firm aimed at offering top class retail service solutions and consultancy to enable new and growing retail businesses achieve their retail
             objectives thereby boosting profitability and safe guarding company assets. This is achieved through efficient business processes, recruitment, staff training, general inventory management 
             procurement guidelines and recommendations. We keep you abreast of the latest retail information and techniques in retail industry. Denodata Business Solutions has a dedicated team of highly experienced professionals from various aspects of the retail industry bringing their rich ideas innovations, skills practical methods and solutions to retail challenges in order to drive turnover and on the other hand reducing losses to the barest minimum.
            </div>
             </div>
              <div 
              
              className="md:mt-14 ">
             <iframe src="https://www.youtube.com/embed/8MYwk1UC8G8"
            title="A YouTube video" 
            className="w-full h-[350px]"
            frameBorder="0"
            allowFullScreen
             />
             
           
              </div>
             <div>
                
        </div>
        </motion.div>
        
        </div>
         <div 
        
         className='lg:w-10/12 md:w-11/12 w-full xs:px-4 md:px-0 mx-auto mt-5'>
            <Count />
      <motion.div 
          variants={fadeIn('right', 'tween', 0.2, )}
         className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 xs:px-4 md:px-0'>
             <div className='bg-[#3E3E70] text-white xs:p-2 md:p-4 lg:p-8 rounded-md shadow-md'>
                  <h1 className='lg:text-2xl text-lg font-bold text-center text-red-500'>Vision</h1>
                  <p className='py-4 xl:text-sm xs:text-xs text-center'>
                     The company's vision is to be excellent company built on innovation and partnership in a view to boost your profitabilty drive in your retail business.
                  </p> 
              </div>
             <div className='bg-[#3E3E70] text-white xs:p-2 md:p-4 lg:p-8 rounded-md shadow-md'>
                <h1 className='lg:text-2xl text-lg font-bold text-center text-red-500'>Mission </h1>
                <p className='py-4 xl:text-sm xs:text-xs text-center'>
                Our mission is to revolutionize the retail industry by offering comprehensive consulting, advanced software solutions, and expert training services. 
                We are committed to helping our clients optimize their operations, improve profitability, and adapt to the evolving market landscape.
                </p>
             </div>
             <div className='bg-[#3E3E70] text-white xs:p-2 md:p-4 lg:p-8 rounded-md shadow-md'>
                <h1 className='lg:text-2xl text-lg font-bold text-center text-red-500'>Social Responsibilty </h1>
                <p className='py-4 xl:text-sm xs:text-xs text-center'>
                Denodata is committed to supporting local communities, promoting environmental sustainability, ensuring employee well-being, 
                upholding ethical business practices, and investing in educational initiatives.
                </p>
             </div>
         </motion.div>
          <Achievement />
        </div> 
    </motion.div>
  )
}

export default About