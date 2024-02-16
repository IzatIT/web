"use client"
import { Sora } from '@next/font/google'
import Nav from 'components/open-part/nav'
import Header from 'components/open-part/header';
import TopLeftImg from 'components/open-part/top-left-img';
import { AnimatePresence, motion } from 'framer-motion'
import Transition from 'components/open-part/transition';
import { usePathname } from 'next/navigation';
import "styles/globals.css"

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export default function CustomLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}  font-sora relative`}>
            <TopLeftImg />
            <Nav />
            <Header />
            <AnimatePresence mode='wait'>
                <motion.div key={pathname} className='h-full'>
                    <Transition />
                    {children}
                </motion.div>
            </AnimatePresence>
        </div >
    )
}