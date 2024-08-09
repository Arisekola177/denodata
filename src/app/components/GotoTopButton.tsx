
'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      <div className="fixed bottom-4 py-2 px-4 right-4 transition-all duration-300 bg-slate-500 text-white rounded-full shadow-lg hover:bg-slate-700">
        <Link href="/" onClick={handleScrollToTop}>
          <button>
            <FaArrowUp />
          </button>
        </Link>
      </div>
    )
  );
};

export default GoToTopButton;

