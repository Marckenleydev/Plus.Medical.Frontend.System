import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef } from 'react';
import { patientAPI } from '../services/PatientService';
import { isTokenExpired, removeToken } from '../utils/requestutils';
import { Key } from '../assets/enum/cache.key';


const navLinks =[
  {
    path:'/home',
    display:'home'
  },
  {
    path:'/doctors',
    display:'find a doctors'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  }
]
const  Header=()=> {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const isLogin = localStorage.getItem(Key.LOGGEDIN) === "true";
  

  // Conditionally call the API if logged in
  const { data: user, isLoading } = isLogin ? patientAPI.useFetchPatientQuery() : { data: null, isLoading: false };
  const [logoutPatient, {  isLoading:loadingLogout,  }] = patientAPI.useLogoutPatientMutation();
  const navigate = useNavigate();


  const handLogout =  () => {
    removeToken();
logoutPatient();
window.location.reload();
 
  


  };

  const handleStickyHeader =()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=>{
    handleStickyHeader()
    return ()=> window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu =()=> menuRef.current.classList.toggle('show_menu');

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <img src={logo}/>
          </div>

          {/* menu */}

          <div className="navigation " ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index)=>(
                <li key={index}>
                  <NavLink to={link.path} className={navClass=>
                    navClass.isActive 
                    ? "text-primaryColor text-[16px] leading-7 font-[600]"
                    :"text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  }>
                    {link.display}</NavLink>
                </li>
              ))}
            </ul>
            </div>
     

          <div className="flex items-center gap-4">

            <div className='hidden'>
              <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full'>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='w-full rouded-full' alt='' />
              </figure>
              </Link>
            </div>
     {user?.data?.patient.firstName || !user?.data?.patient.firstName == null ?
      <div className='flex gap-2 items-center'>
        <h2 className='  text-primaryColor font-[600] flex items-center justify-center'><span className='mr-2 font-[400]'>hello! </span>  {user?.data?.patient.firstName} </h2>
       <button  onClick={handLogout}  className='bg-primaryColor py-2 px-4 text-white font-[600] h-[42px] flex items-center justify-center rounded-[50px]'>{loadingLogout  ?  "loading..." : "Log Out"}</button> </div>  : <Link to="/login">
          <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[42px] flex items-center justify-center rounded-[50px]'>{isLoading ?  "loading...":"Login"}</button>        
          </Link>}


          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>
          </div>




       
      </div>
      </div>

    </header>
  )
}

export default Header