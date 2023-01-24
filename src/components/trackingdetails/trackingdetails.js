import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
export default () => {
  const Params = useParams();
  const [currentLoad, setCurrentLoad] = useState([])
  const [update, setUpdate] = useState({
    dropoffStatus: "",
  })
  const[complete,setComplete]=useState({
    dropoffStatus:"complete",
  })
  useEffect(() => {
    handleApi();
  }, [])
  const handleApi = () => {
    axios.get(`https://vast-erin-rooster-wrap.cyclic.app/driver/${Params?.id}`,)
      .then((res) => {
        setCurrentLoad(res.data);
      })
  };
  console.log(currentLoad,"usman")
  const updateStatus = () => {
    let token = localStorage.getItem('token');
    let headers = {
      Authorization: 'Bearer ' + token,
    }
    axios.patch(`https://vast-erin-rooster-wrap.cyclic.app/driver/edit/${Params?.id}`, update, { headers })
      .then((res) => {
        setUpdate(res.data);
        setUpdate("")
      })
  }
  const updateComplete = () => {
    let token = localStorage.getItem('token');
    let headers = {
      Authorization: 'Bearer ' + token,
    }
    axios.patch(`https://vast-erin-rooster-wrap.cyclic.app/driver/edit/${Params?.id}`, complete, { headers })
      .then((res) => {
        setComplete(res.data);
        setUpdate("")
      })
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background-gray mb-16">
        <div className="flex flex-col shadow-md px-6 sm:px-8 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className=" mt-10 h-px bg-gray-300">
            <div className=" flex justify-start w-full -mt-2">
              <span className="text-4xl font-extrabold text-gray-500 ">Details</span>
            </div>
          </div>
      
              <div>
                <div className="mt-16">
                  <div className=" mb-6 ">
                    <div className="">
                      <h2 className="font-bold text-base font-bold uppercase">Tracking Id</h2>
                      <p className="mt-6 text-sm font-semibold">{currentLoad?.trackingId}</p>
                      <p className="text-sm"> Route Status</p>
                      <input type="text" name="text" className="text-xs pl-2 sm:text-base placeholder-gray-500 border-light-gray bg-white border-white border blue-100 rounded-lg mt-3 w-full py-3 focus:outline-none " placeholder="Update Status"
                        value={update.dropoffStatus} onChange={(e) => setUpdate(st => ({
                          ...st,
                          dropoffStatus: e.target.value
                        }))}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-evenly mb-6 ">
                    <button type="submit" className="flex items-center justify-center focus:outline-none text-white font-normal hover:border-black border-2 text-base sm:text-base bg-black rounded py-3 px-8  "
                      onClick={() => updateStatus()}>
                      <span className="">Update</span>
                    </button>
                    <button type="submit" className="flex items-center justify-center focus:outline-none text-white font-normal hover:border-black border-2 text-base sm:text-base bg-black rounded py-3 px-8  ">
                      <span className="" onClick={()=>updateComplete()}>Complete</span>
                    </button>


                  </div>
                  <div className="flex gap-4">
                    <div className="icon ">
                      <i class="fa-solid fa-truck text-xl p-2 rounded-full bg-blue-200 text-white"></i>
                    </div>
                    <div className="">
                      <p className="font-semibold text-sm">{currentLoad?.dropoffStatus}</p>
                      <p className="text-xs">{currentLoad?.date}</p>
                    </div>
                  </div>
                  <div className="border-4 border-l-blue-200  h-28 flex justify-center border-background-gray ml-4 -mt-6"></div>
                  <div className="flex gap-4">
                    <div className="icon -mt-4">
                      <i class="fa-solid fa-box text-xl p-2 rounded-full bg-blue-200 text-white"></i>
                    </div>
                    <div className="-mt-4">
                      <p className="font-semibold text-sm">Parcel handed over to courier.</p>
                      <p className="text-xs">21.08.11-16:10</p>
                    </div>
                  </div>
                  <div className="border-4 border-l-blue-200 h-28 flex justify-center border-background-gray ml-4 -mt-6"></div>
                  <div className="flex gap-4">
                    <div className="icon -mt-4">
                      <i class="fa-solid fa-dolly text-xl p-2 rounded-full bg-blue-200 text-white"></i>
                    </div>
                    <div className="-mt-4 mb-6">
                      <p className="font-semibold text-sm">Parcel prepared- not yet handed over to the courier.</p>
                      <p className="text-xs">21.08.11-16:10</p>
                    </div>
                  </div>
                </div>
              </div>
        
        </div>
      </div>
    </>
  )
}