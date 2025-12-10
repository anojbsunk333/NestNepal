import { Zap } from 'lucide-react';
import { TimerReset } from 'lucide-react';
import { Check } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { ChartSpline } from 'lucide-react';
import { Star } from 'lucide-react';
import React from 'react'
export default function Eighth () {
    return(


        <div className='px-12'>

            <div className='justify-items-center'>
                <h1 className='text-[34px] text-[#020205] pt-10 mt-10 font-bold'>Why work with Nest Nepal?</h1>
            <h6 className='mt-5 text-[18px] text-[#212121]'>Trusted by 15,000+ customers and powering 10,000+ websites, we drive business growth with reliable hosting, email, and security solutions.</h6>
            </div>
     


        <div className='grid grid-cols-10 gap-8'>   




        <div className='bg-linear-to-br from-[#044191] via-[#2F80FF80] to-white px-10 col-span-3 py-10 rounded-md mt-10 h-[450px]'>
            <div>
                 <Zap className='mb-3 text-white justify-items-start'/>
                <h2 className='text-[#FFFFFF] text-[25px] mt-5 leading-[100%]'>High-speed hosting</h2>
                <p className='mt-8 text-[#FFFFFF]  text-[15px leading-[100%] '>Boost your site’s loading speed with advanced LiteSpeed servers and LSCache technology.</p>
                <img src="flash.png" alt="" className='w-[157px] h-[198px] ml-30 px-5 py-5'/>

                <button className='bg-[#FFFFFF] hover:bg-gray-300  rounded-md px-3 py-3 text-[#2F80FF]'>Get Started</button>
        </div>
            </div>




            
            <div className='bg-[#F6F6F6] col-span-7  mt-10 '>
                 <div className='grid grid-cols-2'>
                    <div>
                          <TimerReset  className='mt-5 ml-10 w-[34px] h-[34px]'/>
                          <h1 className='font-medium text-[#020205] text-[25px] ml-5 mt-5 '>Top website performance metrics</h1>
                          <p className='text-[17px] text-[#878787] ml-5 mt-5 leading-[100%] mr-20'>Real-time insights into website loading speed</p>
                          <div className='flex ml-5 mt-5'>
                                 <Check className='text-green-400'/> <p>Blazing fast TTFB (Time to First Byte)</p>
                          </div>
                          <div className='flex ml-5 mt-5'>
                                 <Check className='text-green-400'/> <p>Maximized sales and conversion rates</p>
                          </div>
                          <div className='flex ml-5 mt-5'>
                                 <Check className='text-green-400'/> <p>Top-notch SSD NVMe storage drives</p>
                          </div>
                    </div>

                    <div className='bg-white w-[178px] h-[63px] justify-items-end ml-80 mt-6'>
                        <div className='flex gap-2  mt-5 mr-5 font-medium'>
                               <Rocket className='w-[17px] h-[22px]'/> <p className='text-[18px] text-[#020205]  '>Uptime 99.9%</p>
                        </div>

                        <div className='bg-[#FFFFFF] w-[384px] h-[327px] mt-20'>
                            <div>
                                <h1 className='text-[18px] text-[#020205] ml-15 pt-8 '>Performance</h1>
                            </div>
                            <div className='bg-[#F4F4F4] ml-15 mt-5 flex gap-4 px-2 py-2'>
                                <button className='bg-[#FFFFFF] ml-3 pl-3 pr-3 rounded-md  '>speed</button>
                                <h1 className='ml-10'>Uptime</h1>
                                <h1 className='ml-10'>CDN</h1>
                            </div>

                            <div className='w-[199px] h-[199px] ml-35 mt-10'>
                                <img src="group1.png" alt="" />
                            </div>

                        </div>

                    </div>
                          
          
                </div>


        </div>  

<div className='col-span-7 bg-[#F6F6F699] h-[463px] w-[999px] flex mb-10 '>

    <div className='bg-[#F6F6F699]  mt-5 px-5 '>
             <ChartSpline className='mt-10 ml-5'/> <h1 className='text-[25px] font-medium text-[#020205] mt-5 ml-5'> Hosting that drives business growth </h1>
             <div>
            <h1 className='text-[#878787] text-[17px] ml-5 mt-5 '>Speed-optimized hosting improves engagement and search rankings.</h1>
            </div>
            <div className='mt-5'>
                <div className='flex ml-5 mt-3 '>
                 <Check className='text-green-600 items-[5px] mr-3'/> <p className='text-[16px] text-[#020205]'>Sub-2.5s LCP, for instant user experience.</p>
                 </div>
                 <div className='flex ml-5 mt-3'>
                  <Check className='text-green-600 items-[5px] mr-3'/> <p className='text-[16px] text-[#020205]'>Near-zero CLS for a stable, professional site.</p>
                  </div>
                   <div className='flex ml-5 mt-3'>
                    <Check className='text-green-600 items-[5px] mr-3'/> <p className='text-[16px] text-[#020205]'>100ms INP for a responsive site.</p>
                   </div>
            </div>
         </div>

         <div className=' pt-3'>
             <img src="host1.png" alt="" className='w-[380px] h-[431px] ' />
         </div>
</div>

<div className='col-span-3 bg-[#001329] w-[406px] h-[463px] rounded-4xl mb-10'>
     <Star className='text-white w-[33px] h-[33px] ml-5 mt-5' />
     <h1 className='text-[25px] font-medium text-[#FFFFFF] ml-5 mt-5'>Game-Changer for Speed!</h1>
     <p className='text-[16px] text-[#D6D6D6] mt-3 px-3 py-3 ml-2'>Experience next-level speed and performance built for high-traffic websites.</p>
     <div className='w-[355px] h-[193px] ml-8 mr-3  mt-12 pt-10 px-3 py-3'>
        <img src="host2.png" alt="" />
     </div>

</div>

        </div>
        </div>
    )
}