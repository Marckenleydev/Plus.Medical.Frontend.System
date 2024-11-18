
import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import Doctors from "../pages/Doctors/Doctors"
import DoctorDetails from "../pages/Doctors/DoctorDetails"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import NotFound from "../pages/NotFound"
import VerifyPassword from "../pages/VerifyPassword"
import ResetPassword from "../pages/ResetPassword"
import VerifyAccount from "../pages/VerifyAccount"
const Routers=()=> {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path='users/patients/verify/password' element={<VerifyPassword/>}/>
        <Route path='resetpassword' element={<ResetPassword/>}/>
        <Route path='users/patients/verify/account' element={<VerifyAccount/>}/>
        <Route path="/doctors/:doctorId" element={<DoctorDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </div>
  )
}

export default Routers