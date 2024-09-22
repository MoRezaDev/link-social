import React from "react";
import Tooltip from "rc-tooltip";

function TooltipWrapper({ children, trigger, overlay, placement,ref }) {
  return (
    <Tooltip
      placement={placement}
      trigger={trigger}
      overlay={<span>{overlay}</span>}
      ref={}
    >
      {children}
    </Tooltip>
  );
}

export default TooltipWrapper;
