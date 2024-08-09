
'use client'
import Image from 'next/image'
import about from '../../../public/images/about.jpg'
import Link from 'next/link'
import { serviceData } from '../constant/data'
import { useRouter } from 'next/navigation'

const Page = () => {

  const router = useRouter()
  const backgroundColors = [
    'hsl(270, 9%, 17%)', // Very Dark Violet
    'hsl(273, 4%, 51%)', // Dark Grayish Violet
    'hsl(246, 20%, 68%)',   // Very Light Gray
    'hsl(256, 26%, 20%)',// Dark Violet
    'hsl(216, 30%, 68%)' // Grayish Blue
  ];


  return (
    <div className='w-full overflow-hidden'>
      <div className='relative h-[300px] bg-Dark-Violet'>
        
      
      <div className='absolute xs:top-1/2 md:top-1/3 left-1/3 flex flex-col gap-4'>
        <h1 className='md:text-4xl xs:text-xl font-bold text-white'>Services</h1>
        <div className='flex items-center md:gap-4 xs:gap-2 text-white'>
          <Link className='hover:text-slate-400 md:text-base xs:text-xs' href='/'>Home</Link>
          <p> /</p>
          <h2 className='md:text-base xs:text-xs'>Our Services</h2>
        </div>
      </div>
      </div>
      <div className='w-11/12 grid xs:grid-cols-1 md:grid-cols-2 gap-4 mx-auto mt-10'>
        {serviceData.map((service: any, index: number) => {
          const bgColor = backgroundColors[index % backgroundColors.length];
          return (
            <div key={service.id} className='grid xs:grid-cols-1 xl:grid-cols-3 gap-2 p-4 rounded-md shadow-lg' style={{ backgroundColor: bgColor }}>
              <div className='hidden xl:block col-span-1 w-[200px] h-[200px] relative'>
                <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className='rounded-md' />
              </div>
              <div className='col-span-2 md:px-4 xs:px-2  text-white flex flex-col gap-4'>
                <h2 className='text-xl md:text-start xs:text-center font-bold'>{service.title}</h2>
                <p className='mt-2 text-justify text-sm'>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Page;
