import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();


export const ContextProvider = ({children})=> {
    const [isActive, setIsActive] = useState(true)
    // const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize , setScreenSize] = useState(undefined)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function handleClick(clicked){
        setIsClicked({... initialState , [clicked] : true});
    }
    const [isFilter, setIsFilter] = useState(false)

    return(
        <StateContext.Provider value={{isActive,isLoggedIn, setIsLoggedIn ,setIsActive, screenSize, setScreenSize,isFilter, setIsFilter}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);