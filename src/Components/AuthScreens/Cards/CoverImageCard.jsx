import { Images } from "@/assets/Images/Images"

function CoverImageCard({ title }) {
    return (
        <div className="w-full relative h-[90px] sm:h-[250px] md:h-[180px] lg:h-[322px]">
            {/* Apply black opacity background */}
            <img 
                src={Images.coverimage} 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70" 
                alt="Cover" 
            />
            
            {/* Center the h1 */}
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl px-4 sm:px-6">
                {title}
            </h1>
        </div>
    );
}

export default CoverImageCard;
