import { useState } from "react"
import { useNavigate } from 'react-router-dom';
export default()=>{
  const Navigate=useNavigate();
    const[show,setShow]=useState(false);
    const openSidebar=()=>{
        setShow(!show);
    }
    const logOut=()=>{
      localStorage.removeItem("token");
      Navigate('/signin')
    }
    return(
        <>
    <div class="flex overflow-x-hidden h-screen absolute " onClick={()=>openSidebar()}>
       {
        show ?
       
  <aside className="flex-shrink-0 w-64 flex flex-col border-r bg-blue-200 z-20 transition-all origin-left duration-1000" >
    <div className="h-64 bg-gray-900"></div>
    <nav className="flex-1 flex flex-col text-white text-center font-semibold">
      <a  className="p-2 hover:bg-green-1000 cursor-pointer" onClick={()=>(Navigate('/acceptload'))}>Dashboard</a>
      <a  className="p-2 hover:bg-green-1000 cursor-pointer " onClick={()=>(Navigate('/currentload'))}>Current Loads</a>
      <a  className="p-2 hover:bg-green-1000 cursor-pointer" onClick={()=>(Navigate('/previousdetails'))}>Previous Loads</a>
      <a  className="p-2 hover:bg-green-1000 cursor-pointer" onClick={()=>(Navigate('/invoice'))}>Invoices</a>
      <a className="p-2 hover:bg-green-1000 cursor-pointer" onClick={(e)=>logOut(e)}>Logout</a>
    </nav>
  </aside>: ""}
  <div class="flex-1 ">
    <header class="flex items-center  text-semibold text-gray-100  ">
      <button class="p-1 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  </div>
</div>
        </>
    )
}