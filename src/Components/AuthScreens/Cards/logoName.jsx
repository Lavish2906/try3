function LogoName({src, name}){
    return(
        <div className="bg-[#171A21] h-38 sm:w-[190px] w-[175px] rounded-lg border-1 border-white md:h-45 flex flex-col cursor-pointer hover:scale-105 ease-in-out duration-300 m-1.5 justify-center items-center">
            <img src={src}/>
            <p className="text-white text-[15px] mt-2">{name}</p>
        </div>
    )
}
export default LogoName