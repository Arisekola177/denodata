import Link from 'next/link';
import service from '../../../public/images/business-1.webp'
import Image from 'next/image'
import { serviceData } from '../constant/data';
import Achievement from '../components/Achievement';

const Page = () => {

  return (
    <div className='w-full'>
       <div className='relative h-[300px] bg-Dark-Violet '>
           <div className='absolute xs:top-1/2 md:top-1/3 left-1/3 flex flex-col gap-4'>
           <h1 className='md:text-4xl xs:text-xl font-bold text-white'>Our Service</h1>
           <div className='flex items-center md:gap-4 xs:gap-2 text-white'>
            <Link  className='hover:text-slate-400 md:text-base xs:text-xs' href='/'>Home</Link>
            <p> /</p>
            <h2 className='md:text-base xs:text-xs '>Our services</h2>
           </div>
        </div>
        </div>
      <div className='w-9/12 mx-auto '>
           <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 mt-10'>
               <div className='xl:w-[500px] w-full'>
                 <Image src={service} alt='service' className='w-full' />
               </div>
               <div className=''>
                <h2 className='lg:text-5xl xs:text-center md:text-start text-2xl lg:leading-normal font-bold text-slate-800'>Improve Your <br />
                 <span className='text-red-500'> Operations and</span> <br /> Drive Business Value</h2>
                  <p className=" text-start lg:leading-6 mt-4 xs:text-center md:text-start text-sm lg:text-lg">
           Denodata Business Solutions offers retail services to our clients in line with industry standards, 
           in areas where the requisite  capabilities don not exist, we adopt partnership with stakeholders 
           in such areas of capabilities to maximize synergy operations.
        </p>
               </div>
           </div>
      </div>
      <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
          {
            serviceData.map((service:any, index:number) => (
              <div className='shadow-md rounded-md py-8 px-4 flex flex-col hover:shadow-xl cursor-pointer gap-4' key={index}>
                   <p className='text-xl xs:text-center md:text-start font-semibold text-red-900'>{service.title}</p>
                   <p className='text-sm  xs:text-justify md:text-start leading-6'>{service.description}</p>
              </div>
            ))
          }
      </div>
      <Achievement />
    </div>
  )
}

export default Page;
