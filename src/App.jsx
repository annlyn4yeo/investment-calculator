import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >=1;

  const handleChange = (inputIdString, updatedValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdString]: +updatedValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onInput={handleChange} userInputObject={userInput} />
      {isInputValid ? <Results userInputObject={userInput} /> : <div className="center">Please enter any duration greater than 0</div>}
    </>
  );
}
export default App;
