

"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { clients } from "../constant/data";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="w-full mt-20">
      <div className="w-9/12 mx-auto flex flex-col items-center justify-center">
        <h2 className="md:text-2xl xs:text-lg text-red-500 font-semibold mb-4">Our Clients</h2>
        <p className="border-b-[2px] border-red-500 w-52 mx-auto" />
        <Carousel  className="mt-10">
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
      </div>
    </div>
  );
};

export default Clients;

  