import { useReducer, useEffect } from "react";

const initialTimeState = { time: new Date().toLocaleTimeString() };

function reducer(state, action) {
  switch (action.type) {
    case "updateTime":
      return { time: new Date().toLocaleTimeString() };
    default:
      return state;
  }
}

export function ReducerClock() {
  const [state, dispatch] = useReducer(reducer, initialTimeState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "updateTime" });
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>CLOCK</h1>
      <p>{state.time}</p>
    </>
  );
}
