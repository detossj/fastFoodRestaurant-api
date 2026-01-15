import React, { useEffect, useState } from 'react'
import Config from '../Config'
import StoreCard from './StoreCard'

const StoreList = () => {

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
        <div className='container p-5' style={{ minHeight: '100vh'}}>
            <div className="d-flex flex-wrap gap-4 justify-content-center">
                {
                    stores.map( store => (
                        <StoreCard key={store.id} store={store}/>
                    ))
                }
            </div>
        </div>
    )
}

export default StoreList