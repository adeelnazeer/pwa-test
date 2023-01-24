import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
export default () => {
    const [invoiceDetail, setInvoiceDetail] = useState([]);
    const [ratePerMile,setRatePerMile]=useState([])
    const params=useParams();
    useEffect(() => {
        loadData();
        loadRatePerMile();
    }, [])
    const loadData = () => {
        let token=localStorage.getItem('token');
        console.log("token",token)
        let headers={
            Authorization: 'Bearer ' + token
        }
        axios.get(`https://vast-erin-rooster-wrap.cyclic.app/driver/invoice/${params?.id}` , {headers})
            .then((res) => {
                setInvoiceDetail(res);
            })
    }
    const loadRatePerMile = () => {
        axios.get(`https://vast-erin-rooster-wrap.cyclic.app/rate/`,)
            .then((res) => {
                setRatePerMile(res.data);
            })
    }
    console.log(ratePerMile,"detail")
    return (
        <>
        <div className="flex justify-center mb-6">
            <div className="flex flex-col sm:overflow-scroll shadow-md px-2 sm:px-8 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div className=" mt-10 h-px bg-gray-300">
                    <div className=" flex justify-center w-full -mt-2">
                        <span className="text-4xl font-extrabold text-gray-500 ">Invoice Details</span>
                    </div>
                    <div className="text-center mt-10">
                        <p className="font-bold"> INVOICE #</p>
                        <p className="text-light-gray">{invoiceDetail?.data?.trackingId}</p>
                    </div>
                </div>
                
                <div className="mt-32">
                <div className="grid grid-cols-2 mb-6 ">
                    <div className="text-center mt-3">
                            <h2 className="font-bold text-base">Vehicle No</h2>
                            <p className="mt-2 text-light-gray">{invoiceDetail?.data?.vehicleNumber}</p>
                        </div>


                        <div className="text-center mt-3">
                            <h2 className="font-bold text-base">Payment Dues</h2>
                            <p className="mt-2 text-light-gray">{invoiceDetail?.data?.paymentDues}</p>
                        </div>
                        <div className="text-center mt-3">
                            <h2 className="font-bold text-base">Invoice Date</h2>
                            <p className="mt-2 text-light-gray">2022-10-12</p>
                        </div>
                        </div>

                      

                {
                    invoiceDetail?.data?.vehicle?.map((info,index)=>(
                        <div>
                            <h2 className="vehicle text-center p-4 font-bold underline-offset-2 text-black"> Details of Vehicle No {index+1}</h2>
                        <div className="grid grid-cols-2 mb-6 ">
                            <div className="text-center">
                                <h2 className="font-bold text-base">Company Name</h2>
                                <p className="mt-2 text-light-gray">{info?.make} </p>
                            </div>
                            <div className="text-center">
                                <h2 className="font-bold text-base">Model Name</h2>
                                <p className="mt-2 text-light-gray">{info?.model} </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mb-6">
                        <div className="text-center mt-3">
                                <h2 className="font-bold text-base">Distance</h2>
                                <p className="mt-2 text-light-gray">{info?.distance}</p>
                            </div>
                            <div className="text-center mt-3">
                                <h2 className="font-bold text-base">Shipped To</h2>
                                <p className="mt-2 text-light-gray">{info?.destination}</p>
                            </div>
                            <div className="text-center mt-6">
                                <h2 className="font-bold text-base">Shipped From</h2>
                                <p className="mt-2 text-light-gray">{info?.origin}</p>
                            </div>
                        </div>
                        </div>
                    ))
                }
       
                    <div className="details text-center mt-12">
                        <h1 className="font-bold uppercase">Details</h1>
                    </div>
                    <div className="grid grid-cols-2">
                    <div className="text-center mt-3">
                            <h2 className="font-bold text-base">Rate Per Mile</h2>
                        </div>
                        <div className="text-center mt-3">
                            <h2 className="text-light-gray">{ratePerMile.ratepermile}</h2>
                        </div>

                        <div className="text-center mt-3">
                            <h2 className="font-bold text-base">Sales Tax</h2>
                        </div>
                        <div className="text-center mt-3">
                            <h2 className="text-light-gray">12 %</h2>
                        </div>
                        <div className="text-center mt-3">
                            <h2 className="font-bold text-base">Sub Total</h2>
                        </div>
                        <div className="text-center mt-3">
                            <h2 className="text-light-gray">1200 $</h2>
                        </div>
                        <div className="text-center mt-3">
                            <h2 className="font-bold text-xl">Total Amout Paid</h2>
                        </div>
                        <div className="text-center mt-3 mb-6">
                            <h2 className="text-light-gray text-xl">2000 $</h2>
                        </div>
                    </div>
                </div>  
            </div>
            </div>


        </>
    )
}
