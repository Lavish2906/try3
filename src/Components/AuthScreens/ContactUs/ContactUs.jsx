import { Images } from "@/assets/Images/Images"
import { Mail, MapPin, Phone } from "lucide-react"
import AddressCard from "../Cards/AddressCard"

function ContactUs() {
    return (
        <div className="w-full bg-[#101115] py-8 text-white">
            <h1 className="lg:text-2xl md:text-xl text-lg text-white md:mb-6 mb-4 ml-4">Contact us</h1>
            <img className="w-full" src={Images.map} />
            <div className="flex md:flex-row flex-col lg:w-[90%] w-[95%] justify-between mx-auto mt-6 items-start">
                <div className="md:w-[45%] w-[90%] md:mx-0 mx-auto">
                    <h1 className="lg:text-2xl md:text-xl text-lg font-semibold">Get in touch</h1>
                    <p className="md:text-sm text-xs py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ad possimus enim perspiciatis. Magnam!</p>
                    <form className="w-full md:mb-0 mb-10">
                        <div className="flex mt-3 justify-between items-center">
                            <div className="border-[#8F806552] flex flex-col px-3 w-[48%] py-1 bg-[#171A21] rounded-sm">
                                <label className="text-sm text-[#818181]">First name</label>
                                <input className="focus:outline-0" type="name" />
                            </div>
                            <div className="border-[#8F806552] flex flex-col px-3 py-1 w-[48%] bg-[#171A21] rounded-sm">
                                <label className="text-sm text-[#818181]">Last name</label>
                                <input className="focus:outline-0" type="name" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-3 items-center">
                            <div className="border-[#8F806552] flex flex-col px-3 w-[48%] py-1 bg-[#171A21] rounded-sm">
                                <label className="text-sm text-[#818181]">Email</label>
                                <input className="focus:outline-0" type="name" />
                            </div>
                            <div className="border-[#8F806552] flex flex-col px-3 py-1 w-[48%] bg-[#171A21] rounded-sm">
                                <label className="text-sm text-[#818181]">Phone number</label>
                                <input className="focus:outline-0" type="name" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <textarea placeholder="Comment" className="w-full px-3 py-1 h-30 focus:outline-0  border-[#8F806552] bg-[#171A21] " />
                        </div>
                        <button className="bg-[#8F8065] px-3 mt-3 py-3 rounded-sm text-white text-sm">Send message</button>
                    </form>
                </div>
                <div className="p-6 border-1 md:w-[45%] w-[90%] md:mx-0 mx-auto border-[#8F806552] bg-[#171A21] rounded-sm">
                    <h1 >Contact details</h1>
                    <p className="md:text-sm text-xs py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur velit porro esse beatae placeat.</p>

                    <div className="flex items-start my-4">
                        <MapPin className="h-4 w-4" color="#8F8065" />
                        <div className="lg:w-[50%] w-[90%] ml-2 text-sm">
                            <h4>Address</h4>
                            <p className="md:text-sm text-xs">329 Queensberry Street, North Melbourne VIC3051, Australia.</p>
                        </div>
                    </div>
                    <div className="flex items-start my-4">
                        <Mail className="h-4 w-4" color="#8F8065" />
                        <div className="lg:w-[50%] w-[90%] ml-2 text-sm">
                            <h4>Email</h4>
                            <p className="md:text-sm text-xs">test@testmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start my-4">
                        <Phone className="h-4 w-4" color="#8F8065" />
                        <div className="lg:w-[50%] w-[90%] ml-2 text-sm">
                            <h4>Phone</h4>
                            <p className="md:text-sm text-xs">+91 9876543210</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] mx-auto mt-11">
                <h1 className="text-white lg:text-2xl text-lg md:mb-3 lg:mb-0 mb-4 font-semibold">Our offices</h1>
                <div className="flex md:flex-row flex-col items-center justify-between">
                    <AddressCard country="San Francisco" addressline="329 Queensberry Street, North Melbourne VIC3051,Australia." />
                    <AddressCard country="New York" addressline="329 Queensberry Street, North Melbourne VIC3051,Australia." />
                    <AddressCard country="London" addressline="329 Queensberry Street, North Melbourne VIC3051,Australia." />
                </div>
            </div>
        </div>
    )
}
export default ContactUs