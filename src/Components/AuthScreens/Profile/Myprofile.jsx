import { Images } from "@/assets/Images/Images"
import { useState } from "react"
import ProfileForm from "./ProfileForm"
import OffersList from "./OffersList"
import { useStateContext } from "@/Context/ContextProvider"

function MyProfile() {
    const [edit, setEdit] = useState(false)
    const [offerScreen, setOfferScreen] = useState(false)
    const {screenSize} = useStateContext()

    return (<div className="w-full bg-[#101115] px-10 min-h-screen pb-7">
        <div className="w-full flex items-center justify-start">
            <button onClick={()=> setOfferScreen(false)} className={`${!offerScreen ? "bg-[#242529]" : "" } text-white py-3 px-4 cursor-pointer`}>Personal Details</button>
            <button onClick={()=> setOfferScreen(true)} className={`text-white ${offerScreen ? "bg-[#242529]" : "" } py-3 px-4 cursor-pointer`}>My offers</button>
        </div>
        <div className="w-full bg-[#242529] text-white md:px-10 px-1 lg:py-8 py-4 ">
           {!offerScreen && <div className="flex md:flex-row flex-col md:items-start items-center">
                <img className="h-30 w-30" src={Images.Avatar} />
                <div className={`${edit ? "md:w-[85%]" : `${screenSize < 900 ? "w-[100%]" :"w-[45%]"  } `} md:px-10 px-1.5 py-3`}>
                    {!edit && <div className="w-full">
                        <div className="flex md:text-base text-sm justify-between">
                            <p className="md:text-base text-sm ">Name</p>
                            
                            <p className="md:text-base text-xs ">Rahul singh</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:text-base text-sm ">Mobile number</p>
                            <p className="md:text-base text-xs ">+91 99999999</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:text-base text-sm ">E-mail Id</p>
                            <p className="md:text-base text-xs ">Rahulsingh@gmail.com</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:text-base text-sm ">Gender</p>
                            <p className="md:text-base text-xs ">Male</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:text-base text-sm ">City</p>
                            <p className="md:text-base text-xs ">xyz</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:text-base text-sm ">State</p>
                            <p className="md:text-base text-xs ">xyz</p>
                        </div>
                    </div>}
                    {edit && <ProfileForm />}
                    <button onClick={() => setEdit(!edit)} className={`bg-[#8F8065] py-2 ${edit ? "w-48 mx-auto" : "w-full"} cursor-pointer hover:bg-[#8F8065]/90 rounded-sm mt-10 text-white`}>{edit? "Save": "Edit"}</button>
                </div>
            </div>}
            {offerScreen && <OffersList />}
        </div>

    </div>)
}
export default MyProfile