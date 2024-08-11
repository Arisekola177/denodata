

"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {motion} from 'framer-motion'
import { clients } from "../constant/data";
import Image from "next/image";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "./CustomTexts";

const Clients = () => {
  return (
    <motion.div
    variants={staggerContainer(0.2, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="w-full mt-20 shadow-lg py-10">
      
          <TypingText title="Our Clients" textStyles="text-center mb-10"/>
       <motion.div 
       variants={fadeIn('right', 'tween', 0.2, 3)}
       className="w-9/12 mx-auto flex flex-col items-center justify-center">
        <Carousel className="mt-10">
          <CarouselContent className="flex">
            {clients.map((item, index) => (
              <CarouselItem key={index} className="basis-1/3 flex-shrink-0 flex justify-center">
                <Image
                  src={item.image}
                  alt={item.location}
                  className="lg:w-[150px] lg:h-[150px] xs:w-[100px] xs:h-[100px] object-contain"
                  width={150}
                  height={150}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="text-red-500 hover:bg-red-500 hover:text-white" />
          <CarouselPrevious className="text-red-500 hover:bg-red-500 hover:text-white" />
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default Clients;

  