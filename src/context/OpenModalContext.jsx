import { createContext, useContext, useState } from "react"

const OpenModalContext = createContext()


const OpenModalContextProvider = ({ children }) => {
        const [openModal,setOpenModal] = useState(false)
        const [sidebarOpen,setsidebarOpen] = useState(false)
        const toggle = () =>{ 
            setOpenModal(!openModal)
        }
        const sidebarToggal = () =>{
            setsidebarOpen(!sidebarOpen)
        }
    return (
    <OpenModalContext.Provider value={{openModal,toggle,sidebarToggal,sidebarOpen}}>
        {children}
    </OpenModalContext.Provider>
    )
}


const useOpenModal = () =>{
    return useContext(OpenModalContext)
}


export {OpenModalContextProvider,useOpenModal}