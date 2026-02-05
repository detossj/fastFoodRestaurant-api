import React, { useState, useEffect } from 'react'
import { MapPin, Truck } from 'lucide-react'
import { useStores } from '../context/StoreContext';
import './DeliveryMethodCard.css';
import { useAuth } from '../context/AuthContext';

const DeliveryMethodCard = ({tipoEntrega, setTipoEntrega, setDeliveryAddress}) => {

    const { user } = useAuth()
    const [direction, setDirection] = useState()
    const [subDirection, setSubDirection] = useState()

    const { stores } = useStores();

    useEffect(() => {
        if (tipoEntrega === 'Delivery') {
            setDeliveryAddress(user?.address || 'Dirección no especificada');
        } else if (tipoEntrega === 'Retiro' && direction) {
            setDeliveryAddress(`${subDirection}, ${direction}`);
        }
    }, [tipoEntrega, direction, subDirection, user]);

    const handleStoreChange = (e) => {
        const selectedStore = stores.find(s => s.id.toString() === e.target.value);
        if (selectedStore) {
            setDirection(selectedStore.direction);
            setSubDirection(selectedStore.sub_direction);
        }
    };
    
    return (
        <div className="card shadow-sm mb-4 border-0">
            <div className="card-body p-4">
                <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                    <Truck size={20} color="#ff7a00" /> 
                    Método de entrega
                </h5>
                
                <div className="d-flex gap-3 mb-4">
                    <button 
                    className={`flex-fill fw-bold ${tipoEntrega === 'Delivery' ? 'paymet-pay-btn' : 'paymet-pay-btn-outline'}`}
                    onClick={() => setTipoEntrega('Delivery')}
                    >
                    Delivery (Envío)
                    </button>
                    <button 
                    className={`flex-fill fw-bold ${tipoEntrega === 'Retiro' ? 'paymet-pay-btn' : 'paymet-pay-btn-outline'}`}
                    onClick={() => setTipoEntrega('Retiro')}
                    >
                    Retiro en Tienda
                    </button>
                </div>

                {tipoEntrega === 'Delivery' ? (
                     <div className="row g-3 animate__animated animate__fadeIn">
                        <div className="col-md-8">
                            <label className="form-label text-muted small fw-bold">Direccion</label>
                            <input type="text" className="form-control" placeholder="Ej: Av. Siempre Viva 123" value={user?.address || ''} onChange={(e) => setDeliveryAddress(e.target.value)} />
                        </div>
                        <div className="col-4">
                            <label className="form-label text-muted small fw-bold">Comuna</label>
                            <select className="form-select">
                                {stores.map((store) => (
                                    <option key={store.id}>{store.direction}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                 
            ): (

                    <>
                        <div className="col-12">
                                <label className="form-label text-muted small fw-bold">Comuna</label>
                                <select className="form-select" onChange={handleStoreChange}>
                                    {stores.map((store) => (
                                        <option key={store.id} value={store.id}>{store.direction}</option>
                                    ))}
                                </select>
                        </div>
                        {direction && (
                            <div className="alert alert-info d-flex align-items-center gap-2 mt-3" role="alert" style={{backgroundColor:'#FFF6EE', borderColor:'#FFDDC1', color:'#663C00'}}>
                                <MapPin size={18} color="#ff7a00"/>
                                <div>
                                    <strong>Sucursal:</strong> {subDirection}, {direction}
                                    <div className="small">Tu pedido estará listo en 20-30 minutos.</div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default DeliveryMethodCard