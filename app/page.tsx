"use client"
import ParticlesContainer from 'components/open-part/particles-container'
import ProjectBtn from 'components/open-part/project-btn'
import Avatar from 'components/open-part/avatar'
import { motion } from 'framer-motion'
import { fadeIn } from 'variants'
import ProjectsBtn from 'components/open-part/project-btn'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center  xl:pt-20 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h1">Добро пожаловать <br /> в <span className="text-accent">StarLine</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Мы создаем уникальные решения для [описание вашей деятельности/продукта].
            Наша цель - обеспечить клиентов [описание преимуществ вашего продукта/услуги].
            Используя инновационные технологии и экспертные знания, мы гарантируем
            [описание ожидаемых результатов].
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <Link className='relative z-50' href="/work">
              <ProjectsBtn />
            </Link>
          </div>
          <motion.div
            className="hidden xl:flex"
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'>
            <Link className='relative z-50' href="/work">
              <ProjectBtn />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full  absolute mix-blend-color-dodge translate-z-0">
        </div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[437px] max-h-[378px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}

export default Home