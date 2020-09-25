import React from "react";
import "./App.css";
import Counter from "./component/Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      }
    default:
      return state;
  }

}

//Create a store
const store = createStore(reducer); // pass the reducer to createStore

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
