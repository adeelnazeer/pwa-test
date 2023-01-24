import axios from 'axios'
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
export default () => {
  const [currentLoad, setCurrentLoad] = useState([])

  const Navigate = useNavigate();

  useEffect(() => {
    handleApi();
  }, [])
  const handleApi = () => {
    let token = localStorage.getItem('token');
    let headers = {
      Authorization: 'Bearer ' + token,
    }
    axios.get("https://vast-erin-rooster-wrap.cyclic.app/driver/inprogress", { headers })
      .then((res) => {
        setCurrentLoad(res.data);
      })
  }

  console.log("load", currentLoad)
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-background-gray">
        <div className="flex flex-col shadow-md px-6 sm:px-8 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className=" mt-10 h-px bg-gray-300">
            <div className=" flex justify-center w-full -mt-2">
              <span className="text-3xl font-extrabold text-gray-500 ">Current Loads</span>
            </div>
          </div>
          {
            currentLoad?.map((index) => (
              <div className="mt-16 overflow-scroll" onClick={() => Navigate(`/trackingdetails/${index?._id}`)}>
                <div className="flex gap-4 cursor-pointer ">
                  <div className="icon ">
                    <i class="fa-solid fa-truck text-xl p-2 rounded-full bg-blue-200 text-white"></i>
                  </div>
                  <div className="a">
                    <p className="font-semibold text-sm">Load Number</p>
                    <p className="text-xs">{index?.trackingId}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}