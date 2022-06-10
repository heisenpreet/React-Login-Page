import styled from "styled-components";
import tw from "twin.macro";

const StyledForm = styled.form.attrs((props) => ({}))`
  & {
    margin: 4rem auto;
    grid-column: 1/-1;
    grid-row: 2/-1;
    width: 100%;
    ${tw`bg-white text-center rounded py-10 px-7  max-w-xs  shadow-2xl  `}

    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      opacity: ${(props) => props.opacity};
      ${tw`bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 border border-blue-700 rounded `}
    }
  }
`;
export default StyledForm;
