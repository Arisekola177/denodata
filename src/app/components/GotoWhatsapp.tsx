import Link from "next/link";
import Image from "next/image";
import whatsapp from '../../../public/images/download.png';

const GotoWhatsapp = () => {
  const whatsappNumber = "08064272889";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-5 left-4 ">
      <div className="flex justify-between cursor-pointer items-center">
        <Link href={whatsappLink} target="_blank">
          <Image src={whatsapp} width={40} height={40} alt="whatsapp" />
        </Link>
        <p className="bg-Dark-Violet text-white py-2 px-4 rounded-md animate-pulse">
          Chat with us?
        </p>
      </div>
    </div>
  );
};

export default GotoWhatsapp;
