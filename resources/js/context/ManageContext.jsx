import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import Config from '../Config';

const ManageContext = createContext(null)


export const ManageProvider = ({ children }) => {

    const [manage, setManage] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const loadData = async () => {
        setLoading(true);
        setError(null);
    
        try {
          const manageRes = await Config.getManage()
    
          setManage(manageRes?.data ?? []);
    
        } catch (err) {
            console.error("Error cargando datos:", err);
            setManage([])
            setError("Error al cargar los pedidos");
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        loadData();
    }, []);

    return (
        <ManageContext.Provider value={{ manage, loading, error }}>
            {children}
        </ManageContext.Provider>
    )
}

export const useManage = () => useContext(ManageContext);