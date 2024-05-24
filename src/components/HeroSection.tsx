import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight className='-top-10 left-10 md:left-50 md:-top-40' fill='#fff'/>
        <div className='p-4 relative z-10 w-full text-center'>
         <h1 className='mt-20 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>Master the Art of Music</h1>
         <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
         Welcome to MailJet, the best transactional email service on the web. We provide reliable, scalable, and customizable email solutions for your business. Whether you're sending order confirmations, password reset emails, or promotional campaigns, MailJet has got you covered. 
         </p>
        </div>
        <div className='mt-4'>
      <Link href={'/courses'}>
        <Button borderRadius='1.75rem' className=''>Get Started</Button>
      </Link>
        </div>
    </div>
  )
}

export default HeroSection