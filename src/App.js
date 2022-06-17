import StyledMain from "./UIComponents/StyledMain";
import Navbar from "./Components/navbar";
import Form from "./Components/Form";
import Header from "./Components/Header";
import { useEffect, useReducer, useState } from "react";
import Popover from "./Components/Popover";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./UIComponents/GlobalStyles";

const authentication = (prevstate, action) => {
  if (
    action.type === "LOGIN" &&
    (action.passkey === "USER" || action.password === "1234567899")
  ) {
    if (action.password) {
      localStorage.setItem("isLoggedIn", "USER");
    }
    return { val: action.email, auth: true, popover: false };
  }
  if (action.type === "LOGIN" && action.password !== "1234567899") {
    return { auth: false, popover: true };
  }
  if (action.type === "LOGOUT") {
    return { auth: false, popover: false };
  }
  if (action.type === "RELOAD") {
    return { ...prevstate, popover: false };
  }
};

function App() {
  const [login, dispatchLogin] = useReducer(authentication, {
    val: "",
    auth: false,
    popover: false,
  });
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "USER") {
      dispatchLogin({
        type: "LOGIN",
        passkey: localStorage.getItem("isLoggedIn"),
      });
    }
  }, []);

  const loginHandler = (password, email) => {
    dispatchLogin({ type: "LOGIN", email: email, password: password });
  };
  const logOutHandler = () => {
    dispatchLogin({ type: "LOGOUT" });
    localStorage.removeItem("isLoggedIn");
  };
  const reloadHandler = () => {
    dispatchLogin({ type: "RELOAD" });
  };
  const theme = {
    colors: {
      header: "lavender",
      form: "#ffffff",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <StyledMain>
          <Navbar login={login.auth} logout={logOutHandler} />
          {!login.auth && <Form login={loginHandler} />}
          {login.auth && <Header />}
          {<Popover active={login.popover} reload={reloadHandler} />}
        </StyledMain>
      </>
    </ThemeProvider>
  );
}

export default App;
