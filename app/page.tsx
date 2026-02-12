"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Terminal from "@/components/terminal";

export default function Home() {
  return (
    <>
    {/* <Header /> */}

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

      <section className="h-screen w-full md:px-24 md:py-16">
        <Terminal />
      </section>
    </main>
    </>
  );
}
