import Image from 'next/image'
import about from '../../../public/images/about.jpg'
import Count from '../components/Count'
import Link from 'next/link'


const page = () => {
  return (
    <div className='w-full overflow-hidden'>
        <div className='relative h-[300px] bg-Dark-Violet '>
           <div className='absolute xs:top-1/2 md:top-1/3 left-1/3 flex flex-col gap-4'>
           <h1 className='md:text-4xl xs:text-xl font-bold text-white'>About Us</h1>
           <div className='flex items-center md:gap-4 xs:gap-2 text-white'>
            <Link  className='hover:text-slate-400 md:text-base xs:text-xs' href='/'>Home</Link>
            <p> /</p>
            <h2 className='md:text-base xs:text-xs'>About Us</h2>
           </div>
        </div>
        </div>
 
        
        <div className='lg:w-10/12 xs:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-8'>
             <div className=''>
             <h1 className='md:text-2xl xs:text-xl mb-5 font-bold text-red-500'>About Us</h1>
                <div className='text-justify font-medium'>
                With over 13 years of experience, we have successfully set up more 
               than 80 retail stores across Lagos, Ogun, Akwa Ibom, Oyo, and Delta states.
              Our expertise extends to managing 70% of the retail stores and supermarkets
              established under our retainership agreements, implementing controls that 
              reduced losses and shrinkage to under 2%. We lead strategic executive 
              walkthroughs, conduct quarterly competitor research to enhance profit 
              margins by at least 20%, and prepare biannual budgets for corporate management approval.
               Our dedicated team of over 120 sales professionals, trained and coordinated by us,
                has driven our success, 
            alongside our meticulous handling of data entry, freight deliveries, 
            and inventory management to ensure accuracy and efficiency.
  
            </div>
             </div>
              <div className="md:mt-14 ">
             <iframe src="https://www.youtube.com/embed/8MYwk1UC8G8"
            title="A YouTube video" 
            className="w-full h-[350px]"
            frameBorder="0"
            allowFullScreen
             />
             
           
              </div>
             <div>
                
        </div>
        </div>
         <div className='lg:w-10/12 md:w-11/12 mx-auto mt-5'>
            <Count />
         <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 xs:px-4 md:px-0'>
             <div className='bg-Dark-Violet text-white xs:p-2 md:p-4 lg:p-8 rounded-md shadow-md'>
                  <h1 className='lg:text-2xl text-lg font-bold text-center text-red-500'>Vision</h1>
                  <p className='py-4 xl:text-sm xs:text-xs text-center'>To be the leading provider of innovative retail solutions, empowering businesses 
                    to achieve operational excellence and deliver exceptional customer experiences.
                  </p> 
              </div>
             <div className='bg-Dark-Violet text-white xs:p-2 md:p-4 lg:p-8 rounded-md shadow-md'>
                <h1 className='lg:text-2xl text-lg font-bold text-center text-red-500'>Mission </h1>
                <p className='py-4 xl:text-sm xs:text-xs text-center'>
                Our mission is to revolutionize the retail industry by offering comprehensive consulting, advanced software solutions, and expert training services. 
                We are committed to helping our clients optimize their operations, improve profitability, and adapt to the evolving market landscape.
                </p>
             </div>
             <div className='bg-Dark-Violet text-white xs:p-2 md:p-4 lg:p-8 rounded-md shadow-md'>
                <h1 className='lg:text-2xl text-lg font-bold text-center text-red-500'>Social Responsibilty </h1>
                <p className='py-4 xl:text-sm xs:text-xs text-center'>
                Denodata is committed to supporting local communities, promoting environmental sustainability, ensuring employee well-being, 
                upholding ethical business practices, and investing in educational initiatives.
                </p>
             </div>
         </div>
       
        </div> 
    </div>
  )
}

export default page