function ProfileForm() {
    return (
        <div className="w-full text-white">
            <div className="space-y-3 w-full">
                {/* For larger screens: inputs in two columns, for smaller screens: stack them */}
                <div className="flex flex-col sm:flex-row justify-between w-full gap-2">
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="name"
                            className="p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="State / Province"
                            className=" p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                        />
                    </div>
                </div>
                
                <label>Phone</label>
                <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                />

                <label>Gender</label>
                <input
                    type="text"
                    placeholder="Locality"
                    className="w-full p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                />
                
                <div className="flex flex-col sm:flex-row justify-between w-full gap-2">
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label>City</label>
                        <input
                            type="text"
                            placeholder="City"
                            className=" p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label>State</label>
                        <input
                            type="text"
                            placeholder="State / Province"
                            className=" p-2 rounded bg-[#171A21] border-1 border-gray-600 focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileForm;
