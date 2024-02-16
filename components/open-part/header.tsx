"use client"

import Image from "next/image";
import Link from "next/link";
import Socials from 'components/open-part/socials'

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={'/'} className="bg-white px-2 rounded-sm">
            <h1 className="text-orange-700 font-bold text-4xl">Star<span className="text-blue-600">Line</span></h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
