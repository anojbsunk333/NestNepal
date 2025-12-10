import React from 'react'
import { ChevronDown } from 'lucide-react';
export default function Twelve(){
    return(
            <div className='justify-items-center  mb-10'>
                <h1 className='font-bold text-[47px]'>Domain related FAQ:</h1>
                
                <div className='ml-5'>
                    <div className='border-t-2 mt-5'>
                    <p className='text-[22px] mt-10 flex justify-between'>How do i register a domain in Nepal? <ChevronDown  /></p>
                </div>
                <div className='border-t-2 mt-10 mb-10'>
                    <p className='text-[22px] mt-10 flex justify-between'>What happens if I fail to renew my domain? <ChevronDown/></p>
                </div>
                <div className='border-t-2 mt-10 mb-10'>
                    <p className='text-[22px] mt-10 flex justify-between'>Are there any fees for transferring a domain to Nest Nepal? <ChevronDown  /></p>
                </div>
                <div className='border-t-2 mt-10 mb-10'>
                    <p className='text-[22px] mt-10 flex justify-between'>Can Nest Nepal help in domain registration and DNS changes? <ChevronDown  /></p>
                </div>
                <div className='border-t-2 mt-5'>
                    <p className='text-[22px] mt-10 flex justify-between'>Do you support international domain names? <ChevronDown/></p>
                </div>
                </div>
                
                

            </div>

    )
}