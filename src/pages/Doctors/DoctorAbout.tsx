import { formateDate } from "../../utils/formateDate"


const DoctorAbout = ({ doctorData }) => {
    const {
        firstName,
        lastName,
        aboutMe,
        education,
        specialisation,
        experience,
        totalPatients,
        hospital
      } = doctorData?.data?.doctor ?? {};

  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About
                 <span className="text-irisBlueColor font-bold text-[24px] leading-8">{firstName} {lastName}</span> </h3>
                 <p className="text_para">{aboutMe}</p>
        </div>
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
            <ul className="pt-4 md:p-5">


                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                    <span className="text-irisBlueColor font-semibold text-[15px] leading-6">  {formateDate("6-04-2008")} -  {formateDate("12-04-2010")}</span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">PHD in {doctorData?.data?.doctor.specialisation.name}</p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        {education}
                    </p>

                    </li>

                                    
                {/* <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                    <span className="text-irisBlueColor font-semibold text-[15px] leading-6"> {formateDate("12-04-2010")} -  {formateDate("12-04-2010")}</span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Aydin Hospital, Istanbul
                    </p>

                    </li> */}
            </ul>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">{experience} experience</h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor font-semibold text-[15px] leading-6">  {formateDate("6-04-2008")} -  {formateDate("12-04-2012")}</span>
                <p className="text-[16px] leading-6 font-medium text-textColor">PHD in {doctorData?.data?.doctor.specialisation.name}</p>
                    
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Aydin Hospital, Istanbul
                    </p>
                </li>

                {/* <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor font-semibold text-[15px] leading-6">  {formateDate("6-04-2008")} -  {formateDate("12-04-2012")}</span>
                <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                    
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Aydin Hospital, Istanbul
                    </p>
                </li> */}
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout