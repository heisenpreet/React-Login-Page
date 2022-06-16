import StyledPopover from "../UIComponents/StyledPopover";
import { useEffect, useState } from "react";

const Popover = (props) => {
  const [opacityTransform, setopacityTransform] = useState({
    opacity: "0%",
    transform: "-2.5rem",
  });
  useEffect(() => {
    props.active
      ? setopacityTransform({ opacity: "100%", transform: "4rem" })
      : setopacityTransform({ opacity: "0%", transform: "-2.5rem" });

    const timer = setTimeout(() => {
      props.reload();
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [props.active]);

  return (
    <StyledPopover
      opacity={opacityTransform.opacity}
      transform={opacityTransform.transform}
    >
      <p>Invalid Password</p>
    </StyledPopover>
  );
};
export default Popover;
