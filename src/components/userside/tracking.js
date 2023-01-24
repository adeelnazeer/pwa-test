import axios from 'axios'
import { useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom';

export default()=>{
const Navigate=useNavigate()
    return(
        <>
        <div className="background  bg-buildings bg-cover bg-no-repeat h-100">
            <div className="content bg-black pb-8 pt-16">
            <div className="main-background flex justify-center ">
                <div className="container flex justify-evenly  pb-5">
                    <div className="shipement-heading text-white font-bold text-5xl leading-normal">
                        <h1 className="mt-8">Track Your <br></br> Shipment</h1>
                    </div>
                    <div className="tracking-detail text-white border-b-white border border-black">
                        <p className="mt-10">Add your tracking number below and get the updated status <br></br> about your shipment</p>
                    </div>
                </div>
            </div>
            <div className="tracker-id flex justify-center ">
                   <div className="Track-order text-blackish w-52 container">
                  <div className=" bg-white p-10 mt-20 ">
                    <h1 className="font-bold text-2xl pb-4">Track Your Order</h1>
                    <span className="italic py-5">Tracking ID</span>
                    <input className="w-100 bg-light-white p-2" placeholder="Enter Your Tracking Number" type="number" on />
                    <button className="w-100 bg-dark-blue text-white p-2 mt-6 italic" onClick={()=>Navigate('/usertrackingdetails')}>Track</button>
                    </div>  
                    </div> 
                </div>
            </div>
            
        </div>
        </>
    )
}