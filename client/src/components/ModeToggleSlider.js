import React, { useState } from "react";
import Toggle from "react-toggle";
import { useSafeMode } from "../hooks/useSafeMode";

const ModeToggleSlider = props => {
  const [safeMode, setSafeMode] = useSafeMode("safeMode", props.safeMode);
  const toggleMode = e => {
    e.preventDefault();
    setSafeMode(!safeMode);
  };
  return (
    <div className="topBar">
      <div className="safeModeText">
        Press the slider to activate "Safe Mode"
      </div>
      <div className="sliderContainer" data-testid="ModeToggleSlider">
        <Toggle id="safeMode" checked={safeMode} onChange={toggleMode} />{" "}
      </div>
    </div>
  );
};

export default ModeToggleSlider;
