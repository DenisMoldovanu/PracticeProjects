import { useEffect, useRef, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {value:enteredName, isValid:eneteredNameIsValid, hasError: nameInputHasError, valueChangeHandler: nameChangeHandler, InputBlurHandler:nameBlurHandler, reset:resetNameInput} = useInput(value => value.trim() !== '');
  // const nameInputRef = useRef();
  const[enteredEmail, setEnteredEmail] = useState('');
  // const[enteredNameisValid, setEnteredNameisValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] =useState(false);
  const [formIsValid, setFormIsValid] = useState(false)

  const eneteredEmailIsValid = enteredEmail.trim() !=='';
  const EmailInpuIsValid = !eneteredEmailIsValid && enteredEmailTouched;

  useEffect (() => {
    if(eneteredNameIsValid && eneteredEmailIsValid ){
      setFormIsValid(true)
    }else {
      setFormIsValid(false)
    }
  },[eneteredNameIsValid, eneteredEmailIsValid])

  
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value)
    // if(enteredName.trim() !== ''){
    //   setEnteredNameisValid(true);
    // }
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
    // if(enteredName.trim() === ''){
    //   setEnteredNameisValid(false);
    // }
  }

  const formSubmisionHandler = event => {
    event.preventDefault();


  if(!eneteredNameIsValid){
    return;
  }
  resetNameInput();
  // setEnteredNameisValid(true);

    // console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue)
  }

 
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = EmailInpuIsValid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        // ref={nameInputRef} 
        type='text' 
        id='name' 
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must be not empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
        // ref={nameInputRef} 
        type='email' 
        id='email' 
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
        />
        {EmailInpuIsValid && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
