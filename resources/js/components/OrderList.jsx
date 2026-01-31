import React, { useEffect, useState } from 'react'
import Config from '../Config';
import OrderCard from './OrderCard';

const OrderList = () => {

    const [orders, setOrders] = useState([]);

    const getOrders = async () => {

        try {
            const response = await Config.getOrders();
            if (response.status === 201 || response.status === 200) {
                setOrders(response.data);
                console.log("Pedidos obtenidos:", response.data);
            }
        } catch (error) {
            console.error("Error al obtener pedidos:", error.response?.data);
        }

    }

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className='container p-5' style={{ minHeight: '100vh'}}>
            <div className="d-flex flex-wrap gap-4 justify-content-center">
                {
                    orders.map( order => (
                        <OrderCard key={order.id} order={order}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OrderList