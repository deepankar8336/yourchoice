import React, { useState } from "react";
import "./ChoiceApp.css";

const ChoiceApp = () => {
  const [choices, setChoices] = useState({
    beautiful: false,
    dowry: false,
    virgin: false,
  });

  const handleToggle = (choice) => {
    setChoices((prev) => {
      const updated = { ...prev, [choice]: !prev[choice] };

      // Beautiful ON → Virgin OFF
      if (choice === "beautiful" && updated.beautiful) {
        updated.virgin = false;
      }

      // Virgin ON → Beautiful OFF
      if (choice === "virgin" && updated.virgin) {
        updated.beautiful = false;
      }

      // Dowry ON → Virgin OFF
      if (choice === "dowry" && updated.dowry) {
        updated.virgin = false;
      }

      return updated;
    });
  };

  return (
    <div className="container">
      <h2>Choose Options</h2>

      <div className="option">
        <span>Beautiful</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={choices.beautiful}
            onChange={() => handleToggle("beautiful")}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="option">
        <span>Dowry</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={choices.dowry}
            onChange={() => handleToggle("dowry")}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="option">
        <span>Virgin</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={choices.virgin}
            onChange={() => handleToggle("virgin")}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default ChoiceApp;
