import Image from "next/image"
import pattern from '../../../public/images/bg-pattern-intro-right-desktop.svg';
import desktop from '../../../public/images/inventory2.jpg';
import pexel from '../../../public/images/obi.jpg';
import pattern2 from '../../../public/images/bg-pattern-intro-left-desktop.svg';
import Link from "next/link";
const About = () => {
  return (
    <div className="w-full mt-20">
                <div className="flex items-center justify-center flex-col gap-2 mb-6">
                 <h2 className=" xl:text-2xl xs:text-xl font-semibold text-red-500">About Us</h2>
                   <p className="border-b-[2px] border-red-500 w-48 mx-auto" />
                  
             </div>
           <div className="xl:w-10/12 xs:w-11/12 px-8 py-20 bg-Dark-Violet mx-auto grid xs:grid-cols-1 md:grid-cols-2 md:gap-6 xs:gap-3 rounded-md shadow-md text-white relative">
           <div >
            <h2 className="font-bold xs:text-2xl xl:text-5xl">We Are Denodata <br />
           <span className="text-red-500">Business Solutions</span>  
             </h2>
            <p className="text-justify py-4 leading-8 xs:text-xs xl:text-sm">
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
             </p>

             <div className="bg-red-500 w-32 rounded-md p-2">
              <button className="flex items-center justify-center text-sm mx-auto">
               <Link href='/about'> Read More</Link>
                </button>
             </div>
            </div>
          <div className="xs:mt-2 md:mt-0">
           
          <iframe src="https://www.youtube.com/embed/xC4XeqB9idU"
            title="A YouTube video" 
            className="w-full h-[350px]"
             frameBorder="0"
             allowFullScreen
             />
        
             
            </div>
            <div className='absolute top-5 z-50 right-0 xs:w-[100px] md:w-[200px] lg:w-[300px]'>
            <Image src={pattern} alt="pattern" width={300} height={300} />
           </div>
           <div className='absolute top-0 left-4 xs:w-[80px] md:w-[120px] lg:w-[150px]'>
            <Image src={pattern2} alt="pattern" width={150} height={150} />
           </div>
         </div>
    </div>
  )
}

export default About

