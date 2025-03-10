import { Images } from "../../../assets/Images/Images"
import CarCard from "../Cards/Cardetails"
import CityCard from "../Cards/CiyCard"
import CustomerCard from "../Cards/CustomerCard"
import LogoName from "../Cards/logoName"
import { ChevronRight, ChevronLeft, Camera, Search } from "lucide-react"
import { carDetailsData } from "@/Constants/carDetails"
import { logoData } from "@/Constants/logoData"
import { Link } from "react-router-dom"
import { cityDetails } from "@/Constants/cityDetails"
import CarousalMain from "../Cards/Carousal"
import SubscriptionModal from "./SubscriptionModal"
import { useState } from "react"
import { useStateContext } from "@/Context/ContextProvider"
import UserCardReview from "../Cards/UserreviewCard"

function Body() {
    const slideLeft = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideLeft1 = () => {
        var slider = document.getElementById("slider2")
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const slideRight1 = () => {
        var slider = document.getElementById("slider2")
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const [openModal, setOpenModal] = useState(false)
    const { screenSize } = useStateContext()
    return (
        <>

            <div className="bg-[#171A21] md:pt-0 pt-3">
                {/* <img className="w-full object-cover" src={Images.car1} /> */}
                {screenSize < 900 && <div className="w-[90%] text-white py-0.5 pl-5 pr-0.5 rounded-full flex items-center border-1 border-[#8F806580] mx-auto mb-3 ">
                {/* <div className="w-[90%] text-white py-0.5 pl-5 pr-0.5 rounded-full flex items-center border-1 border-[#8F806580] mx-auto mb-3 "> */}
                    <input className="flex-grow text-white focus:outline-none bg-[#171A21]" placeholder="Search cars by name" />
                    <div className="h-8 w-8 rounded-full flex justify-center items-center bg-[#8F8065]">
                        <Search color="white" className="h-3 w-3" />
                    </div>
                </div>}
                <CarousalMain />
                <div className="relative my-10">
                    <h1 className="text-center text-2xl mb-7 text-white">Search by brands</h1>
                    <div id="slider" className=" w-full h-full pl-4 md:pl-14 hide-scrollbar scroll scroll-smooth whitespace-nowrap flex flex-row overflow-x-scroll ">
                        {logoData.map((itm) =>
                            <div key={itm.id} className="inline-block mx-2">
                                <Link to="/cars">
                                    <LogoName key={itm.id} src={itm.src} name={itm.name} />
                                </Link>
                            </div>
                        )} 
                    </div>
                    <div className="flex justify-end items-center px-10 py-5">
                        <button className="border-1 border-white rounded-4xl px-3 mx-1 py-1" onClick={slideLeft}><ChevronLeft color="white" /></button>
                        <button className="border-1 border-white rounded-4xl px-3 mx-1 py-1" onClick={slideRight}>
                            <ChevronRight color="white" />
                        </button>
                    </div>
                </div>
                <div className="md:w-[80%] w-[100%] mx-auto my-10">
                    <img className="w-full" src={Images.advertisement} />
                </div>
                <div className="flex flex-col items-center my-10 justify-center">
                    <h1 className="text-center text-2xl mb-7 text-white">Top deals</h1>
                    <div id="slider2" className="w-full md:pl-14 pl-4 scroll hide-scrollbar scroll-smooth whitespace-nowrap flex flex-row overflow-x-scroll">
                        {
                            carDetailsData.map((itm) =>
                                <div key={itm.id} className="inline-block md:mx-2 mx-1">
                                    <CarCard name={itm.name} year={itm.year} engine={itm.engine} img={itm.img} location={itm.location} kms={itm.kms} price={itm.oPrice} type={itm.type} gear={itm.gear} seat={itm.seat} fuel={itm.fuel} />
                                </div>)
                        }
                    </div>
                    <div className="flex w-full justify-start items-center md:pl-14 pl-4 py-5">
                        <button className="border-1 border-white rounded-4xl px-3 mx-1 py-1" onClick={slideLeft1}><ChevronLeft color="white" /></button>
                        <button className="border-1 border-white rounded-4xl px-3 mx-1 py-1" onClick={slideRight1}>
                            <ChevronRight color="white" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col my-10 items-center justify-center">
                    <h1 className="text-center text-2xl mb-7 text-white">Popular cars by city</h1>
                    <div className="flex flex-wrap justify-center">
                        {cityDetails.map((city) => <CityCard name={city.name} src={city.img} key={city.id} />)}
                    </div>
                </div>
                <div className="flex flex-col bg-[#171A21] mt-10 items-center justify-center">
                    <h1 className="text-center text-2xl mb-7 text-white">How it works</h1>
                    <div className="relative w-full flex  justify-center items-center">
                        <img className="w-[70%] sm:w-[60%] h-auto object-contain" src={Images.car2} alt="Car" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                            <img className="w-[20%] sm:w-[45%] object-contain cursor-pointer" src={Images.play} alt="Play" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#0A0A0B33] via-[#0A0A0B50] to-[#0A0A0B33] my-10 w-full">
                        <div className="w-[90%] md:w-[60%] my-10 mx-auto flex flex-col lg:flex-row items-center">
                            <div className="flex flex-col justify-between md:pr-10 items-center md:items-start">
                                <h1 className="md:text-2xl text-xl text-white text-center md:text-left">
                                    Do You Want To Receive Special offers?
                                </h1>
                                <p className="text-[#BABEC4] my-2 text-center md:text-left">
                                    Be the first to receive all the information about our products and new cars by email by subscribing to our mailing list.
                                </p>
                                <button
                                    onClick={() => setOpenModal(true)}
                                    className="bg-[#8F8065] px-5 py-2 rounded-lg text-white mt-3"
                                >
                                    Subscribe now
                                </button>
                            </div>
                            <img className="w-112 mt-5 md:mt-0" src={Images.car3} alt="Car" />
                        </div>
                    </div>


                    <SubscriptionModal openModal={openModal} setIsDialogOpen={setOpenModal} />

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

            </div>
        </>
    )
}
export default Body