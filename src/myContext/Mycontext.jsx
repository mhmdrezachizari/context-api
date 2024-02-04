import { createContext, useState } from "react";

export const MyContext = createContext();


export const MyProvider = (props) => {
   const [products, setProducts] = useState([
      { id: 1, name: 'samsung s3', price: 100 },
      { id: 2, name: 'samsung s4', price: 1000 },
      { id: 3, name: 'samsung s5', price: 10000 },
   ])

   return (
      <MyContext.Provider value={[products, setProducts]}>
         {props.children}
      </MyContext.Provider>
   )
}