import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="bg-[url('/hero-bg.png')] bg-cover height-[644px] width-[1440px] top-[137px] justify-items-stretch">
     <div className=' grid grid-cols-2 gap-2 p-6'>

       <div>
         <div>
          <button className="text-white text-[18px] text-bold justify-items-start bg-white/20 px-3 py-2 rounded-full  ">Get The Next-Gen AI for Business</button>
          <h1 className='text-[56px] text-white font- font-extrabold justify-items-start'>Faster, Secure & Powerful Web Hosting Services</h1>
          <h5 className='text-white text-[18px] justify-items-start'>Empowering Nepali businesses with Web solutions, domains & software Services—Nest Nepal is Your trusted partner To Grow your online Presence, performance, & productivity.</h5>
        </div>

         <div className='flex gap-10'>
         <button className="bg-sky-500 hover:bg-sky-700 text-white text-[16px] rounded-2xl height-[22px]"> Check Plans</button>  
          <span className='text-white text-[16px] justify-items-start'>Get Quotation</span>
         </div></div>


         <div >
          <Image src={"/hero2-bg.png"} height={200} width={543.78} height={450.3} alt=''/>
         </div>
     </div>
    </div>
  )
}

export default page
