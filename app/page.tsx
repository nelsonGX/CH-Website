"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
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
    <>
    <header className={`w-full py-4 px-16 space-x-4 items-center bg-zinc-900/50 backdrop-blur-md transition-all duration-300 fixed ${hasScrolledDown ? "" : "opacity-0"}`}>
      <Link className="text-2xl font-bold" href="/">CH Website</Link>
    </header>

    <main className="bg-zinc-800">
      <section className="h-screen items-center justify-center w-full flex flex-col space-y-8">
        <Image src="/assets/hero.png" alt="hero" height={512} width={512} draggable={false} />
        <h1 className="text-6xl font-bold mt-8">CH{"'"}s Website</h1>
        <div className="flex space-x-16 text-lg">
          <Link className="text-white hover:text-[#ac5f7f] transition-all duration-150" target="_blank" href="https://github.com/HaeImCH">GitHub</Link>
          <Link className="text-white hover:text-[#ac5f7f] transition-all duration-150" target="_blank" href="https://blog.thisisch.net">Blog</Link>
          <Link className="text-white hover:text-[#ac5f7f] transition-all duration-150" target="_blank" href="https://x.com/HiThisIsCH">X</Link>
        </div>
      </section>
    </main>
    </>
  );
}
