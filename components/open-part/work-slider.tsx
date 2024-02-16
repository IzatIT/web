"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import works from 'public/datas/works.json'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      noSwiping={false}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[380px] sm:h-[480px]"
    >
      {
        works.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.datas.map((item, index) => (
                <Link href={`/products/${idx}/${item.id}`}>
                  <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      <Image src={item.image} width={500} height={200} alt='' />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            <div className='delay-100'>
                              Модель
                              <div className='translate-y-[500%] text-md md:text-3xl group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                {item.model}
                              </div>
                            </div>

                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
};

export default WorkSlider;
