"use client"
import { useEffect, useState } from 'react';
import Bulb from 'components/open-part/bulb';
import Circles from 'components/open-part/circles';
import { motion } from 'framer-motion'
import { fadeIn } from 'variants'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import works from 'public/datas/works.json'
import { CheckIcon, List, ThemeIcon } from '@mantine/core';

type work = { id: number; model: string; image: string; width: number; height: number; length: number }

const Work = () => {
    const { id, idx } = useParams()
    const [data, setData] = useState<work | undefined>(undefined)

    useEffect(() => {
        const result = works[parseInt(`${idx}`)].datas.find(el => el.id.toString() === id)
        setData(result)
    }, [])
    return (
        <div className='h-full bg-primary/30 py-36 flex items-start'>
            <Circles />
            <div className='container mx-auto'>
                <div className='flex gap-x-8'>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='w-full h-full '>
                        <Image width={900} height={400} src={data?.image as string} alt="" />
                    </motion.div>
                    <div className='text-center flex xl:w-full  flex-col lg:text-left mb-4 xl:mb-0'>
                        <motion.h2
                            variants={fadeIn('down', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='h2'>
                            <span className='text-accent'>{data?.model}</span>
                        </motion.h2>
                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                            <List icon={
                                <CheckIcon size={20} color='green' />
                            }>
                                <List.Item fz={22} c="white">
                                    Длина: {data?.length} м
                                </List.Item>
                                <List.Item fz={22} c="white">
                                    Ширина: {data?.width} м
                                </List.Item>
                                <List.Item fz={22} c="white">
                                    Высота: {data?.height} м
                                </List.Item>
                                <List.Item fz={22} c="white">
                                    Площадь: {Math.ceil((data?.width || 1) * (data?.length || 1))} м<sup>2</sup>
                                </List.Item>
                            </List>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='w-full xl:max-w-[65%]'>
                        <h1>Позвонить по номеру </h1>
                        <List>
                            <List.Item fz={22} c="white">
                                <a href='tel:+996999933988 ' className='text-blue-400'>+996 999 933 988 </a>
                            </List.Item>
                            <List.Item fz={22} c="white">
                                <a href='tel:+996500084444' className='text-blue-400'>+996 500 084 444</a>
                            </List.Item>
                        </List>
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
    )
};

export default Work;
