import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

export const counterSlice = createSlice({
  name: "Calcs",
  initialState,
  initialState,
  reducers: {
    add: (currentState, action) => {
      console.log(action);
      const sum =
        Number(action.payload.firstNumber) +
        Number(action.payload.secondNumber);
      currentState.result = sum;
    },
    sub: (currentState, action) => {
      const { firstNumber, secondNumber } = action.payload;
      currentState.result = firstNumber - secondNumber;
    },
    mult: (currentState, action) => {
      const { firstNumber, secondNumber } = action.payload;
      currentState.result = firstNumber * secondNumber;
    },
    div: (currentState, action) => {
      const { firstNumber, secondNumber } = action.payload;
      currentState.result = firstNumber / secondNumber;
    },
  },
});
export const { add, sub, mult, div } = counterSlice.actions;
export default counterSlice.reducer;
