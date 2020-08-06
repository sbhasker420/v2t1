const redux = require("redux"); // nodeJS syntax
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

//REDUCER
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  //   switch (action.type) {
  //     case "INC_COUNTER":
  //       return {
  //         ...state,
  //         counter: state.counter + 1,
  //       };
  //   }

  return state;
};

// STORE
const store = createStore(rootReducer);
console.log(store.getState());

// go into the src folder in the terminal and then run : node redux-basics.js
// i.e. saket-projects/v2t1/src and node redux-basics.js

//SUBSCRIPTION
store.subscribe(() => {
  console.log("[subscription]", store.getState());
});

// DISPATCHING ACTION
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
