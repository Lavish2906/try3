function RegisterForm() {
    return (
        <div className="flex flex-col justify-between h-full md:w-1/2 w-full px-2">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-2xl text-white ">Register Yourself</h1>
                <h4 className="text-[#92908F]">Please enter your details below to create your account</h4>
            </div>
            <form className="flex flex-col" onSubmit={()=> {}}>
                <label className="text-[#8F8065] text-base leading-5 font-normal mt-3 mb-1">
                    Name
                </label>
                <input
                    className="bg-transparent border-1 border-gray-300 p-2 mb-2 text-gray-300 focus:border-[#8F8065] focus:outline-none"
                    type="name"
                    // name="email"
                    required
                />
                <label className="text-[#8F8065] text-base leading-5 font-normal mt-3 mb-1">
                    Email
                </label>
                <input
                    className="bg-transparent border-1 border-gray-300 p-2 mb-2 text-gray-300 focus:border-[#8F8065] focus:outline-none"
                    type="email"
                    name="email"
                    required
                />
                <label className="text-[#8F8065] text-base leading-5 font-normal mt-3 mb-1">
                    Mobile Number
                </label>
                <input
                    className="bg-transparent border-1 border-gray-300 p-2 mb-2 text-gray-300 focus:border-[#8F8065] focus:outline-none"
                    type="tel"
                    // name="email"
                    required
                />
                <button
                    type="submit"
                    className="bg-[#8F8065] text-white rounded-sm py-2 mt-3"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
export default RegisterForm