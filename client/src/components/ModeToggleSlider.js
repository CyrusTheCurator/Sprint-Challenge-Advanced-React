import React, { useState } from "react";
import Toggle from "react-toggle";

const ModeToggleSlider = props => {
  const [safeMode, setSafeMode] = useState(props.safeMode);

  return (
    <div className="topBar">
      <div className="sliderContainer">
        <Toggle
          id="safeMode"
          checked={safeMode}
          onChange={props.handleSafeModeChange}
        />{" "}
      </div>
    </div>
  );
};

export default ModeToggleSlider;
