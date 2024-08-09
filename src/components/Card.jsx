import React, { useContext } from 'react'
import { myContext } from '../../myContext/myContext'

const Card = () => {
    const [proudact, setproudact]  = useContext(myContext)
  return (
    <div>
      {
        proudact.map(item=>{
            return <h1>{item.name}</h1>
        })
      }
    </div>
  )
}

export default Card
