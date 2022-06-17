import React from "react";
import { useState } from "react";
const Username = React.createContext({
  name: "Harry",
  email: "harpreetsinghsodi@gmail.com",
});

export const AuthContextProvider = (props) => {
  const [username, setusername] = useState("");

  return (
    <Username.Provider
      value={{
        name: username,
        setusername: setusername,
      }}
    >
      {props.children}
    </Username.Provider>
  );
};

export default Username;
