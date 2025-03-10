import { Images } from "@/assets/Images/Images"
import AboutUsImageCard from "../Cards/AboutUsImageCard"
import CoverImageCard from "../Cards/CoverImageCard"
import NewsandUpdateCard from "../Cards/NewsandUpdatesCard"

function NewsAndUpdate() {
    return (
        <div className="w-full bg-[#101115] pb-8 text-white">
            <CoverImageCard title="News and Updates" />
            <div className="md:w-[80%] w-[95%] mx-auto mt-6">
                <NewsandUpdateCard img={Images.newscar1} heading="Lorem ipsum dolor sit amet consectetur, adipisicing elit." date="20 Nov 2024" user="Loream ipsum" />
                <NewsandUpdateCard img={Images.newscar2} heading="Lorem ipsum dolor sit amet consectetur, adipisicing elit." date="20 Nov 2024" user="Loream ipsum" />
                <NewsandUpdateCard img={Images.newscar3} heading="Lorem ipsum dolor sit amet consectetur, adipisicing elit." date="20 Nov 2024" user="Loream ipsum" />
                <NewsandUpdateCard img={Images.newscar1} heading="Lorem ipsum dolor sit amet consectetur, adipisicing elit." date="20 Nov 2024" user="Loream ipsum" />
                <NewsandUpdateCard img={Images.newscar2} heading="Lorem ipsum dolor sit amet consectetur, adipisicing elit." date="20 Nov 2024" user="Loream ipsum" />
            </div>
            <div className="w-[90%] sm:w-[80%] mx-auto lg:mt-10 mt-4 items-center border bg-[#171A21] rounded-lg lg:p-8 p-5 flex flex-col lg:flex-row justify-between">
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
export default NewsAndUpdate