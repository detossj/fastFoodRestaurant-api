import React from 'react'
import StoreCard from './StoreCard'
import { useStores } from '../context/StoreContext'

const StoreList = () => {

    const { stores } = useStores()

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