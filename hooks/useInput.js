import { useState } from "react";

export function useInput(defaultValue) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
  };
}

// what this hook recreates:

// function handleInputChange(identifier, value) {
//   setEnteredValues((prevValues) => ({
//     ...prevValues,
//     // dynamically set a property where the name of the property is stored in a variable or parameter
//     [identifier]: value,
//   }));
//   setDidEdit((prevEdit) => ({
//     ...prevEdit,
//     [identifier]: false,
//   }));
// }

// function handleInputBlur(identifier) {
//   setDidEdit((prevEdit) => ({
//     ...prevEdit,
//     [identifier]: true,
//   }));
// }
