/* Import the CSS file, the hooks needed to interact with the store,
the reducers, and the useState hook. */
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw, addInterest, charges } from "./store/account"; 
import { useState } from 'react';
// Create a functional component: 
function App() {
  // The useSelector hook gets the current value of the account from the store (initially £250). Assign to a variable
  const balance = useSelector((state) => state.account.value.toFixed(2));
  // Assign the useDispatch hook to a variable (see below):
  const dispatch = useDispatch();
  // Use the useState hook to allow changes to be rendered in the input field. Initialise value as an empty string:
  const [userInput, setUserInput] = useState("");
  /* When a "submit" button is clicked, the function runs. It stops the button submitting 
  the form, and resets the value in the input field to be empty.*/ 
  const handleSubmit= (e) => {
    e.preventDefault();
    setUserInput("");
  }
  /* The component returns an h1, an h2 that displays the current value from the store,
  a form with an input field and two buttons that interact with it, and two other buttons.
  - When the user enters numbers in the input field, the value is displayed in the field using
  onChange and e.target.value. setUserInput then updates the value of userInput.
  - All 4 buttons call the useDispatch hook on a click event. This "dispatches" the action that
  calls the specific reducer in each case (in account.js), which updates the state of the app.
  - The Deposit and Withdraw buttons in the form take the userInput from the input field as an argument.
  This becomes the payload in the deposit and withdraw reducers in the account slice.
  */
  return (
    <div className="App">
      <h1>Manage Your Account</h1>
      <h2>Current balance: £{balance}</h2>

      <p>Enter a value and click on the relevant button to update your balance:</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={userInput} 
          placeholder="Enter an amount in £:"
          onChange={(e) => setUserInput(e.target.value)} />
        <button type="submit" onClick={() => dispatch(deposit(Number(userInput)))}>Deposit</button>
        <button type="submit" onClick={() => dispatch(withdraw(Number(userInput)))}>Withdraw</button>
      </form>
      <p>Use the buttons below to add 5% interest or subtract a charge of 15%:</p>
      <button type="button" onClick={() => dispatch(addInterest())}>Add Interest</button>
      <button type="button" onClick={() => dispatch(charges())}>Charges</button>

    </div>
  );
}
// Export the component to be imported by index.js:
export default App;
