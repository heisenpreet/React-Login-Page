import StyledNav from "../UIComponents/StyledNav.js";

const Navbar = (props) => {
  return (
    <StyledNav>
      <h2>React Login</h2>
      {props.login && <button onClick={props.logout}>Log Out</button>}
    </StyledNav>
  );
};

export default Navbar;
