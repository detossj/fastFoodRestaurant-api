import React from 'react'
import OrderCard from './OrderCard';
import { useOrders } from '../context/OrderContext';

const OrderList = () => {

    const { orders } = useOrders()

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