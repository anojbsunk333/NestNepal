import React from 'react'
export default function Eleventh(){
    return(
        <div className='px-12'>
             <div className='justify-items bg-[url("/pro1.png")] bg-center bg-cover h-[600px] rounded-3xl mb-20'>
             <p className='pt-100 pl-18 text-[#FFFFFF] text-[66px] font-bold leading-[100%] px-180'> Hire a Pro, We'll Do the Work for You   </p> 
             
             </div>                                                         

             <div className='flex gap-2 mb-15 pb-15'>
            <div>
                <h1 className='text-[50px] font-bold max-w-full pr-20 mr-20'>Ready to upgrade your business?</h1>
            <p className='text-[18px] leading-[100%] mr-20 pr-15 mt-15'>We make it easy to tap into 20+ years of experience – our web experts will tackle whatever you need for a successful site.</p>
            <div className='mt-5'>
                <button className='bg-[#3174F0] hover:bg-blue-400 text-[#FFFFFF] px-3 py-3 rounded-2xl '>Get started for free</button>
             </div>
            </div>
          <div className='grid grid-cols-2'>
            <div className='bg-[#F4F6F9] w-[352px] h-[165px] pl-10 mr-90 rounded-2xl'>
                <img src="goog1.png" alt="" className='w-[30px] h-[30px] mt-10' />
                <h1 className='font-bold text-[18px] mt-5'>Google Workspace</h1>
            </div>

            <div className='bg-[#F4F6F9] w-[352px] h-[165px] pl-10 rounded-2xl '>
                <img src="goog2.png" alt="" className='w-[30px] h-[30px] mt-10' />
                <h1 className='font-bold text-[18px] mt-5'>Microsoft 365</h1>
                </div>

            <div className='bg-[#F4F6F9] w-[352px] h-[165px] pl-10 mt-10 rounded-2xl'>
                    <img src="goog3.png" alt="" className='w-[30px] h-[30px] mt-10' />
                <h1 className='font-bold text-[18px] mt-5'>Zoho Workplace</h1>
            </div>

            <div className='bg-[#F4F6F9] w-[352px] h-[165px] pl-10 mt-10 rounded-2xl'>
                <img src="goog4.png" alt="" className='w-[30px] h-[30px] mt-10' />
                <h1 className='font-bold text-[18px] mt-5'>Bigin by Zoho CRM</h1>
            </div>

          </div>
             </div>



        </div>
    )
}