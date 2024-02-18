"use client"
const testimonialData = [
  {
    name: 'Азиз Каныбеков',
    position: 'Клиент',
    message: "Капсульный дом превзошел все мои ожидания. Начиная с первого контакта и заканчивая установкой, весь процесс был гладким и профессиональным. Команда STAR LINE проявила высокий уровень внимания к деталям и уделяла большое внимание моим потребностям. Качество конструкции и удобства внутри дома на самом высоком уровне. "
  },
  {
    name: 'Сергей Рыбаков',
    position: 'Клиент',
    message: "Я горжусь тем, что мой капсульный дом был произведен здесь, на нашей родине, компанией STAR LINE. Это не просто дом - это символ нашей мастерской работы, нашего национального труда и таланта. Каждая деталь, каждая технология, используемая в процессе строительства, отражает высший стандарт качества и дает мне уверенность в долгосрочной надежности моего дома. Я благодарен STAR LINE за преданность нашей стране и за возможность воплотить свои мечты в жизнь, не покидая родные земли. Мой дом - моя гордость, и я горжусь, что он создан с помощью нашего отечественного производства."
  },
  {
    name: 'Канат',
    position: 'Клиент',
    message: "Мое пребывание в капсульном доме от STAR LINE превзошло все мои ожидания! Уникальный опыт проживания в уютном и стильном доме, сочетающем в себе современные технологии и качественные материалы, оставил незабываемые впечатления. Я был поражен вниманием к деталям и высоким уровнем сервиса, предоставленного командой STAR LINE. Их дом стал для меня настоящим убежищем во время путешествия, и я с уверенностью рекомендую STAR LINE всем, кто ценит комфорт, качество и неповторимый опыт проживания. Благодарю компанию STAR LINE за их профессионализм и страсть к созданию непревзойденных жилищных решений!"
  },
];
import Image from 'next/image'


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'

import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialsSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {
        testimonialData.map((person, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              <div className='flex flex-col justify-center text-center'>
                <div className='text-lg'>
                  {person.name}
                </div>
                <div className='text-[12px] uppercase font-extralight tracking-widest'>
                  {person.position}
                </div>
              </div>
              <div className='flex-1 flex flex-col justify-center before:w-[1x] xl:before:bg-white/10 xl:before:absolute xl:before:left-0 xl:before:h-200-[200px] relative xl:pl-20'>
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper >
  )
};

export default TestimonialsSlider;
