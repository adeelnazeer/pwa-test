import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
export default () => {
  const params=useParams();
  const navigate=useNavigate();
  const [invoice, setInvoice] = useState([]);
  useEffect(() => {
    handleApi();
  }, [])
  const handleApi = () => {
    let token = localStorage.getItem('token');
    let headers = {
      Authorization: 'Bearer ' + token,
    }
    axios.get("https://vast-erin-rooster-wrap.cyclic.app/driver/delivered", { headers })
      .then((res) => {
        setInvoice(res.data);
      })
  }
  console.log("abc",invoice)
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-background-gray">
                <div className="flex flex-col shadow-md px-6 sm:px-8 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className=" mt-10 h-px bg-gray-300">
                        <div className=" flex justify-center w-full -mt-2">
                            <span className="text-3xl font-extrabold text-gray-500 ">Invoices</span>
                        </div>
                    </div>                  
                    <div className="mt-16 overflow-scroll">
                    {
                      invoice?.map((detail)=>(
                            <div className="flex gap-4 cursor-pointer mb-6" onClick={()=>{navigate(`/invoicedetail/${detail._id}`)}}>
                              <div className="icon ">
                              <i class="fa-solid fa-truck text-xl p-2 rounded-full bg-blue-200 text-white"></i>
                              </div>
                              <div className="">
                                <p className="font-semibold text-sm ">Invoice Number</p>
                                <p className="text-xs">{detail?.trackingId}</p>
                              </div>
                            </div>
                            ))
    }       
                    </div>
     
                </div>
            </div>
        </>
    )
}