import { Images } from "@/assets/Images/Images";

function UserCardReview() {

    return (
        <div className="max-w-md w-100 bg-[#14171C] text-white p-6 m-2 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold">Great Work</h2>
            <div className="mt-3 text-lg">
                {/* <span className="text-4xl leading-none">&ldquo;</span> */}
                <p className="text-sm">Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”</p>
            </div>
            <div className="mt-6 flex items-center gap-4">
                <img
                    src={Images.user}
                    alt="Leslie Alexander"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="">
                    <p className="text-lg font-medium">Leslie Alexander</p>
                    <p className="text-gray-400">Facebook</p>
                </div>
            </div>
        </div>
    );
};
export default UserCardReview