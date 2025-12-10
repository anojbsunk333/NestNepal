import React from 'react'
import { MoveRight } from 'lucide-react';
export default function Ninth(){
return(
    <div className='bg-[#141414] h-[1205px]'>
                         <div  className='text-[60px] font-bold text-[#FFFFFF] mt-10 leading-[100%] pt-10 ml-15 max-w-3xl'>
                            <h1 className='mt-10 pt-10'>Build your WordPress site effortlessly and quickly for online success</h1>
                            </div>

         <div className='grid grid-cols-2 mt-10'>
            <div className='ml-15'>
                <p className=' text-[16px] text-[#FFFFFF] mt-10 pt-10 px-5 py-5 mr-10'>Our Enterprise CDN delivers lightning speed to visitors everywhere. It's fully optimized, no setup required, and included at no extra cost.</p>
                <div className='flex ml-5'>
                    <button className='text-[16px] text-[#FFFFFF] bg-blue-600 hover:bg-gray-500 rounded-2xl  px-2 py-2 mt-3 pt-2'>Get started for free</button>
                    <button className='text-white text-[16px] hover:bg-blue-600 rounded-2xl px-2 py-2 flex mt-5 ml-10'>Check Plans <MoveRight className='ml-3' /></button>
                </div>
                <div className='border-b-2 text-gray-500 ml-5'>
                    <h1 className='text-[24px] font-bold text-[#FFFFFF] mt-15 pt-5'>Get Started Faster</h1>
                    <p className='text-[15px] text-[#FFFFFF] mt-5 pt-5 mb-5 py-5  leading-[100%] '>Begin your journey with a website created with the power of generative AI. Establish an online presence with customized content tailored to your specific needs, generated in seconds!</p>
                </div>
                <div className='border-b-2 text-gray-500 ml-5 mt-10'>
                    <h1 className='font-bold text-[24px] text-[#FFFFFF] mb-5'>Create Something Unique</h1>
                </div>
                <div className='border-b-2 text-gray-500 ml-5 mt-10'>
                    <h1 className='text-[#FFFFFF] text-[24px] font-bold mb-5 '>Edit Like a Pro</h1>
                </div>
                <div className='border-b-2 text-gray-500 ml-5 mt-10'>
                      <h1 className='text-[#FFFFFF] text-[24px] font-bold mb-5'>Get Help When and Where You Need It</h1>
                </div>
            </div>

            <div className='w-[700px] h-[650px] mt-18 ml-10'>
                <img src="host3.png" alt="" />
            </div>

         </div>
        
         </div>
        
)

}








