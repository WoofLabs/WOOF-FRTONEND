import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <img 
      src="images/woof-icon.png"
      width="24px"
      height="24px"
      style={{marginRight: "4px"}}
      >
    </img>
  );
};

export default Icon;
