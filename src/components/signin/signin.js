import { useState } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState()
    const getToken = (usertoken) => {
        localStorage.setItem('token', (usertoken))
        const tokenString = localStorage.getItem('token');
        console.log('signin token' ,tokenString)
        return tokenString?.token;
    }
    const handleApi = (e) => {
        e.preventDefault(e);
        setError("")
        setLoader(true);
        if (email && password) {
            axios.post("https://vast-erin-rooster-wrap.cyclic.app/signin/", {
                email: email,
                password: password,
            }).then((res) => {
                getToken(res.data.token);
                setLoader(false);
                Navigate('/acceptload')
            },
                reason => {
                    console.error(reason);
                    setError("Invalid Email or Password")
                    setLoader(false)
                }
            )
        }
        else {
            alert("Please Fill Form")
            setLoader(false)
        }
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-gray">
                <div className="flex flex-col shadow-md px-8 sm:px-8 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className="relative mt-10 h-px bg-gray-300">
                        <div className="absolute left-0 top-0 flex justify-start w-full -mt-2">
                            <span className="text-3xl text-gray-500">Sign In</span>
                        </div>
                    </div>
                    <div className="mt-12">
                        <form onSubmit={(e) => handleApi(e)}>
                            <div className="flex flex-col mb-6">
                                <label for="email" className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">Email</label>
                                <div className="relative mt-2">
                                    <input id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-2 border-light-gray bg-white rounded-lg  w-full py-3 focus:outline-none " placeholder="E-Mail Address"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label for="password" className="mb-1 text-sm sm:text-sm tracking-wide text-light-gray">Password</label>
                                <div className="relative mt-2">
                                    <input id="password" type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-2 border-light-gray bg-white rounded-lg  w-full py-3 focus:outline-none focus:border-blue-400" placeholder="Password"
                                        value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {error ? <span className="text-black text-xs ">{error}</span> : ""}
                                </div>
                            </div>
                            <div className="flex items-center mb-6 -mt-4">
                                <div className="flex pl-2 mt-3">
                                    <a href="#" className="inline-flex text-sm sm:text-sm text-light-gray hover:text-black">Forgot Password?</a>
                                </div>
                            </div>
                            {loader ? <div className='text-center w-full px-3 text-center text-white p-3 font-semibold text-sm bg-dark-blue-900'>
                                <span className='text-white p-2 text-sm'>Logging In...</span>
                                <svg class="animate-spin inline text-white h-2 w-2 border-4  ..." viewBox="0 0 0 0"></svg></div>
                                : <div className="flex w-full">
                                    <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-dark-blue hover:bg-dark-blue-900 rounded py-2 w-full transition duration-150 ease-in"
                                        onClick={(e) => handleApi(e)} disabled={loader}>
                                        Login
                                    </button>
                                </div>}
                        </form>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <a  target="_blank" className="inline-flex items-center font-semibold  text-light-gray  text-sm text-center cursor-pointer">
                            <span className="ml-2">Doesn't have an account?</span>
                            <span className="text-dark-blue hover:text-dark-blue-900" onClick={()=>Navigate('/register')}> &nbsp; Sign Up</span>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}