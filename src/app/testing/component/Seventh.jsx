import { CircleCheck } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
export default function Seventh() {
    return(

    <div className='grid grid-cols-2'>
        <div className='w-[538px] h-[499px] px-5 ml-20 mt-30 '>
            <Image src="/frame2.png" height={200} width={200} alt="" className='h-full w-full' />
        </div>
              <div className='mt-30 px-20 '>
                    <h1 className='text-[44px] font-bold mr-10'>Advanced Security Measures to Protect Your Cloud Hosted Data.</h1>
                    <p className='text-[16.6px] mt-5'>Our Enterprise CDN delivers lightning speed to visitors everywhere. It's fully optimized, no setup required, and included at no extra cost.</p>
                    <h6 className='text-[#3174F0] text-[16.7px] mt-5 underline ml-3'>Find out why it's the fastest platform</h6>
                    <div className='text-[15px] text-[#000000] mt-5'>
                         <div className='flex'><CircleCheck className='text-[#3174F0] mr-3'/> <p>Global edge network with response times less than 100ms.</p></div>
                         <div className='flex mt-3'><CircleCheck className='text-[#3174F0] mr-3'/> <p>Full-page caching at the edge for instant delivery.</p></div>
                         <div className='flex mt-3'><CircleCheck className='text-[#3174F0] mr-3'/> <p>Cloudflare Enterprise CDN & WAF included.</p></div>
                    </div>
                
                </div>
         
    </div>
    )
}