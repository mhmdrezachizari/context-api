import React, { useContext } from 'react'
import { MyContext } from '../myContext/Mycontext'

const Header = () => {
    const [products, setProducts] = useContext(MyContext)
    return (
        <div>
            <h1>products count : {products.length}  </h1>
        </div>
    )
}

export default Header
