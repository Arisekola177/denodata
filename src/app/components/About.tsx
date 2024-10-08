'use client'
import Image from "next/image"
import ellipse from '../../../public/images/Ellipse 105.png';
import ellipse2 from '../../../public/images/Ellipse 106.png';
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TypingText } from "./CustomTexts";

const About = () => {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mt-10"
    >
      <TypingText title="About Us" textStyles="text-center mb-10" />
      <motion.div 
        variants={fadeIn('left', 'tween', 0.2, 2)}
        className="xl:w-10/12 xs:w-11/12 px-8 py-20 bg-[#3E3E70] mx-auto grid xs:grid-cols-1 md:grid-cols-2 md:gap-6 xs:gap-3 rounded-md shadow-md relative"
      >
        <motion.div variants={slideIn('up', 'tween', 0.2, 3)}>
          <motion.h2 
            variants={textVariant(1.2)}
            className="font-bold xs:text-2xl text-white xl:text-5xl"
          >
            We Are Denodata <br />
            <span className="text-red-500">Business Solutions</span>  
          </motion.h2>
          <motion.p 
            variants={textVariant(1.3)}
            className="text-justify py-4 leading-8 xs:text-xs text-white xl:text-sm"
          >
            Denodata Business Solutions is a retail consulting firm aimed at offering top class retail service solutions and consultancy to enable new and growing retail businesses achieve their retail
            objectives thereby boosting profitability and safeguarding company assets. This is achieved through efficient business processes, recruitment, staff training, general inventory management 
            procurement guidelines and recommendations. We keep you abreast of the latest retail information and techniques in retail industry. Denodata Business Solutions has a dedicated team of highly experienced professionals from various aspects of the retail industry bringing their rich ideas innovations, skills practical methods and solutions to retail challenges in order to drive turnover and on the other hand reducing losses to the barest minimum.
          </motion.p>

          <motion.div 
            variants={slideIn('up', 'tween', 0.2, 3)}
            className="bg-red-500 w-32 rounded-md p-2"
          >
            <Link href='/about'>
              <button className="flex items-center text-white justify-center text-sm mx-auto">
                Read More
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeIn('right', 'tween', 0.2, 3)}
          className="xs:mt-2 z-50 relative md:mt-0"
        >
          <iframe 
            src="https://www.youtube.com/embed/xC4XeqB9idU"
            title="A YouTube video" 
            className="w-full h-[350px]"
            frameBorder="0"
            allowFullScreen
          />
        </motion.div>

        <div className='absolute bottom-10 left-2/4 w-[100px] '>
          <Image src={ellipse} alt="pattern" width={100} height={100} />
        </div>
        <div className='absolute top-0 right-4 md:w-[150px] xs:w-[100px] '>
          <Image src={ellipse2} alt="pattern" width={150} height={150} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
