import styled from "styled-components";
import tw from "twin.macro";

const StyledMain = styled.main`
  & {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(40, 2.5%);
    grid-template-rows: repeat(11, min-content);
    overflow: hidden;
  }
`;
export default StyledMain;
