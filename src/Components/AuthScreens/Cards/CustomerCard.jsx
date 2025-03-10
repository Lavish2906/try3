// import { Icons } from "../../../assets/Icons";

function CustomerCard({ review, comment, name }) {
    return (
        <div className="flex flex-col p-4 rounded-lg m-2 border border-[#ccc] bg-[#14171C] w-50">
            <div>
                <h5 className="text-white text-lg sm:text-xl">Great Work</h5>
                {/* <img src={Icons.placeholderpic} alt="reviewer" className="w-full h-auto object-contain" /> */}
            </div>
            <div>
                <p className="text-gray-400 text-sm sm:text-base">
                    Amazing design, easy to customize, and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.
                </p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex flex-col items-center">
                    <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex justify-center items-center rounded-full overflow-hidden">
                        {/* <img src={Icons.placeholderpic} alt="user-avatar" className="w-full h-full object-contain" /> */}
                    </div>
                    <p className="text-white text-sm sm:text-base">Facebook</p>
                </div>
                <h4 className="text-white text-sm sm:text-base">{name}</h4>
            </div>
        </div>
    );
}

export default CustomerCard;
