import Image from 'next/image'
import addide from '../../../public/images/addide.png'
import eden from '../../../public/images/eden.svg'
import recourse from '../../../public/images/recourse.jpg'
import wondermart from '../../../public/images/wondermart.jpg'
import evron from '../../../public/images/evron2.png'


const TrustedAlly = () => {
  return (
    <div className="w-full py-10 bg-[#3E3E70]">
         <div className="w-10/12 mx-auto text-white grid xs:grid-cols-1 md:grid-cols-2 items-center">
            <div className='col-span-1 md:text-start xs:text-xs md:text-sm xs:text-center xs:mb-4 md:mb-0'>
                <h2>Trusted by top companies <br /> worldwide</h2>
            </div>
            <div className='flex items-center gap-4 col-span-1'>
                <div className='w-[100px]'>
                    <Image src={eden} alt='eden' className='w-full' />
                </div>
                <div className='w-[50px]'>
                    <Image src={addide} alt='eden' />
                </div>
                <div className='w-[100px]'>
                    <Image src={recourse} alt='eden' />
                </div>
                <div className='w-[100px]'>
                    <Image src={wondermart} alt='eden' />
                </div>
                <div className='w-[100px]'>
                    <Image src={evron} alt='eden' />
                </div>
               
            </div>
        </div> 
    </div>
  )
}

export default TrustedAlly