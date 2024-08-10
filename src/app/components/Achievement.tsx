import Image from "next/image"
import { achievements } from "../constant/data"
import arrow from '../../../public/images/arrow.png'

const Achievement = () => {
  return (
    <div className="w-full mt-20 shadow-lg py-10">
        <h1 className=" xs:text-xl md:text-2xl lg:text-3xl mb-10 font-semibold text-red-500 text-center">Our Achievements <br />and Accomplishments</h1>
         <div className="w-10/12 mx-auto grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
         {
              achievements.map((achievement:any) => (
                <div className='flex items-center gap-2 mt-6' key={achievement.id}>
                  <Image src={arrow} width={30} height={30} alt='arrow' />
                  <p className='text-slate-800 text-sm '>{achievement.service}</p>
                </div>
              ))
           }
        </div>
    </div>
  )
}

export default Achievement