import Image from 'next/image'
import divider from '../../../public/images/Slash Section Divider 13.svg'

const Divider = () => {
  return (
    <div className='relative w-full'>
       <Image src={divider} alt='divider'  
        width={1920} 
        height={1080} 
        layout='responsive' 
        objectFit='cover'/>
    </div>
  )
}

export default Divider