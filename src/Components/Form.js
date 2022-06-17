import StyledForm from "../UIComponents/StyledForm";
import { useRef, useState, useContext } from "react";
import emailValidationCheck from "../helperFx/emailRegex";

import Username from "../store/auth-user";

const Form = (props) => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const [btnBlur, setbtnBlur] = useState("40%");

  const username = useContext(Username);
  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.login(passwordRef.current.value, nameRef.current.value);
    username.setusername(nameRef.current.value);
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
      <input type={"text"} required placeholder="Name" ref={nameRef}></input>
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
