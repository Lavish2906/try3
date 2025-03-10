function CityCard({src, name}){
    return(
        <div className="flex flex-col my-4 items-center mx-5">
            <img className="h-25 w-25" src={src}/>
            <p className="text-2xl mt-1 text-white">{name}</p>
        </div>
    )
}
export default CityCard