import Faq from "../Accordian/Faq"
import UserCardReview from "../Cards/UserreviewCard"
import PurchasedPage from "./PurchsedPage"

function PurchasedHistory() {
    return (
        <div className="w-full bg-[#101115] text-white">
            <PurchasedPage />

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

            <div className="w-[90%] mx-auto">
                <Faq />
            </div>
        </div>
    )
}
export default PurchasedHistory