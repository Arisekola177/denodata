
'use client'
import Image from "next/image";
import { serviceData } from "../constant/data";
import Count from '../components/Count';
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="w-full mt-20">
      <div className="flex items-center justify-center flex-col gap-2 mb-6">
        <h2 className=" xs:text-xl md:text-2xl font-semibold text-red-500">Our Services</h2>
        <p className="border-b-[2px] border-red-500 w-48 mx-auto" />
        <p className="md:w-[600px] xs:w-full mx-auto text-center xs:p-2 md:p-0 text-sm">
          We offer a comprehensive range of services designed to streamline and enhance your retail operations. Our expertise spans several key areas essential for running a successful retail business.
        </p>
      </div>

      <div className="xl:w-10/12 xs:w-full xs:px-2 xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 xs:gap-3 xl:gap-6">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 md:gap-2 xl:gap-6 xs:px-4 md:px-0">
          {serviceData.map((service: any) => {
            const truncatedContent = truncateText(service.description, 200);
            return (
              <div
                key={service.id}
                className="hover:bg-Dark-Violet hover:text-white text-slate-800 cursor-pointer duration-300 flex flex-col gap-3 px-4 py-5 md:px-2 md:py-2  md:gap-1 shadow-lg rounded-md"
              >
                <div className="w-full h-[150px] xs:p-2 lg:p-2 md:p-0 flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold xs:text-sm md:text-xs lg:text-lg">{service.title}</h2>
                  <p className="text-xs md:text-justify">{truncatedContent}</p>
                  <div className="border-b-[2px] w-16 border-red-500">
                    <button
                      onClick={() => router.push(`/service`)}
                      className="text-red-500 text-xs items-start"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
        
          <div className="mt-6">
            <h2 className="lg:text-4xl xs:py-4 md:py-0 xs:text-2xl text-center  text-slate-800 font-semibold">
              Assuring you of our <br />
              <span className="text-red-500">best services</span>
            </h2>
            <p className="text-slate-800 text-sm mt-4 text-justify">
              Denodata Limited offers Business Solutions that support a wide range of businesses for reaching their customers, increasing sales, and brand awareness. All of our business solutions provide the managerial decision-making environment that enables organizations to achieve business outcomes and realize the business impact.
            </p>
            <p className="text-slate-800 text-sm mt-4 text-justify">
              At Denodata, we help small and large enterprises run their mission-critical systems and operations while modernizing IT, optimizing data architectures, and ensuring security and scalability across public, private, and hybrid clouds. We deploy our technology solutions and services to enable businesses to drive performance, competitiveness, and customer experience.
            </p>
          </div>
          <div>
            <Count />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
