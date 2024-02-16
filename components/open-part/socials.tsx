"use client"
import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiWhatsappLine
} from 'react-icons/ri'
import { IoLocationOutline } from 'react-icons/io5'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg mr-12">
      <Link href={'https://www.facebook.com/profile.php?id=61555034791155&mibextid=ZbWKwL'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/star_line2024?igsh=MTc1NG1zMnUyYnM0eQ=='} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://wa.me/996999933988'} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine />
      </Link>
      <Link href={'https://maps.app.goo.gl/g7EqCxq4t3cnanMg7'} className="hover:text-accent transition-all duration-300">
        <IoLocationOutline />
      </Link>
    </div>
  )
};

export default Socials;
