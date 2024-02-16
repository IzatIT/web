"use client"

import { Image } from "@mantine/core";

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image style={{
        filter: "contrast(180%) brightness(1.2)",
      }} src={'/avatar1.png'} w={500} alt=''
        className='translate-z-0 w-full h-full ' />
    </div>
  )
};

export default Avatar;
