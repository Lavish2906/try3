import { Images } from "@/assets/Images/Images"
import { WideCarCard } from "../Cards/wideCarDetails"
import { BookTestDriveCar } from "../Cards/BooktestDriveCard"
import HowItWorksCard from "../Cards/HowItWorsCard"
import { Link } from "react-router-dom"

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

function BookYouTestDriveHome() {
    return (
        <div className="w-full bg-[#101115] text-white p-9">
            <div className="flex md:flex-row flex-col md:justify-between items-start ">
                <div className="md:w-[45%] w-full">
                    <h1 className="lg:text-2xl md:text-xl text-sm font-bold">Book your test drive for 10,000</h1>
                    <p>Book within 3 days</p>
                    <div className="w-full bg-[#171A21] my-3 p-4 border-[#8F806552] border-1 rounded-lg">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p className="text-[#98A2B3]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus iusto reiciendis eaque non voluptatum esse vero pariatur blanditiis soluta!</p>
                    </div>
                    <div className="w-full bg-[#171A21] my-3 p-4 border-[#8F806552] border-1 rounded-lg">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p className="text-[#98A2B3]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus iusto reiciendis eaque non voluptatum esse vero pariatur blanditiis soluta!</p>
                    </div>
                </div>
                <div className="md:w-[45%] w-full">
                    <BookTestDriveCar
                        name="BMW E64 M6 V10"
                        year="2015"
                        engine="3246cc"
                        img={Images.cardetail1}
                        location="Bangalore"
                        kms="25"
                        type="Petrol"
                        gear="Automatice"
                        seat="6"
                    />
                </div>
            </div>
            <div className="w-full md:flex-row flex-col md:my-0 lg:justify-start justify-center flex mt-3">
                <p className="md:text-left text-center">Schedule your test drive today</p>
                <h1 className="md:text-left text-center">Choose your preffered Location</h1>
            </div>
            <div className="flex lg:justify-start justify-center mt-2.5 items-center">
                <button className="bg-[#8F8065] md:w-45  mx-1 cursor-pointer hover:bg-[#8F8065]/80 text-white px-4 md:text-base text-sm py-2 rounded-sm">Home delivery</button>
                <Link to="/test-drive">
                    <button className="bg-[#4F5D61] md:w-45
                 cursor-pointer hover:bg-[#4F5D61]/80 mx-1  px-4 py-2 md:text-base text-sm rounded-sm">Showroom visit</button>
                </Link>
            </div>
            <div className="w-full flex flex-col items-center">
                <h1 className="lg:text-2xl md:text-xl text-lg text-white mt-4 mb-2.5 font-bold">How it works</h1>
                <div className="flex md:flex-row flex-col justify-between lg:w-[80%] md:w-[90%] items-center">
                    {steps.map((itm, index) => <HowItWorksCard key={itm.id} logo={itm.logo} index={index} heading={itm.heading} info={itm.info} />)}
                </div>
            </div>
        </div>
    )
}
export default BookYouTestDriveHome