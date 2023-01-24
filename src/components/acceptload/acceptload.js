import { useEffect, useState } from "react";
import Modal from '.././modal';
import axios from 'axios';
export default () => {
    const [showModal, setShowModal] = useState(false);
    const [vehicleInfo, setVehicleInfo] = useState([]);
    const handleModal = () => {
        setShowModal(true);
    }
    useEffect(() => {
        loadData();
    }, [])
    const loadData = () => {
        axios.get("https://vast-erin-rooster-wrap.cyclic.app/driver/load/srrvvk7w6")
            .then((res) => {
                setVehicleInfo(res);
                console.log("res", res.data)
            })
    }
    console.log("response", vehicleInfo)
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-gray">

                <div className="flex flex-col shadow-md px-2 sm:px-8 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className=" mt-10 h-px bg-gray-300">
                        <div className=" flex justify-center w-full -mt-2">
                            <span className="text-4xl font-extrabold text-gray-500 ">Accept The Load</span>
                        </div>
                    </div>
                    <div className="mt-28 overflow-x-scroll">
                        <table class="border-separate border-spacing-6 border border-slate-500 ... overflow-x-scroll">

                            <tr>
                                <th className="text-sm">#</th>
                                <th className="text-sm">VehicleType</th>
                                <th className="text-sm">Origin </th>
                                <th className="text-sm">Destination</th>
                                <th className="text-sm">PickupDate</th>
                                <th className="text-sm">DropoffDate</th>
                            </tr>
                            {
                                vehicleInfo?.data?.vehicle?.map((info, index) => (
                                    <tr className="text-center  overflow-x-scroll">
                                        <th>{index + 1}</th>
                                        <td>{info?.amount}</td>
                                        <td>{info?.origin}</td>
                                        <td>{info?.destination}</td>
                                        <td className="">{vehicleInfo?.data?.pickupDate}</td>
                                        <td>{vehicleInfo?.data?.date}</td>
                                    </tr>
                                ))
                            }             </table>
                    </div>
                    <div className="mt-10">

                        <div className="flex justify-center">
                            <button type="submit" className="flex items-center justify-center focus:outline-none text-white font-bold text-base sm:text-base bg-black rounded py-4 px-8"
                                onClick={() => handleModal()}>
                                <span className="" >More</span>
                            </button>
                        </div>
                        <div className="flex justify-evenly mt-4 ">
                            <button type="submit" className="flex items-center justify-center focus:outline-none text-white font-bold text-base sm:text-base bg-green-800 rounded py-4 px-8  ">
                                <span className="">Accept</span>
                            </button>
                            <button type="submit" className="flex items-center justify-center focus:outline-none text-white font-bold text-base sm:text-base bg-red rounded py-4 px-8  ">
                                <span className="">Reject</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal setShowModal={setShowModal} showModal={showModal} />
            )}
        </>
    )
}