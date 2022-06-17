import StyledHeader from "../UIComponents/StyledHeader";
import { useContext } from "react";
import Username from "../store/auth-user";

const Header = (props) => {
  const username = useContext(Username);
  return (
    <StyledHeader>
      <h1>Welcome</h1>
      <h3>{username.name}</h3>
    </StyledHeader>
  );
};
export default Header;
