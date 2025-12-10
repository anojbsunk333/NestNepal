import{GitCompareArrows} from 'lucide-react'
import {MessageSquareMore} from 'lucide-react'
import { FolderCog } from 'lucide-react'
import { RefreshCw } from 'lucide-react'
import React from "react";
export default function Fifth (){
return(
          <div className=" bg-linear-to-r from-[#002759] to-[#0F132C] mt-25">
            <div className=" justify-items-center pt-10 mt-10">
                <h1 className="text-[40px] text-[#FFFFFF]">Send Bulk SMS and manage it in one dashboard</h1>
                <h6 className="text-[16px] text-[#FFFFFF] mt-3">Our easy-to-use dashboard helps you manage your website, emails, and backups without any confusion. Just log in and start.</h6>
            </div>
            <div className="mt-15 w-[857px] h-[512px]  mx-auto ">
                <img src="sec2.png" alt="" />
            </div>

            <div className="grid grid-cols-4 ml-16 mr-16">
                <div className='text-white border-t border-r border-b ml-3 mb-20'>
                     <MessageSquareMore className='mt-5 ml-3 mb-2'/>
                     <h1 className='text-[17px] font-bold mt-2 ml-3 mb-3'>Send SMS in Bulk</h1>
                     <p className='text-[14px] text-[#D6D6D6] ml-3 mb-5'>Launch your site instantly with our one-click installer—just click and go live.</p>
                </div>
                <div className='text-white border-t border-r border-b mb-20'>
                     <GitCompareArrows className='mt-5 ml-3 mb-2'/>
                     <h1 className='font-bold text-[16.62px] mt-2 ml-3 mb-3'>Register as Reseller</h1>
                     <p className='text[14.13px] text-[#D6D6D6] ml-3 mb-5'>Create business emails in seconds and stay connected with your customers easily.</p>
                </div>
                <div className='text-white border-t  border-r border-b mb-20'>
                     <FolderCog className='mt-5 ml-3 mb-2' />
                     <h1 className='text-[16.62px] mt-2 ml-3 mb-3'>Manage Files</h1>
                     <p className='text-[#D6D6D6] text-[14.13px] ml-3 mb-5'>Upload, edit, and organize your website files easily from the control panel or via FTP.</p>
                </div>
                <div className='text-white border-t border-b mb-20'>
                     <RefreshCw className='mt-5 ml-3 mb-2' />
                     <h1 className='font-bold text-[16.62px] mt-2 ml-3 mb-3'>Daily Backups</h1>
                     <p className='text-[14.13px] text-[#D6D6D6] ml-3 mb-5 leading-100%'>Your site and emails are backed up daily. Restore your files instantly when needed.</p>
                </div>
            
          </div>
          </div>

)

}