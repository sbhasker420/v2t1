import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

// NO NEED TO USE BREAK BECAUSE IT IS RETURNING SOME DATA , SO IT WILL NOT GO BACK TO THE NEXXT LINE....
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };

    /* in the common reducer value : state.counter is available but here state.ctrRed.counter will not
        work because in this reducer it does not have access to the global state but only to the state of 
        its own reducer-state , so if we are in a reducer and need some value from global state then we 
        can only get it from the actionPayload
    */
    case actionTypes.DELETE_RESULT:
      // Solution 1
      //   const id = 2;
      //   const updatedArray = [...state.results];
      //   updatedArray.splice(id, 1);

      // Solution 2
      // filter returns a new array (newArray do not have the deleted element)...
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
