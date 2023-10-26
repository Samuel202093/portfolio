import { createContext, useContext, useState } from "react";



export const activeContext = createContext()


export const ActiveContextProvider = ({children})=>{
    const [activeSection, setActiveSection] = useState('Home')
    return(
        <activeContext.Provider value={{activeSection, setActiveSection}}>
            {children}
        </activeContext.Provider>
    )
}


export const UseActiveContext = ()=>{
    return useContext(activeContext)
}