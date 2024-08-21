'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonials } from "../constant/data"
import { fadeIn, slideIn, staggerContainer } from "../utils/motion"
import {motion} from 'framer-motion'
import { TypingText } from "./CustomTexts"


const Testimonials = () => {
  return (
    <motion.div 
    variants={staggerContainer(0.2, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="w-full mt-20">
             <TypingText title="Testimonials" textStyles="text-center mb-10"/>
          <motion.div 
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="w-9/12 mx-auto">
          <Carousel>
            <CarouselContent >
                {
                    testimonials.map((item:any) => (
                        <CarouselItem key={item.name} className="xl:basis-1/3 md:basis-2/3 xs:w-full ">
                  <Card 
                  
                  className="border-[2px] border-gray-500 rounded-md shadow-md hover:bg-Dark-Violet cursor-pointer duration-300 hover:text-white md:h-[250px] ">
                    <CardHeader>
                    <div className="flex items-center justify-center gap-2">
                    <Avatar>
                      <AvatarImage src={item.image} />
                      <AvatarFallback>{item.name}</AvatarFallback>
                    </Avatar>
                      <div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription>{item.title}</CardDescription>
                      </div>
                    </div>
                       </CardHeader>
                         <CardContent className="">
                             <p className="text-sm text-center">"{item.feedback}"</p>
                        </CardContent>
                       
                </Card>
                </CarouselItem>
                    ))
                }
               
         </CarouselContent>
         < CarouselNext className="text-red-500 hover:bg-red-500 hover:text-white"/> 
         < CarouselPrevious className="text-red-500 hover:bg-red-500 hover:text-white"/>
       </Carousel>
     
        </motion.div>
    
    </motion.div>
  )
}

export default Testimonials