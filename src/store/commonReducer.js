// SINGLE REDUCER

import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  results: [],
};

// NO NEED TO USE BREAK BECAUSE IT IS RETURNING SOME DATA , SO IT WILL NOT GO BACK TO THE NEXXT LINE....
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.DELETE_RESULT:
      //   const id = 2;
      //   const updatedArray = [...state.results];
      //   updatedArray.splice(id, 1);

      // filter returns a new array ...
      const updatedArray = state.results.filter(
        (result) => result.id !== action.deleteElementId
      );
      return {
        ...state,
        results: updatedArray,
      };
    default:
      return {
        ...state,
      };
  }

  //   if (action.type === "INCREMENT") {
  //     return {
  //       ...state,
  //       counter: state.counter + 1,
  //     };
  //   }
  //   if (action.type === "DECREMENT") {
  //     return {
  //       ...state,
  //       counter: state.counter - 1,
  //     };
  //   }
  //   if (action.type === "ADD") {
  //     return {
  //       ...state,
  //       counter: state.counter + action.value,
  //     };
  //   }
  //   if (action.type === "SUBTRACT") {
  //     return {
  //       ...state,
  //       counter: state.counter - action.value,
  //     };
  //   }
  //   return state;
};

export default reducer;
