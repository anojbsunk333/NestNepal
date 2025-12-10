import React from "react";
 const Third =()=>{
return(
    <div className="bg-[#F2F7FF] px-5 py-10 rounded-md">

           <div>
            <img src="back1.png" alt="" />
           </div>
            <div className="bg-white m-10 p-12  rounded-lg grid grid-cols-2 ">


                    <div>
                        <h1 className="font-bold text-[40px] max-w-[500px] ml-10 mt-5 leading-[100%]">Need Customized Soluion?</h1>
                        
                        <div className="flex gap-2 mt-10 ml-10">
                            <div>

                            <img src="suprt.png" alt="" className="w-[47px] h-[47px] mt-2"/>
                            </div>
                            <div>
                             <h3 className="font-medium text-[#132828] text-[22px] ">Faster Performance</h3>
                             <p className="text-[15px] text-[#5D706D]">Our platform is tuned for speed with LiteSpeed</p>

                            </div>
                        </div>
                            
                        <div className="flex gap-2 mt-10 ml-10">
                           
                           <div>
                             <img src="suprt2.png" alt="" className="w-[43px] h-[43px] mt-2 "/>
                           </div>
                            <div>
                                <h3 className="text-[22px] text-[#132828] font-medium">Faster Performance</h3>
                                <p className="text-[#5D706D]">Our platform is tuned for speed with LiteSpeed</p>
                            </div>
                        </div>

                        <div className="mt-10 ml-10">
                            <button className="bg-[#007BFF]  text-white text-[16px] font-bold rounded-lg  w-[210px] h-[480x] hover:scale-105 duration-300 ease-in-out transition-all  cursor-pointer">See our hosting plans</button>
                        </div>
                    </div>

            <div>
                    <div className="w-[615px] h-[400px] mt-5 mb-5 mr-3">
                <img src="suprt3.png" alt="" />
            </div>
    </div>
            
            
            </div>
            

    </div>

)
 }
 export default Third