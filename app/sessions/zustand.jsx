import React from "react";
import useCountStore from "../assets/store";

const Zustand = () => {
  const {counter,increment,decrement } = useCountStore((state) => ({counter:state.count,increment:state.increaseCount,decrement:state.decreaseCount}));
  console.log(counter);

//   const increment=useCountStore((state) => state.increaseCount)
//   const decrement=useCountStore((state) => state.decreaseCount)

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>
        click to increase count
      </button>

      <button onClick={decrement}>click to decrease count</button>
    </div>
  );
};

export default Zustand;
