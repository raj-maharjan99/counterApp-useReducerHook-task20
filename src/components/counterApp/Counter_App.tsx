// src/Counter.js
import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className=" mx-auto mt-8 text-center shadow-xl h-[200px] w-[400px]">
      <button className="bg-green-500 shadow-xl text-[25px] text-white px-4 py-2 rounded">
        Count: {state.count}
      </button>

      <div className="flex justify-center gap-3 pt-[20px]  ">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
