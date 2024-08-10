'use client'
import Image from 'next/image';
import pattern from '../../../public/images/bg-pattern-intro-right-desktop.svg';
import pattern2 from '../../../public/images/bg-pattern-intro-left-desktop.svg';
import desktop from '../../../public/images/desktop.png';


const Homebanner = () => {

  return (
    <main className="bg-Dark-Violet min-h-screen text-white flex xs:py-16 md:py-0 md:items-center relative">
    <div className='absolute top-5 z-50 right-0 xs:w-[150px] md:w-[300px] lg:w-[500px]'>
      <Image src={pattern} alt="pattern" width={500} height={500} />
    </div>
    <div className='absolute bottom-0 z-50 left-0 xs:w-[150px] md:w-[300px] lg:w-[500px]'>
      <Image src={pattern2} alt="pattern" width={200} height={200} />
    </div>
    
    <div className='w-10/12 mx-auto flex xs:flex-col items-center md:flex-row gap-10'>
      <div className='flex w-full md:w-[600px] flex-col gap-6'>
      <hr className='w-20 border-b-[2px] border-red-500' />
        <h1 className='xl:text-5xl lg:text-3xl md:text-xl xs:text-2xl font-semibold '>Transforming Supermarkets into <br /> Efficient  Profitable Enterprises</h1>
        <p className='lg:text-lg xs:text-sm font-medium leading-6'>
         Denodata Business Solutions is a retail consulting firm aimed at offering top class retail service solutions and consultancy to enable new and growing retail businesses achieve their retail objectives thereby boosting profitability and safe guarding company assets. This is achieved through efficient business processes, recruitment, staff training, general inventory management procurement guidelines and recommendations.
        </p>
        {/* <div onClick={handleReadMoreClick} className=" bg-red-500 hover:bg-red-950 w-32 rounded-md py-2">
              <button className="px-2 mx-auto flex items-center justify-center cursor-pointer text-sm">Read More</button> 
          </div> */}
        
      </div>
      
          <div className='xl:w-[500px] md:w-[600px] w-full xs:mt-10 md:mt-0 xl:mt-10  '>
            <Image src={desktop} alt="pattern" className='p-2'  />
          </div>
     
    </div>
  </main>
  )
}

export default Homebanner




