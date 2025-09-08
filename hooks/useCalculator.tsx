import React from "react";

function useCalculator() {
  const [currentValue, setCurrentValue] = React.useState<string>("0");
  const [operator, setOperator] = React.useState<string | null>(null);
  const [previousValue, setPreviousValue] = React.useState<string | null>(null);

  const handleNumber = (num: number) => {
    if (currentValue === "0") {
      setCurrentValue(num.toString());
    } else {
      setCurrentValue(currentValue + num.toString());
    }
  };

  const handleClear = () => {
    setCurrentValue("0");
  };

  const handleClearEntry = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
  };

  const handleOperator = (op: string) => {
    if (previousValue && operator && currentValue) {
      // Perform calculation
      let result = 0;
      const prev = parseFloat(previousValue);
      const current = parseFloat(currentValue);
      switch (operator) {
        case "plus":
          result = prev + current;
          break;
        case "minus":
          result = prev - current;
          break;
        case "multiply":
          result = prev * current;
          break;
        case "divide":
          result = prev / current;
          break;
        default:
          break;
      }
      setCurrentValue(result.toString());
      setPreviousValue(null);
      setOperator(null);
    } else {
      setPreviousValue(currentValue);
      setCurrentValue("0");
      setOperator(op);
    }
  };

  const handleEquals = () => {};

  const handlePress = (key: string) => {
    console.log(`pressed ${key} button`);
    console.log(currentValue, previousValue, operator);
    switch (key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        handleNumber(parseInt(key));
        break;
      case "clear":
        handleClear();
        break;
      case "clear-entry":
        handleClearEntry();
        break;
      case "plus-minus":
        setCurrentValue((parseFloat(currentValue) * -1).toString());
      case "plus":
      case "minus":
      case "divide":
      case "multiply":
      case "equals":
        handleOperator(key);
        break;
    }
  };

  return {
    handlePress,
    currentValue,
  };
}

export { useCalculator };
