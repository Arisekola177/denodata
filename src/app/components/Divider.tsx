import Image from 'next/image'
import divider from '../../../public/images/Slash Section Divider 12.svg'

const Divider = () => {
  return (
    <div className='w-full'>
       <Image src={divider} alt='divider' />
    </div>
  )
}

export default Divider