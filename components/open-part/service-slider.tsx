"use client"
import { RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from 'swiper/react'
import commonQuestions from 'public/datas/common-questions.json'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Pagination, FreeMode } from "swiper/modules";


const ServiceSlider = ({ setActive }: { setActive: (n: number) => void }) => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      },
    }}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {
        commonQuestions.map((item, itemIndex) => (
          <SwiperSlide onClick={() => setActive(item.id)} key={itemIndex}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8  flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="mb-8">
                <p className="max-w-[350px] leading-normal">{item.question}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
};

export default ServiceSlider;
