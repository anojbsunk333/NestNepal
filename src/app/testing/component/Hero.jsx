import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="bg-[url('/hero-bg.png')] bg-cover height-[644px] width-[1440px] top-[137px] justify-items-stretch py-3">
     <div className=' grid grid-cols-2 gap-2 p-6'>

       <div className='gap-[10]'>
         <div>
          <button className="text-white text-[15px] text-bold justify-items-start bg-white/20 px-3 py-2 rounded-full mt-5 leading-[100%]">Get The Next-Gen AI for Business</button>
          <h1 className='text-[56px] text-white font- font-extrabold justify-items-start leading-[110%] py-5 max-w-[700px]'>Faster, Secure & Powerful Web Hosting Services</h1>
          <h5 className='text-white text-[18px] justify-items-start leading-[150%] max-w-[650px]'>Empowering Nepali businesses with Web solutions, domains & software Services—Nest Nepal is Your trusted partner To Grow your online Presence, performance, & productivity.</h5>
        </div>
         <div className='flex gap-10 justify-items-start py-7'>
         <button className="bg-[#0062CA] hover:bg-sky-700 text-white text-[16px] rounded-md height-[22px] px-3 py-2 text-clip "> Check Plans</button>  
          <span className='text-white text-[16px] px-3 py-2 flex gap-2'>Get Quotation <ArrowUpRight /></span>
         </div></div>   


         <div className='px-25'>
          <Image src={"/fram/newhero2-bg.png"} height={200} width={543.78} alt=''/>
          
         </div>
     </div>
    </div>
  )
}

export default Hero
