import React, { useContext, useRef } from "react";
import { myContext } from "../../myContext/myContext";

const Form = () => {
    const [proudact, setproudact] = useContext(myContext)
  const name = useRef();
  const price = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    setproudact([...proudact, { id: new Date().getTime(), name: name.current.value, price: price.current.value }]);
    
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="name" ref={name} />
        <input type="text" placeholder="price" ref={price} />
        <button type="submit">add prd</button>
      </form>
    </div>
  );
};

export default Form;
