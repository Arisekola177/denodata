
'use client'
import { services } from '../constant/data';
import ico from '../../../public/images/ico-bkg.png'
import Image from 'next/image';
import arrow from '../../../public/images/arrow.png'

const Services = () => {


  return (
    <div className="w-full shadow-lg py-10 mt-20">
      <div className="flex items-center justify-center flex-col gap-2 mb-6">
        <h2 className="  xs:text-xl md:text-2xl lg:text-3x font-semibold text-red-500">Our Services</h2>
       
        <p className="md:w-[600px] xs:w-full mx-auto text-center xs:p-2 md:p-0 text-sm">
           Denodata Business Solutions offers retail services to our clients in line with industry standards, 
           in areas where the requisite  capabilities don not exist, we adopt partnership with stakeholders 
           in such areas of capabilities to maximize synergy operations.
        </p>
      </div>

      <div className="xl:w-10/12 xs:w-full xs:px-2 xl:px-0  mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 xs:gap-3 xl:gap-6">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 xs:px-4 md:px-0">
           {
              services.map((service:any) => (
                <div className='flex items-center gap-2' key={service.id}>
                  <Image src={arrow} width={30} height={30} alt='arrow' />
                  <p className='text-slate-800 text-sm '>{service.service}</p>
                </div>
              ))
           }
        </div>
        <div>
          <div className="rounded-md">
            <iframe
              src="https://www.youtube.com/embed/8MYwk1UC8G8"
              title="A YouTube video"
              className=" w-full h-[350px]"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        
          <div className="mt-2">
            <h2 className="xs:text-xl md:text-2xl xs:py-4 md:py-0  text-center  text-slate-800 font-semibold">
              Assuring you of our <br />
              <span className="text-red-500">best services</span>
            </h2>
            <p className="text-slate-800 text-sm mt-4 text-justify">
              Denodata Limited offers Business Solutions that support a wide range of businesses for reaching their customers, increasing sales, and brand awareness. All of our business solutions provide the managerial decision-making environment that enables organizations to achieve business outcomes and realize the business impact.
            </p>
            <p className="text-slate-800 text-sm mt-4 text-justify">
              We recognize the need for quality services to enhance performance and appreciable profit in the retail industry we serve you to know latest happenings and implements policies strategies to achieve high standards driven by high turnover and profit figures.
            </p>
          </div>
          {/* <div>
            <Count />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
