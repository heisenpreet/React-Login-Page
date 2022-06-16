import styled from "styled-components";
import tw from "twin.macro";

const StyledPopover = styled.aside.attrs((props) => ({}))`
  & {
    margin: 0 auto;
    grid-column: 1/-1;
    grid-row: 1/-1;
    width: max-content;
    height: max-content;
    background-color: rgb(226 232 240);
    transition: all 800ms ease;
    transform: translateY(${(props) => props.transform});
    opacity: ${(props) => props.opacity};
    ${tw`flex justify-center flex-wrap p-6 rounded-lg  `}
  }
`;
export default StyledPopover;
