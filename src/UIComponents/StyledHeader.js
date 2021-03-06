import styled from "styled-components";
import tw from "twin.macro";

const StyledHeader = styled.header`
  & {
    margin: 0 auto;
    grid-column: 1/-1;
    grid-row: 2/-1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.header};

    ${tw`text-center  text-gray-800 py-20 px-6`}

    h1 {
      ${tw`text-5xl font-bold mt-0 mb-6`}
    }

    h3 {
      ${tw`text-3xl font-bold mb-8`}
    }
  }
`;
export default StyledHeader;
