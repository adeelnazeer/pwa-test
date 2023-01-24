import { useEffect, useState } from "react";
import axios from 'axios';
export default({ setShowModal})=>{
  const[vehicleInfo,setVehicleInfo]=useState([]);
  useEffect(()=>{
    loadData();
},[])
 const loadData=()=>{
    axios.get("https://vast-erin-rooster-wrap.cyclic.app/driver/load/srrvvk7w6")
    .then((res)=>{
        setVehicleInfo(res);
        console.log("res",res.data)
    })
 }
    return(
        <>
          <div class="fixed flex justify-center items-center bg-[#000000d4] top-0 left-0 right-0 z-50   p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div class="w-[30rem] modal-dialog relative pointer-events-none">
        <div class="modal-content border-none shadow-lg relative flex flex-col  pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div class="modal-header text-center  p-4 0 rounded-t-md">
          <div className="flex flex-col shadow-md px-2 sm:px-8 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className=" mt-10 h-px bg-gray-300">
                        <div className=" flex justify-center w-full -mt-2">
                            <span className="text-4xl font-extrabold text-gray-500 ">Cargo Information</span>
                        </div>
                    </div>
                    <div className="mt-28 overflow-x-scroll">
                    <table class="border-separate border-spacing-6  overflow-x-scroll">
                    
                         <tr>
                         <th className="text-sm">#</th>
                             <th className="text-sm">Payment Dues</th>
                             <th className="text-sm">Payment </th>
                             
                         </tr>
                     
                     {
                   vehicleInfo?.data?.vehicle?.map((info,index)=>(
                     
                    
                         <tr className="text-center  overflow-x-scroll">
                         <th>{index+1}</th>
                             <td>{info?.amount}</td>
                             <td>{info?.amount}</td>
                         </tr>
                    
                     ))
                    }             </table>             
             </div>
                  
                </div>
          </div>
          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4  rounded-b-md">
            <button
              type="button"
              class="px-6
          py-2.5
          bg-purple-600
           font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out text-sm"
              onClick={() => {
                setShowModal(false)
              }}
            >
              Close 
              <i class="fa-regular fa-circle-xmark ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div> 
        </>
    )
}