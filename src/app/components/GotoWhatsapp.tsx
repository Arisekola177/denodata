'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import whatsapp from '../../../public/images/download.png';

const GotoWhatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "+2348074194566";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-5 left-4">
        <div className="flex justify-between items-center cursor-pointer">
          <Link href={whatsappLink} target="_blank">
            <Image src={whatsapp} width={40} height={40} alt="whatsapp" />
          </Link>
          <p className="bg-Dark-Violet text-white py-2 px-4 rounded-md animate-pulse">
            Chat with us?
          </p>
        </div>
      </div>
    )
  );
};

export default GotoWhatsapp;
