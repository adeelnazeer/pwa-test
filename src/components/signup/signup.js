import { useState } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default () => {
    const Navigate=useNavigate();
    const [firstName,setFirstName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[dateOfBirth,setDateOfBirth]=useState({
        day:"",
        date:"",
        year:""
    });
   const dob= dateOfBirth.day + "-" + dateOfBirth.date + "-" + dateOfBirth.year; 
   const onInputChange=(e)=>{
    setDateOfBirth(st=>({
        ...st,
        [e.target.name]:e.target.value
    })) };
    const[address,setAddress]=useState("");
    const[state,setState]=useState("");
    const[licenseNum,setLicenseNum]=useState("")
    const[regDate,setRegDate]=useState("");
    const[expiryDate,setExpiryDate]=useState("");
    const[policyNum,setPolicyNum]=useState("");
    const [loader, setLoader] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoader(true);
        axios.post("https://vast-erin-rooster-wrap.cyclic.app/signup/",{
            name:firstName,
            password:password,
            email:email,
            phone:phone,
            dob:dob,
            address:address,
            state:state,
            licenseNumber:licenseNum,
            licenseRegDate:regDate,
            licenseExpDate:expiryDate,
            policyNumber:policyNum,
        }).then((res)=>{
            console.log(res,"response")
            setAddress("");
            setEmail("");
            setExpiryDate("");
            setFirstName("");
            setLicenseNum("");
            setPassword("");
            setPhone("");
            setPolicyNum("");
            setRegDate("");
            setState("");
            setLoader(false);
            Navigate('/signin')
    })
    }
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-gray">
                <div className="flex flex-col shadow-md px-8 sm:px-8 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className="relative h-px bg-gray-300">
                        <div className="absolute left-0 top-0 flex justify-start w-full -mt-2">
                            <span className="text-3xl text-gray-500">Sign Up</span>
                        </div>
                    </div>
                    <div className="mt-12">
                        <form onSubmit={(e) => { handleSubmit(e) }}>
                            <div className="flex gap-4 mb-2">
                                <div className="relative mt-2">
                                    <label for="firstname" className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">First Name</label>
                                    <input id="firstname" type="text" className="text-xs pl-2 sm:text-base placeholder-gray-500 border-light-gray bg-white border-white border blue-100 rounded-lg mt-3 w-full py-3 focus:outline-none " placeholder="Enter First Name"
                                   name="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                                </div>
                                <div className="relative mt-2">
                                    <label for="password" className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">Password</label>
                                    <input id="password" type="password" name="lastname" className="text-xs pl-2 sm:text-base placeholder-gray-500  border-light-gray blue-100 rounded-lg mt-3 w-full py-3 focus:outline-none " placeholder=" Enter Password" 
                                    value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-2">
                                <div className="relative ">
                                    <label for="email" className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">Email</label>
                                    <input id="email" type="email" name="email" className="text-xs pl-2 sm:text-base placeholder-gray-500 border-light-gray blue-100 rounded-lg mt-3 w-full py-3 focus:outline-none " placeholder="Enter Email"
                                    value={email} onChange={(e)=>setEmail(e.target.value)} />
                                </div>
                                <div className="relative">
                                    <label for="phone" className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">Phone</label>
                                    <input id="phone" type="number" name="phone" className="text-xs pl-2 sm:text-base placeholder-gray-500  border-light-gray blue-100 rounded-lg mt-3 w-full py-3 focus:outline-none " placeholder=" Enter Phone Number" 
                                    value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                </div>
                            </div>
                            <label className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray font-semibold">Date of Birth</label>
                            <div className="grid grid-cols-3 gap-4 mb-6 mt-2">
                                <div className="relative ">
                                    <input  type="number" className="ext-xs pl-2 sm:text-base placeholder-gray-500 border-light-gray bg-white border-white border blue-100 rounded-lg mt-3 w-full py-3 focus:outline-none  " placeholder="Day" 
                                    value={dateOfBirth.day} onChange={e => onInputChange(e)} name="day"/>
                                </div>
                                <div className="relative ">
                                    <input  type="number"  className="ext-xs pl-2 sm:text-base placeholder-gray-500 border-light-gray bg-white border-white border blue-100 rounded-lg mt-3 w-full py-3 focus:outline-none " placeholder=" Month" 
                                    value={dateOfBirth.date} onChange={e => onInputChange(e)} name="date"/>
                                </div>
                                <div className="relative ">
                                    <input type="number"  className="ext-xs pl-2 sm:text-base placeholder-gray-500 border-light-gray bg-white border-white border blue-100 rounded-lg mt-3 w-full py-3 focus:outline-none  " placeholder="Year" 
                                    value={dateOfBirth.year} onChange={e => onInputChange(e)} name="year"/>
                                </div>
                            </div>

                            <div className="flex flex-col mb-6">
                            <div className="relative ">
                            <label className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">Address</label>
                                <textarea id="message" rows="4" class="block p-2.5 mt-2 w-full text-sm text-black focus:outline-none" placeholder="Write your Address here..."
                               name="address" value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label for="state" className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">State</label>
                                <div className="relative mt-2">
                                    <input  type="text" name="state" className="text-sm sm:text-base placeholder-gray-500 pl-2 border-light-gray bg-white rounded-lg  w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Enter State" 
                                    value={state} onChange={(e)=>setState(e.target.value)}/>
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label for="state" className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">License Number</label>
                                <div className="relative mt-2">
                                    <input type="number" name="licenseNum" className="text-sm sm:text-base placeholder-gray-500 pl-2 border-light-gray bg-white rounded-lg  w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Enter License Number" 
                                    value={licenseNum} onChange={(e)=>setLicenseNum(e.target.value)}/>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-6">
                                <div className="relative mt-2">
                                    <label  className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">License Reg Date</label>
                                    <input  type="text" name="regdate" className="text-xs sm:text-base pl-2 placeholder-gray-500 border-light-gray bg-white border-white border blue-100 rounded-lg mt-3 w-full py-3 focus:outline-none " placeholder="DD-MM-YYYY" 
                                    value={regDate} onChange={(e)=>setRegDate(e.target.value)}/>
                                </div>
                                <div className="relative mt-2">
                                    <label className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">Expiry Date</label>
                                    <input  type="text" name="expiryDate" className="text-xs pl-2 sm:text-base placeholder-gray-500  border-light-gray blue-100 rounded-lg mt-3 w-full py-3 focus:outline-none " placeholder="DD-MM-YYYY"
                                    value={expiryDate} onChange={(e)=>setExpiryDate(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label for="number" className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">Insurance Number</label>
                                <div className="relative mt-2">
                                    <input id="number" type="number" name="policyNum" className="text-sm sm:text-base placeholder-gray-500 pl-2 border-light-gray bg-white rounded-lg  w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Enter insurance number" 
                                    value={policyNum} onChange={(e)=>setPolicyNum(e.target.value)}/>
                                </div>
                            </div>
                       {loader? 
                       <div className='text-center w-full px-3 text-center text-white p-3 font-semibold text-sm bg-dark-blue-900'>
                       <span className='text-white p-2 text-sm'>Signing Up Please Wait...</span>
                       <svg class="animate-spin inline text-white h-2 w-2 border-4  ..." viewBox="0 0 0 0"></svg></div>:
                            <div className="flex w-full mt-4">
                                <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-dark-blue hover:bg-dark-blue-900 rounded py-2 w-full transition duration-150 ease-in"
                                onClick={(e)=>handleSubmit(e)}>
                                    <span className="mr-2">Continue</span>
                                </button>
                            </div>}
                        </form>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <a target="_blank" className="inline-flex items-center font-semibold  text-light-gray  text-sm text-center cursor-pointer">
                            <span className="ml-2">Alreadyt have an account?</span>
                            <span className="text-dark-blue hover:text-dark-blue-900" onClick={()=>Navigate('/signin')}> &nbsp; Sign In</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}