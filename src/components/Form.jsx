import React, { useContext, useRef } from 'react'
import { MyContext } from '../myContext/Mycontext'

const Form = () => {
    const [products, setProducts] = useContext(MyContext)
    const name = useRef('')
    const price = useRef(0)


    const submitHandler = (e) => {
        e.preventDefault()
        setProducts([...products, { id: new Date(), name: name.current.value, price: price.current.value }])

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' ref={name} />
                <input type='number' ref={price} />
                <input type='submit' value="add new Product" />
            </form>
        </div>
    )
}

export default Form
