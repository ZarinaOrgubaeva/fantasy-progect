import { useReducer } from "react";
const INCREASE = "increase";
const DECREASE = "decrease";
const RESET = "reset";

const initialState = 0;
const init = (initialValue) => initialValue;


const increase = (payload) => {
  return {
    type: INCREASE,
    payload,
  };
};
const decrease = (payload) => {
  return {
    type: DECREASE,
    payload,
  };
};
const reducer = (state, action) => {
  if (action.type === INCREASE) {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }
  if (action.type === DECREASE) {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }
  if (action.type === RESET) {
    return {
      count: init(initialState)
  }
};
}
export const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState,init);

  const incrementHandler = () => {
    dispatch(increase(1));
  };
  const incrementHandler2 = () => {
    dispatch(increase(4));
  };
  const decrementHandler = () => {
    dispatch(decrease(-1));
  };
  const decrementHandler2 = () => {
    dispatch(decrease(-2));
  };
  const resetHandler = () => {
    dispatch({type: RESET});
  };
  return {
    count: state.count,
    incrementHandler,
    incrementHandler2,
    decrementHandler,
    decrementHandler2,
    resetHandler
  };
};

