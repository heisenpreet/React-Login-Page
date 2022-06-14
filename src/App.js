import "./App.css";
import StyledMain from "./UIComponents/StyledMain";
import Navbar from "./Components/navbar";
import Form from "./Components/Form";
import Header from "./Components/Header";
import { useState, useEffect, useReducer } from "react";

const authentication = (state, action) => {
  if (action.type === "LOGIN" && action.password === "1234567899") {
    return { val: action.email, auth: true };
  }
  return { auth: false };
};

function App() {
  // const [login, setlogin] = useState(false);
  const [login, dispatchLogin] = useReducer(authentication, {
    val: "",
    auth: false,
  });
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      // setlogin(true);
    }
  }, []);

  const loginHandler = (password, email) => {
    dispatchLogin({ type: "LOGIN", email: email, password: password });
    localStorage.setItem("isLoggedIn", "1");
  };
  const logOutHandler = () => {
    dispatchLogin({ type: "LOGOUT" });
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      <StyledMain>
        <Navbar login={login.auth} logout={logOutHandler} />
        {!login.auth && <Form login={loginHandler} />}
        {login.auth && <Header email={login.val} />}
      </StyledMain>
    </>
  );
}

export default App;
