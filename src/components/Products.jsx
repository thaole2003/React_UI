import React from 'react'
import { popularProducts } from '../data'
import Product from './Product';
const Products = () => {
    return (
        <div className='flex p-5 flex-wrap'>
            {popularProducts.map(item => (
                item.img ? <Product key={item.id} item={item} /> : <div />
            ))}
        </div>
    )
}

export default Products
