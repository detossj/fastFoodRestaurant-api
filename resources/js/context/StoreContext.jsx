import React, { createContext, useContext, useEffect, useState } from 'react'
import Config from '../Config'

const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {
    
    const [stores, setStores] = useState([])

    const loadStores = async () => {
        try {
            const response = await Config.getAllStores()
            setStores(response.data)
            console.log(response.data)
        } catch (error) {
            console.error("Error:",error),
            setStores([])
        }
    }
    
    useEffect(() => {
        loadStores();
    },[])

    return (
        <StoreContext.Provider value={{ stores }}>
            { children }
        </StoreContext.Provider>
    )
    
}

export const useStores = () => useContext(StoreContext)