import { Images } from "@/assets/Images/Images"

function AboutUsImageCard() {
    return (
        <div className="w-full md:mx-0 mx-auto relative">
            <div className="relative">
            <img className="lg:w-70 md:w-60 w-45 absolute object-contain top-24" src={Images.aboutus1}/>
            <img className="lg:w-70 md:w-60 w-45 absolute object-contain left-[30%] lg:left-[30%]" src={Images.aboutus2}/>
            </div>
            {/* <div className="absolute right-0 bottom-0 transform translate-y-[110%] ">
                <h1>95%</h1>
                <h4>Happy users</h4>
            </div> */} 
        </div>
        
    )
}
export default AboutUsImageCard