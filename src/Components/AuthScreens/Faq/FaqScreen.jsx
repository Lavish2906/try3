import { Images } from "@/assets/Images/Images"
import CoverImageCard from "../Cards/CoverImageCard"
import Faq from "../Accordian/Faq"
import { Search } from "lucide-react"

function FaqScreen() {
    return (
        <div className="w-full bg-[#101115] lg:pb-30 pb-4 text-white">
            <CoverImageCard title="Faq" />
            <div className="lg:w-[90%] w-full lg:mt-0 mt-2 mx-auto flex lg:flex-row flex-col items-center justify-between">
                <img className="lg:w-100 w-full" src={Images.faqscreen} />
                <div className="w-full">
                    <Faq />
                </div>
            </div>
            <div className="w-[90%] mx-auto md:mt-4 mt-2 flex md:flex-row flex-col items-center justify-between">
                <div className="md:w[35%] w-full pr-0 md:pr-10">
                    <h1 className="lg:text-base text-sm">Frequently Asked Questions</h1>
                    <h1 className="lg:text-base md:text-sm text-xs">Still you have any questions? Contact our team via test@gmail.com</h1>
                </div>
                <div className="md:w-[55%] md:mt-0 mt-4 w-full">
                    <h1>What do you need help with?</h1>
                    <div className="flex w-full border-b-1 border-white items-center">
                        <Search color="#ccc" className="md:h-3 md:w-3 h-2.5 w-2.5 mx-0.5" />
                        <input className="flex-grow w-full md:text-base text-sm p-1 bg-transparent text-white outline-none" placeholder="Search..." />
                    </div>
                </div>
            </div>

            <div className="w-[90%] sm:w-[80%] mx-auto lg:mt-10 mt-9 items-center border bg-[#171A21] rounded-lg lg:p-8 p-5 flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-[45%] mb-3 lg:mb-0">
                    <h1 className="lg:text-2xl md:text-lg text-sm font-bold mt-1 md:mt-3">Subscribe to our newsletter</h1>
                    <p className="lg:text-lg md:text-sm text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero distinctio tempore rerum. Vitae, mollitia. Ea animi nisi placeat quod.</p>
                </div>
                <div className="w-full md:w-[70%] lg:my-0 my-2 lg:w-[45%]">
                    <div className="flex border justify-between bg-[#E6E6E64D] rounded-full pl-2 lg:pl-5">
                        <input
                            className="flex-grow md:text-base text-sm focus:outline-none p-1 md:p-2"
                            id="email"
                            placeholder="Your email address"
                        />
                        <button className="bg-[#8F8065] md:text-base text-sm rounded-full md:px-5 px-1.5 py-1 md:py-2">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FaqScreen