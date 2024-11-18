import { Link } from "react-router-dom";
import heromImg1 from "../assets/images/hero-img01.png";
import heromImg2 from "../assets/images/hero-img02.png";
import heromImg3 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png"
import icon2 from "../assets/images/icon02.png"
import icon3 from "../assets/images/icon03.png"
import imageFeature from "../assets/images/feature-img.png"
import faqImg from "../assets/images/faq-img.png"
import videoIcon from "../assets/images/video-icon.png"
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About";
import ServiceList from "../components/ServiceList";
import DoctorList from "./Doctors/DoctorList";
import FaqList from "../components/FaqList";
import Testimonial from "../components/Testimonial";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";

function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({duration: 2000});

  }, []);

  return (
    <>
      {/* ========= hero section ========= */}
      <>
        <section className="hero_section pt-[60px] 2xl:h[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ======== hero content ======= */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[700] md:text-[60px] md:leading-[70px]">
                    we help patient live a healthy, longer life.
                  </h1>
                  <p>
                    At our clinic, we prioritize the well-being of our patients,
                    offering comprehensive care that not only addresses
                    immediate health concerns but also promotes long-term
                    wellness. Our dedicated team of healthcare professionals
                    employs advanced medical practices and personalized
                    treatment plans to ensure each patient receives the highest
                    quality of care.
                  </p>
                  <button className="btn"><Link to="/doctors">Request an Appointment</Link></button>
                </div>

                {/* ======= hero content ======= */}

                <div  className="mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:heading-[54px] font-[700] lg:gap-[30px] text-headingColor ">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para"> Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:heading-[54px] font-[700] lg:gap-[30px] text-headingColor ">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para"> Clinic Location</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:heading-[54px] font-[700] lg:gap-[30px] text-headingColor ">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para"> Patient Satisfaction</p>
                  </div>
                </div>
              </div>

              {/* ======= hero content ======= */}
              <div className="flex gap-[30px] justify-end">
                <div className="">
                  <img className="w-full" src={heromImg1} alt="" />
                </div>

                <div className="mt-[30px]">
                  <img className="w-full mb-[30px]" src={heromImg2} alt="" />
                  <img className="w-full" src={heromImg3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== hero section end ======= */}
        <section data-aos="fade-up">
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center font-normal">
                Providing the best medical services
              </h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health System offers unmatched, expert health care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon1} alt="" />
                </div>

                <div className="mt-30px">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health System offers unmatched, expert health care.
                  From the lab to the clinic.
                  </p>
                  <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px]
                  mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                    <BsArrowRight className="group-hover:text-white w-6 h-5 "/>
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon2} alt="" />
                </div>

                <div className="mt-30px">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health System offers unmatched, expert health care.
                  From the lab to the clinic.
                  </p>
                  <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px]
                  mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                    <BsArrowRight className="group-hover:text-white w-6 h-5 "/>
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon3} alt="" />
                </div>

                <div className="mt-30px">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health System offers unmatched, expert health care.
                  From the lab to the clinic.
                  </p>
                  <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px]
                  mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                    <BsArrowRight className="group-hover:text-white w-6 h-5 "/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

       <About data-aos="fade-up"/>
       {/* ======== Service Section ======== */}

       <section data-aos="fade-up">
        <div className="container">
          <div className="xl:w-[470px mx-auto]">
            <h2 className="heading text-center font-[400]">Our medical Services</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our System offers unmatched, expert health care.
            </p>
          </div>
          <ServiceList/>
        </div>
       </section>
          {/* ======== Service Section end======== */}

             {/* ======== Feture Section ======== */}

             <section>
              <div className="container">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                  <div className="xl:w-[670px]">
                    <h2 className="heading font-[400]">Get virtual treatment<br/> anytime.</h2>

                    <ul className="pl-4">
                      <li className="text_para">
                        1. Schedule the appointment directly.
                      </li>
                      <li className="text_para">
                        2. Search for your physician here, and contact their office.
                      </li>
                      <li className="text_para">
                        3. View our physicians who are accepting new patients, use the online schedule tool to select an appointment.
                      </li>
                    </ul>
                    <Link to="/services">
                    <button className="btn">Learn More</button>
                    </Link>
                  </div>
                   {/* ======== Feature Image ======== */}
                   <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                    <img src={imageFeature} alt="" className="w-3/4"/>

                    <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font[600]">
                          Tue, 24
                        </p>
                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font[400]">
                          10:00AM
                        </p>
                        <span className="w-5 h-5 lg:w-[34px] lg:h[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                          <img src={videoIcon} alt=""/>
                        </span>
                      </div>

                      <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4
                      text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full
                      ">
                        Consultation
                      </div>
                      <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="h-[34px] w-[34px]" alt=""/>
                        <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                          Wayne Collins
                        </h4>
                      </div>

                    </div>
                   </div>
                   </div>
              </div>
             </section>

              {/* ======== Feture Section end======== */}

                {/* ======== Our great doctors ======== */}

              <section data-aos="fade-up">
              <div className="container">
          <div className="xl:w-[470px mx-auto]">
            <h2 className="heading text-center font-[400]">Our great Doctors </h2>
            <p className="text_para text-center">
              World-class care for everyone. Our System offers unmatched, expert health care.
            </p>
          </div>
         <DoctorList/>
        </div>
              </section>

                    {/* ======== Faq Section ======== */}
                    <section data-aos="fade-up" className="container">
                      <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className="w-1/2 hidden md:block">
                        <img src={faqImg} alt="" />
                        </div>

                        <div className="w-full md:w-1/2">
                        <h2 className="heading font-[400]">
                          Most questions by our patients
                        </h2>
                        <FaqList/>
                        </div>
                      </div>
                    </section>

                    {/* ======== Faq Section end ======== */}


                    {/* ======== testimonial Section ======== */}
                    <section data-aos="fade-up">
                    <div className="container">
          <div className="xl:w-[470px mx-auto]">
            <h2 className="heading text-center font-[400]">What our patient say</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our System offers unmatched, expert health care.
            </p>
          </div>
          <Testimonial/>
        </div>
                    </section>

      </>
    </>
  );
}

export default Home;
