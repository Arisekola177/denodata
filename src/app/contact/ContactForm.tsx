
'use client'

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaUser, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationPin, MdPhone } from 'react-icons/md';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const FormSchema = z.object({
  fullname: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(45, "Full name must be less than 45 characters")
    .regex(/^[a-zA-Z\s-]+$/, "Only alphabets, spaces, and hyphens are allowed"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits"),
  message: z
    .string()
    .min(1, "Message cannot be empty"),
});

const ContactForm = () => {
  const [isloading, setIsLoading] = useState<boolean>(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(FormSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      toast('Sending, Please wait.....')
      setIsLoading(true)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setIsLoading(false)
        reset();
      } else {
        toast.error('Failed to send message. Please try again later.');
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('An error occurred. Please try again later.');
       setIsLoading(false)
    }
  };


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <div className='md:col-span-1 xs:col-span-2 flex flex-col gap-4 bg-[#3E3E70]  xs:px-4 xl:px-8 rounded-md shadow-md py-16 text-white'>
        <p className='uppercase'>Let's Talk</p>
        <h2 className='xl:text-2xl md:text-lg '>Speak With Us</h2>
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 bg-white rounded-full shadow-md relative flex items-center justify-center'>
            <MdEmail  className='md:text-xs lg:text-base text-black' />
          </div>
          <div className='flex flex-col'>
            <p className='md:text-xs lg:text-base'>Email:</p>
            <p className='md:text-xs lg:text-base'>denodata.bs@gmail.com</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 bg-white rounded-full shadow-md relative flex items-center justify-center'>
            <MdPhone  className='md:text-xs lg:text-base text-black' />
          </div>
          <div className='flex flex-col'>
            <p className='md:text-xs lg:text-base'>Phone:</p>
            <p className='md:text-xs lg:text-base'>+234(0) 8036254827</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 bg-white rounded-full shadow-md relative flex items-center justify-center'>
            <MdLocationPin  className='md:text-xs lg:text-base text-black' />
          </div>
          <div className='flex flex-col'>
            <p className='md:text-xs lg:text-base'>Address:</p>
            <p className='md:text-xs lg:text-base'>Lagos, Nigeria</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <FaWhatsapp className='text-green-500 border-[2px] border-white rounded-full p-1' size={28} />
          <FaInstagram className='text-red-500 border-[2px] border-white rounded-full p-1' size={28} />
          <FaFacebook className='text-blue-500 border-[2px] border-white rounded-full p-1' size={28} />
          <FaYoutube className='text-red-500 border-[2px] border-white rounded-full p-1' size={28} />
          <FaTiktok className='text-black border-[2px] border-white rounded-full p-1' size={28} />
          <FaTwitter className='text-blue-500 border-[2px] border-white rounded-full p-1' size={28} />
        </div>
      </div>
      <div className='col-span-2 py-4 flex flex-col gap-4'>
        <p className='uppercase'>Get In Touch</p>
        <h2 className='text-2xl text-red-500'>Fill The Form Below</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 gap-4'>
            <div className={`relative col-span-2 md:col-span-1  ${errors?.fullname ? 'mb-3' : 'mb-0'}`} >
              <input
                {...register("fullname")}
                type="text"
                placeholder="Full name"
                className="rounded-lg py-2 px-10 w-full outline-none placeholder:text-sm border-[1px] border-black focus:outline-slate-500"
              />
              <FaUser className='absolute left-2 text-xs top-1/2 transform -translate-y-1/2 cursor-pointer' />
              {errors.fullname && (
                <div className="absolute left-0 top-full mt-1 text-red-500 text-xs">
                  {errors.fullname.message?.toString()}
                </div>
              )}
            </div>
            <div className={`relative col-span-2 md:col-span-1  ${errors?.email ? 'mb-3' : 'mb-0'}`}>
              <input
                {...register("email")}
                type="text"
                placeholder="Email"
                className="rounded-lg py-2 px-10 w-full outline-none placeholder:text-sm border-[1px] border-black focus:outline-slate-500"
              />
              <MdEmail className='absolute left-2 text-xs top-1/2 transform -translate-y-1/2 cursor-pointer' />
              {errors.email && (
                <div className="absolute left-0 top-full mt-1 text-red-500 text-xs">
                  {errors.email.message?.toString()}
                </div>
              )}
            </div>
            <div className={`relative col-span-2 md:col-span-1  ${errors?.phone ? 'mb-3' : 'mb-0'}`}>
              <input
                {...register("phone")}
                type="text"
                placeholder="Phone number"
                className="rounded-lg py-2 px-10 w-full outline-none placeholder:text-sm border-[1px] border-black focus:outline-slate-500"
              />
              <MdPhone className='absolute left-2 text-xs top-1/2 transform -translate-y-1/2 cursor-pointer' />
              {errors.phone && (
                <div className="absolute left-0 top-full mt-1 text-red-500 text-xs">
                  {errors.phone.message?.toString()}
                </div>
              )}
            </div>
            <div className={`relative col-span-2  ${errors?.message ? 'mb-3' : 'mb-0'}`}>
              <textarea
                {...register("message")}
                placeholder="Message"
                className="rounded-lg py-2 px-10 w-full outline-none h-32 placeholder:text-sm border-[1px] border-black focus:outline-slate-500"
              />
              {errors.message && (
                <div className="absolute left-0 top-full mt-1 text-red-500 text-xs">
                  {errors.message.message?.toString()}
                </div>
              )}
            </div>
          </div>
          <button type="submit" className="mt-4 py-2 p-8 bg-blue-500 text-white rounded-lg">
            { isloading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

