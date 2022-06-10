import "./App.css";
import StyledMain from "./UIComponents/StyledMain";
import Navbar from "./Components/navbar";
import Form from "./Components/Form";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [login, setlogin] = useState(false);

  const logHandler = () => {
    setlogin(!login);
  };
  return (
    <>
      <StyledMain>
        <Navbar login={login} logout={logHandler} />
        {!login && <Form login={logHandler} />}
        {login && <Header />}
      </StyledMain>
    </>
  );
}

export default App;
