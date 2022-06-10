import styled from "styled-components";
import tw from "twin.macro";

const StyledNav = styled.nav`
  & {
    grid-column: 1/-1;
    grid-row: 1/1;
    background-color: rgb(12 74 110);
    color: rgb(248 250 252);
    font-weight: 500;
    font-size: 1.4rem;
    ${tw` p-5 flex justify-between`}

    button {
      ${tw`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
    }
  }
`;
export default StyledNav;
