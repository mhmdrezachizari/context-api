import { createContext, useState } from "react";

export const myContext = createContext()

export const MyProvider = (props) =>{
const [flag, setflag] = useState(false)
return(
    <myContext.Provider value={[proudact, setproudact]}>
        {props.children}
    </myContext.Provider>
)
}