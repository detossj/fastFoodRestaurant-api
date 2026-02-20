import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import Config from '../Config';
import { useAuth } from './AuthContext';

const OrdersContext = createContext(null)


export const OrderProvider = ({ children }) => {

    const { user } = useAuth()

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const loadData = async () => {
        setLoading(true);
        setError(null);
    
        try {
          const ordersRes = await Config.getOrders()
    
          setOrders(ordersRes?.data ?? []);
    
        } catch (err) {
            console.error("Error cargando datos:", err);
            setOrders([])
            setError("Error al cargar los pedidos");
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        if(user) {
            loadData();
        }
        else {
            setOrders([])
        }
    }, [user]);

    return (
        <OrdersContext.Provider value={{ orders, loading, error, loadData }}>
            {children}
        </OrdersContext.Provider>
    )
}

export const useOrders = () => useContext(OrdersContext);