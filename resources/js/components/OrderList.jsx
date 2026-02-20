import React from 'react'
import OrderCard from './OrderCard';
import { useOrders } from '../context/OrderContext';

const OrderList = () => {

    const { orders, loading } = useOrders()

    return (
        <div className='container p-5' style={{ minHeight: '100vh'}}>
            <div className="d-flex flex-wrap gap-4 justify-content-center">
                
                {loading ? (
                    <h4 className="text-muted text-center mt-5">Cargando pedidos...</h4>
                ) : 

                orders.length === 0 ? (
                    <h4 className="text-muted text-center mt-5">No tienes pedidos actualmente.</h4>
                ) : 
                
                (
                    orders.map( order => (
                        <OrderCard key={order.id} order={order}/>
                    ))
                )}
                
            </div>
        </div>
    )
}

export default OrderList;