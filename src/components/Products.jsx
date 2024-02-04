import React, { useContext, useState } from 'react'
import Card from './Card'
import { MyContext } from '../myContext/Mycontext'

const Products = () => {
    const [products, setProducts] = useContext(MyContext)
    return (
        <div>
            {
                products.map(item => {
                    return <Card product={item} />
                })
            }
        </div>
    )
}

export default Products
