import React, { useState, useEffect } from 'react'
import { MapPin, Truck } from 'lucide-react'
import { useStores } from '../context/StoreContext';

const PaymentMethodCard = ({tipoEntrega, setTipoEntrega}) => {

    const [direction, setDirection] = useState()
    const [subDirection, setSubDirection] = useState()

    const { stores } = useStores();

    const handleStoreChange = (e) => {
        const selectedId = e.target.value;
        
        const selectedStore = stores.find(store => store.id.toString() === selectedId);

        if (selectedStore) {
            setDirection(selectedStore.direction);
            setSubDirection(selectedStore.sub_direction);
        }
    };


    useEffect(() => {
        if (stores && stores.length > 0 && !direction) {
            setDirection(stores[0].direction);
            setSubDirection(stores[0].sub_direction);
        }
    }, [stores]);

    return (
        <div className="card shadow-sm mb-4 border-0">
            <div className="card-body p-4">
            <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <Truck size={20} color="#ff7a00" /> 
                Método de entrega
            </h5>
            
            <div className="d-flex gap-3 mb-4">
                <button 
                className={`btn flex-fill py-3 fw-bold ${tipoEntrega === 'delivery' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setTipoEntrega('delivery')}
                >
                Delivery (Envío)
                </button>
                <button 
                className={`btn flex-fill py-3 fw-bold ${tipoEntrega === 'retiro' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setTipoEntrega('retiro')}
                >
                Retiro en Tienda
                </button>
            </div>

            {tipoEntrega === 'delivery' ? (
                <div className="row g-3 animate__animated animate__fadeIn">
                    <div className="col-md-8">
                        <label className="form-label text-muted small fw-bold">Calle y Número</label>
                        <input type="text" className="form-control" placeholder="Ej: Av. Siempre Viva 123" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label text-muted small fw-bold">Depto / Casa (Opcional)</label>
                        <input type="text" className="form-control" placeholder="Ej: 4B" />
                    </div>
                    <div className="col-12">
                        <label className="form-label text-muted small fw-bold">Comuna</label>
                        <select className="form-select">
                            {stores.map((store) => (
                                <option key={store.id}>{store.direction}</option>
                            ))}
                        </select>
                    </div>
                </div>
            ) : (

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
                        <div className="alert alert-info d-flex align-items-center gap-2 mt-3" role="alert">
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

export default PaymentMethodCard