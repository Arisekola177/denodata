'use client'
import Image from "next/image"
import { achievements } from "../constant/data"
import arrow from '../../../public/images/arrow.png'
import { fadeIn, slideIn, staggerContainer } from "../utils/motion"
import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";

const Achievement = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="w-full mt-20 shadow-lg py-10">
           <TypingText title="Our Achievements & Accomplishments" textStyles="text-center mb-10"/>
         <motion.div 
          variants={fadeIn('right', 'tween', 0.2, 2)}
         className="w-10/12 mx-auto grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
         {
              achievements.map((achievement:any) => (
                <motion.div 
                variants={slideIn('up', 'tween', 0.2, 3)}
                className='flex items-center gap-2 mt-6' key={achievement.id}>
                  <Image src={arrow} width={30} height={30} alt='arrow' />
                  <p className='text-slate-800 text-sm '>{achievement.service}</p>
                </motion.div>
              ))
           }
        </motion.div>
    </motion.div>
  )
}

export default Achievement