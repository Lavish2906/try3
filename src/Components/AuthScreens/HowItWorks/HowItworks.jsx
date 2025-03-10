import { Images } from "@/assets/Images/Images"
import HowItWorksCard from "../Cards/HowItWorsCard"
import UserCardReview from "../Cards/UserreviewCard"

const steps = [
    {
        id: 1,
        heading: "Sign Up and Get Started",
        info: "Create your account in seconds with email or mobile. Set up your profile to explore luxury cars effortlessly.",
        logo: "user"
    },
    {
        id: 2,
        heading: "Search, Compare and connect",
        info: "Browse luxury cars, compare options side by side, and connect with dealers directly. Get answers to all your questions and make confident choices.",
        logo: "search",
    },
    {
        id: 3,
        heading: "Book and Drive Away",
        info: "Secure your car with hassle-free payments or financing options. Our support team is here to help every step of the way.",
        logo: "car"
    },
]

function HowItWorks() {
    return (
        <div className="w-full bg-[#101115] pt-6 pb-8 text-white">
            <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center">
                <div className="lg:px-25 px-9 flex flex-col text-left justify-center items-center md:items-start">
                    <h1 className="lg:text-2xl md:text-xl text-lg font-bold text-[#8F8065] my-2">Your jourey to the perfect car</h1>
                    <p className="lg:text-sm text-xs md:text-left text-center my-3">Find, compare, and purchase your dream car with confidence. Our streamlined process makes car buying simple and hassle-free.</p>
                    <button className="px-6 py-2 rounded-sm text-white text-sm bg-[#8F8065] hover:bg-[#8F8065]/80 cursor-pointer my-3">Get started</button>
                </div>
                <div>
                    <img src={Images.howcar} />
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
                <h1 className="lg:text-2xl md:text-xl text-lg text-white mt-4 mb-2.5 font-bold">Three Simple Steps to Get Your New Car</h1>
                <div className="flex md:flex-row flex-col justify-between lg:w-[80%] md:w-[90%] items-center">
                    {steps.map((itm, index) => <HowItWorksCard key={itm.id} logo={itm.logo} index={index} heading={itm.heading} info={itm.info} />)}
                </div>
            </div>
            <div className="w-full mt-8 p-7 flex flex-col items-center">
                <h1 className="text-2xl text-white my-4 font-bold">Why chose us</h1>
                <div className="flex w-full bg-[#101115] my-2 justify-around items-center">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="md:text-3xl text-lg font-bold">50k+</h1>
                        <p className="md:text-base text-xs">Cars available</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="md:text-3xl text-lg font-bold">98%</h1>
                        <p className="md:text-base text-xs">Customer satisfaction</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="md:text-3xl text-lg font-bold">24/7</h1>
                        <p className="md:text-base text-xs">Support available</p>
                    </div>
                </div>
            </div>       
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

            <div className="bg-gradient-to-r from-[#0A0A0B33] via-[#0A0A0B50] to-[#0A0A0B33] my-10 w-full">
                <div className="w-[90%] md:w-[60%] my-10 mx-auto flex flex-col lg:flex-row items-center">
                    <div className="flex flex-col justify-between md:pr-10 items-center md:items-start">
                        <h1 className="md:text-2xl text-xl text-white text-center md:text-left">
                            Ready to find you dream car?
                        </h1>
                        <p className="text-[#BABEC4] my-2 text-center md:text-left">
                            Start your journey today
                        </p>
                        <button
                            onClick={() => setOpenModal(true)}
                            className="bg-[#8F8065] px-5 py-2 rounded-lg text-white mt-3"
                        >
                            Get started
                        </button>
                    </div>
                    <img className="w-112 mt-5 md:mt-0" src={Images.car3} alt="Car" />
                </div>
            </div>

        </div>
    )
}
export default HowItWorks