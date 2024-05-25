import { useReducer } from "react";
import { produce } from "immer";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
  const INCREMENT_COUNT = "increment";
  const DECREMENT_COUNT = "decrement";
  const CHANGE_VALUE_TO_ADD = "change-value-to-add";
  const ADD_VALUE = "add-value";

   /*****************WITHOUT IMMMER********************** */
  // const reducer = (state, action) => {
  //   const { type, payload } = action;
  //   console.log(action);
  //   switch (type) {
  //     case INCREMENT_COUNT:
  //     case DECREMENT_COUNT:
  //       return {
  //         ...state,
  //         count: payload,
  //       };

  //     case CHANGE_VALUE_TO_ADD:
  //       return {
  //         ...state,
  //         valueToAdd: payload,
  //       };
  //     case ADD_VALUE:
  //       return {
  //         ...state,
  //         count: payload,
  //         valueToAdd: 0,
  //       };
  //     default:
  //       return state;
  //   }
  // };

/*****************WITH IMMMER********************** */
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case INCREMENT_COUNT:
      case DECREMENT_COUNT:
        state.count = payload,
        return;
      case CHANGE_VALUE_TO_ADD:
        return {
          ...state,
          valueToAdd: payload,
        };
      case ADD_VALUE:
        return {
          ...state,
          count: payload,
          valueToAdd: 0,
        };
      default:
        return state;
    }
  };
 /*****************WITHOUT IMMMER********************** */
  //const [state, dispatch] = useReducer(reducer, { count: initialCount, valueToAdd: 0 });
 
  /*****************WITH IMMMER********************** */
  const [state, dispatch] = useReducer(produce(reducer), { count: initialCount, valueToAdd: 0 });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
      payload: state.count + 1,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
      payload: state.count - 1,
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE,
      payload: state.count + parseInt(state.valueToAdd),
    });
  };

  const handleOnChange = (event) => {
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: event.target.value,
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form>
        <label>Add a lot!</label>
        <input type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" onChange={handleOnChange} value={state.valueToAdd || ""} />
        <Button onClick={handleClick}>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
