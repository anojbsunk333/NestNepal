import { CircleCheck } from 'lucide-react';
import React from 'react';
export default function Sixth(){
return(
            <div className='bg-[#FFFFFF] grid grid-cols-2'>
                <div className='mt-30 px-20 '>
                    <h1 className='text-[44px] font-bold mr-10'>Fast, Secure and Reliable Hosting in Nepal for Every Business Need</h1>
                    <p className='text-[16.6px] mt-5'>Our Enterprise CDN delivers lightning speed to visitors everywhere. It's fully optimized, no setup required, and included at no extra cost.</p>
                    <h6 className='text-[#3174F0] text-[16.7px] mt-5 underline ml-3'>Find out why it's the fastest platform</h6>
                    <div className='text-[15px] text-[#000000] mt-5'>
                         <div className='flex'><CircleCheck className='text-[#3174F0] mr-3'/> <p>Global edge network with response times less than 100ms.</p></div>
                         <div className='flex mt-3'><CircleCheck className='text-[#3174F0] mr-3'/> <p>Full-page caching at the edge for instant delivery.</p></div>
                         <div className='flex mt-3'><CircleCheck className='text-[#3174F0] mr-3'/> <p>Cloudflare Enterprise CDN & WAF included.</p></div>
                    </div>
                
                </div>

            <div className='w-[500px] h-[450px] mt-20 mb-10 ml-30'>
                <img src="frame1.png" alt="" />
            </div>
                
            </div>
)
}