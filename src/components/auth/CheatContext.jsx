import { createContext, useContext, useState } from "react";


const cheatContext = createContext()


const CheatProvider = ({children}) => {
    const [data, setData] = useState([])
    return <cheatContext.Provider value={{ data, setData }}>
            {children}
    </cheatContext.Provider>
}


const useCheatProvider = () => {
    return useContext(cheatContext)
}

export { CheatProvider, useCheatProvider }