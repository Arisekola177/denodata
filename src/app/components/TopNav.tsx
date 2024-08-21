import React from 'react'
import { FaClock, FaEnvelope, FaInstagram, FaPhone, FaSnapchat, FaTiktok, FaYoutube } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'

const TopNav = () => {
  return (
    <div className="hidden md:block bg-[#3E3E70] text-white py-4 sticky top-0 z-50">
          <div className="lg:w-10/12 md:w-11/12 mx-auto flex items-center justify-between">
               <div className="flex items-center md:gap-2 lg:gap-4">
                  <div className="flex items-center gap-1">
                    <FaEnvelope className='md:text-xs lg:text-sm' />
                    <p  className='md:text-xs lg:text-sm'>denodata.bs@gmail.com</p>
                  </div>
                  <div>|</div>
                  <div className="flex items-center gap-1">
                    <FaPhone className='md:text-xs lg:text-sm' />
                    <p className='md:text-xs lg:text-base'>+234(0) 8036254827</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <FaClock  className='md:text-xs lg:text-sm' />
                  <p className='md:text-xs lg:text-sm'>9:00AM - 5:00PM</p>
                </div>
                <div>
                   |
                </div>
                <div className="flex items-center gap-4">
                   <MdFacebook />
                   <FaInstagram />
                   <FaYoutube />
                   <FaTiktok />
                   <FaSnapchat />
                </div>
               </div>
          </div>
        </div> 
  )
}

export default TopNav