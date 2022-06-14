import StyledHeader from "../UIComponents/StyledHeader";

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>Welcome</h1>
      <h3>{props.email}</h3>
    </StyledHeader>
  );
};
export default Header;
