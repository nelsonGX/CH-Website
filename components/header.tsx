import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolledDown(true);
      } else {
        setHasScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full py-4 px-16 space-x-4 items-center bg-zinc-900/50 backdrop-blur-md transition-all duration-300 fixed ${hasScrolledDown ? "" : "opacity-0"}`}>
      <Link className="text-2xl font-bold" href="/">About CH</Link>
    </header>
  )
}