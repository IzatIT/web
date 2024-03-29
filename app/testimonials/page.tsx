"use client"
import TestimonialsSlider from "components/open-part/testimonial-slider";
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


const Testimonials = () => {
  return <div className="h-full bg-primary/30 py-32 text-center">
    <div className="container mx-auto h-full flex flex-col justify-center">
      <motion.h2
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h2 mb-8 xl:mb-0">Что клиенты говорят <span className="text-accent">о нас.</span></motion.h2>
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <TestimonialsSlider />
      </motion.div>
    </div>
  </div>;
};

export default Testimonials;
