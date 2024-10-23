import { useReducer } from "react";

const initialCountState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + action.payload };
    case "dec":
      return { count: state.count - action.payload };
    case "reset":
      return { count: action.payload };
    default:
      return state;
  }
}

export function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialCountState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "inc", payload: 1 });
        }}
      >
        Increment
      </button>
      <button
        disabled={state.count === 0}
        onClick={() => {
          dispatch({ type: "dec", payload: 1 });
        }}
      >
        Decrement
      </button>
      <button
        disabled={state.count === 0}
        onClick={() => {
          dispatch({ type: "reset", payload: 0 });
        }}
      >
        Reset
      </button>
    </div>
  );
}
