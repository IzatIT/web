"use client"
import Bulb from 'components/open-part/bulb';
import Circles from 'components/open-part/circles';
import { motion } from 'framer-motion'
import WorkSlider from 'components/open-part/work-slider';
import { fadeIn } from 'variants'
import works from 'public/datas/works.json'

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-12'>
              Продукты<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] text-sm mx-auto lg:mx-0'>
              STAR LINE" - это инновационная компания, специализирующаяся на производстве капсульных домов в Кыргызстане. Наши капсульные дома представляют собой современные и стильные жилища, которые сочетают в себе удобство, функциональность и экологичность. Мы стремимся создавать пространства, в которых каждый чувствует себя комфортно и защищенно. Наша команда постоянно работает над внедрением новых технологий и инноваций, чтобы обеспечить нашим клиентам лучшие решения для их жилищных потребностей. Вместе с "STAR LINE" вы можете воплотить свои мечты в реальность и создать свой идеальный дом!
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Work;
