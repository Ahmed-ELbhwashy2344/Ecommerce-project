// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { add, div, mult, sub } from "../../Features/CounterSlice";

// export default function About() {
//   const [firstNumberInput, setFirstNumberInput] = useState(null);
//   const [secondNumberInput, setSecondNumberInput] = useState(null);
//   const [result, setResult] = useState(null);
//   const resultState = useSelector((state) => {
//     console.log("Hello", state);
//     return state.counter.result;
//   });
//   const dispatech = useDispatch();

//   function handleSum() {
//     // const result = Number(firstNumberInput) + Number(secondNumberInput);
//     // setResult(result);
//     dispatech(
//       add({
//         firstNumber: firstNumberInput,
//         secondNumber: secondNumberInput,
//       })
//     );
//   }
//   function handleSub() {
//     dispatech(
//       sub({
//         firstNumber: firstNumberInput,
//         secondNumber: secondNumberInput,
//       })
//     );
//   }
//   function handleMlti() {
//     dispatech(
//       mult({
//         firstNumber: firstNumberInput,
//         secondNumber: secondNumberInput,
//       })
//     );
//   }
//   function handleDiv() {
//     dispatech(
//       div({
//         firstNumber: firstNumberInput,
//         secondNumber: secondNumberInput,
//       })
//     );
//   }

//   return (
//     <div className=" pt-54 w-1/2 mx-auto">
//       <label className="block" htmlFor="First Number">
//         First Number
//       </label>
//       <input
//         type="text"
//         value={firstNumberInput}
//         onChange={(e) => setFirstNumberInput(e.target.value)}
//         id="First Number"
//         className="block border-[1px] border-black"
//       />
//       <label className="block" htmlFor="Second Number">
//         Second Number
//       </label>
//       <input
//         type="text"
//         value={secondNumberInput}
//         onChange={(e) => setSecondNumberInput(e.target.value)}
//         id="Second Number"
//         className="block border-[1px] border-black"
//       />

//       <button
//         className=" cursor-pointer bg-teal-500 p-2 mt-2 block"
//         onClick={handleSum}
//       >
//         Add
//       </button>
//       <button
//         className=" cursor-pointer bg-teal-500 p-2 mt-2 block"
//         onClick={handleSub}
//       >
//         Sub
//       </button>
//       <button
//         className=" cursor-pointer bg-teal-500 p-2 mt-2 block"
//         onClick={handleMlti}
//       >
//         Mlti
//       </button>
//       <button
//         className=" cursor-pointer bg-teal-500 p-2 mt-2 block"
//         onClick={handleDiv}
//       >
//         Div
//       </button>
//       <h1>{resultState}</h1>
//     </div>
//   );
// }
import React from 'react'

export default function About() {
  return (
    <div>About</div>
  )
}
