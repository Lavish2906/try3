import { Images } from "@/assets/Images/Images"
import CoverImageCard from "../Cards/CoverImageCard"
import AboutUsImageCard from "../Cards/AboutUsImageCard"
import { ChartArea } from "lucide-react"
import UserCardReview from "../Cards/UserreviewCard"
import { Check } from "lucide-react"
import { Package } from "lucide-react"

function AboutUs() {
    return (
        <div className="w-full bg-[#101115] text-white">
            <CoverImageCard title="About us" />
            <div className="my-5 flex md:flex-row flex-col w-[80%] min-h-[500px] mx-auto justify-between">
                <div className="md:w-[45%] w-full relative">
                    <AboutUsImageCard />
                </div>
                <div className="md:w-[45%] md:mt-0 mt-90 w-full">
                    <h1 className="text-[#8F8065] lg:text-xl md:text-lg text-sm">ABOUT US</h1>
                    <h1 className="text-white lg:text-2xl md:text-lg text-sm font-bold my-4">Our company overview</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reprehenderit doloribus ipsam eveniet ratione accusamus? Atque temporibus eligendi, assumenda dolorem, accusantium dicta officiis quidem corrupti ut dolore possimus maiores illum.</p>
                    <h3 className="my-3">With AutViton you can:</h3>
                    <ul>
                        <li className="flex items-center my-5">
                            <Check color="#8F8065" className="mr-2 h-4 w-4" /> Lorem ipsum dolor sit.
                        </li>
                        <li className="flex items-center my-5">
                            <Check color="#8F8065" className="mr-2 h-4 w-4" /> Lorem ipsum dolor sit.
                        </li>
                        <li className="flex items-center my-5">
                            <Check color="#8F8065" className="mr-2 h-4 w-4" /> Lorem ipsum dolor sit.
                        </li>
                        <li className="flex items-center my-5">
                            <Check color="#8F8065" className="mr-2 h-4 w-4" /> Lorem ipsum dolor sit.
                        </li>
                    </ul>
                    <button className="border-1 bg-[#8F8065] rounded-sm text-white px-8 py-1">Let's talk</button>
                </div>
            </div>
            <div className="border-1 rounded-2xl w-[90%] bg-[#171A21] mx-auto my-5 p-5 flex lg:flex-row flex-col items-center justify-between">
                <div className="lg:w-[45%] flex flex-col lg:items-start items-center  w-full p-10">
                    <div className="flex items-center">
                        <Package className="h-4 w-4" color="#8F8065" />
                        <h1 className="ml-4">Autoviton Features</h1>
                    </div>
                    <h1 className="lg:text-2xl text-xl my-3">The key features and benifts of the autoviton</h1>
                    <button className="my-2 md:w-[30%] w-[50%] border-1 border-[#ccc] rounded-sm px-3 py-1">Contact us</button>
                </div>
                <div className="lg:w-[45%] md:w-full lg:mx-0 mx-auto flex md:flex-row flex-col">
                    <div className="border-1 lg:w-48 lg:text-left text-center md:w-1/3 h-70 border-white py-10 px-3.5 lg:my-0 my-2 mx-2 justify-around rounded-sm flex flex-col items-center">
                        <ChartArea className="lg:h-6 lg:w-6 h-10 w-10" />
                        <h1>90%</h1>
                        <p>of user says they reveal deeper insights from data</p>
                    </div>
                    <div className="border-1 lg:w-48 lg:text-left text-center md:w-1/3 h-70 border-white py-10 px-3.5 lg:my-0 my-2 mx-2 justify-around rounded-sm flex flex-col items-center">
                        <ChartArea className="lg:h-6 lg:w-6 h-10 w-10" />
                        <h1>90%</h1>
                        <p>of user says they reveal deeper insights from data</p>
                    </div>
                    <div className="border-1 lg:w-48 lg:text-left text-center md:w-1/3 h-70 border-white py-10 px-3.5 lg:my-0 my-2 mx-2 justify-around rounded-sm flex flex-col items-center">
                        <ChartArea className="lg:h-6 lg:w-6 h-10 w-10" />
                        <h1>90%</h1>
                        <p>of user says they reveal deeper insights from data</p>
                    </div>
                </div>
            </div>
            <div className=" ml-10 mt-5">
                <h1 className="md:text-2xl font-bold text-white md:pl-7 pl-4 text-lg mt-2 mb-1">What our customers say</h1>
                <div className="w-full md:pl-7 pl-2 scroll hide-scrollbar scroll-smooth flex flex-row overflow-x-scroll">
                    <div className="mx-2 inline-block">
                        <UserCardReview />
                    </div>
                    <div className="mx-2 inline-block">
                        <UserCardReview />
                    </div>
                    <div className="mx-2 inline-block">
                        <UserCardReview />
                    </div>
                    <div className="mx-2 inline-block">
                        <UserCardReview />
                    </div>
                    <div className="mx-2 inline-block">
                        <UserCardReview />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default AboutUs