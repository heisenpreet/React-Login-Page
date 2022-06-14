import StyledForm from "../UIComponents/StyledForm";
import { useRef, useState, useReducer } from "react";
import emailValidationCheck from "../helperFx/emailRegex";

const Form = (props) => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const [btnBlur, setbtnBlur] = useState("40%");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.login(passwordRef.current.value, emailRef.current.value);
    e.target.reset();
  };

  let debounce = false;
  const formChangeHandler = (e) => {
    if (debounce) {
      clearTimeout(debounce);
    }
    debounce = setTimeout(() => {
      if (
        !emailValidationCheck(emailRef.current.value) ||
        passwordRef.current.value.length < 8
      ) {
        setbtnBlur("40%");
        return;
      }
      setbtnBlur("100%");
    }, 500);
  };

  return (
    <StyledForm
      onSubmit={onSubmitHandler}
      onChange={formChangeHandler}
      opacity={btnBlur}
    >
      <input
        type={"email"}
        required
        placeholder="email Address"
        ref={emailRef}
      ></input>
      <input
        type={"password"}
        required
        placeholder="Password"
        minLength={8}
        ref={passwordRef}
      ></input>
      <button type="submit">Login</button>
    </StyledForm>
  );
};
export default Form;
