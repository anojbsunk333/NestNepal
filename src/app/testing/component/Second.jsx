import { ArrowUpRight, Search } from 'lucide-react'
import { Span } from 'next/dist/trace'
import React from 'react'

const Second = () => {
  return (
    <div className='py-10 justify-items-stretch'>
      <div className='height-[86px] width-[1440px]'>
        <img src="mid.png" alt="" />
      </div>
      <div className='grid-cols-2 flex gap-10 justify-items-start'>
       <div className=' mt-5 ml-30 mr-5 px-3 py-5 rounded-2xl bg-linear-to-r from-[#044396] to-[#03264D] max-w-[616px]'>
        <div className='flex gap-25'>
          <h3 className='text-[32px] text-[#FFFFFF]'  >Discounts on every plans!</h3>
           <div className='text-white'><ArrowUpRight /></div>
          
        </div>
        <h6 className='text-[16px] max-w-lg text-[#FFFFFF] justify-items-start '>Find the plan that fits you best — explore our pricing options and save today.</h6>
        
               <div>
                <p className='text-[#FFFFFF] text-[12px] text-bold bg-white/20 rounded-full px-3 py-2 mt-2 ml-2 mr-3 mb-2 leading-4 font-bold w-fit'>LIMITED TIME DEAL</p>
                <h5 className='text-[#FFFFFF] text-[16px]'>From<span className='text-gray-500 line-through gap-4 text-[28px]'> 4190</span> रु. <span className='text-[28px]'> 2490</span> /month</h5>

               </div>
        
       </div>
       <div className='mt-5 ml-30 mr-5 px-3 py-5 rounded-2xl bg-linear-to-r from-[#044396] to-[#03264D]'>
        <h2 className='text-[#FFFFFF] text-[32px]'>Find a domain</h2>
        <h6 className='text-[16px] text-[#FFFFFF] max-w-[500px]'> A first impression lasts forever. Make yours count with the perfect domain name.</h6>
       <div className='flex gap-2 bg-white rounded-full px-3 py-2 mt-8 ml-2 mr-3 mb-2'>
         <div className='py-2'> <Search /></div>
                 <input className="placeholder:text-gray-500 placeholder:italic py-1" placeholder= "Search for anything..."type="text"name="search" />
                 <button className='bg-[#3174F0] hover:bg-sky-700 text-white text-[16px] rounded-full px-5 py-2 ml-35 leading-5 w-30' >search</button>

       </div>
       </div>
      </div>
    </div>
  )
}

export default Second
