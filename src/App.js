import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Signin from './components/signin/signin';
import Signup from './components/signup/signup'
import Sidebar from './components/sidebar/sidebar';
import Acceptload from './components/acceptload/acceptload';
import Trackingdetails from './components/trackingdetails/trackingdetails';
import Previousload from './components/previousloads/previousload';
import Currentload from './components/currentloads/currentload';
import Invoices from './components/invoices/invoices';
import Invoicedetail from './components/invoicedetails/invoicedetail';
import Footer from './components/footer/footer';
import Usertracking from './components/userside/tracking'
import Usertrackingdetail from './components/userside/tackingdetailsuser'
function App() {
  const location = useLocation();
  return (
    <div className="App">

      {location.pathname !== "/signin" && location.pathname !== "/register" && <Sidebar />}
      <Routes>
        <Route exact path="/signin" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/acceptload" element={<Acceptload />} />
        <Route path="/trackingdetails/:id" element={<Trackingdetails />} />
        <Route path="/previousdetails" element={<Previousload />} />
        <Route path="/currentload" element={<Currentload />} />
        <Route path="/invoice" element={<Invoices />} />
        <Route path="/invoicedetail/:id" element={<Invoicedetail />} />
        <Route path="/usertracking" element={<Usertracking />} />
        <Route path="/usertrackingdetails" element={<Usertrackingdetail />} />
      </Routes>
      {location.pathname !== "/signin" && location.pathname !== "/register" && <Footer />}
    </div>
  );
}

export default App;
