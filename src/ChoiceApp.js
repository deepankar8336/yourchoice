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

      // Keep existing logic
      if (choice === "beautiful" && updated.beautiful) {
        updated.virgin = false;
      }

      if (choice === "virgin" && updated.virgin) {
        updated.beautiful = false;
      }

      // ✅ Your ONLY new rule
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
        <label>Beautiful</label>
        <input
          type="checkbox"
          checked={choices.beautiful}
          onChange={() => handleToggle("beautiful")}
        />
      </div>

      <div className="option">
        <label>Dowry</label>
        <input
          type="checkbox"
          checked={choices.dowry}
          onChange={() => handleToggle("dowry")}
        />
      </div>

      <div className="option">
        <label>Virgin</label>
        <input
          type="checkbox"
          checked={choices.virgin}
          onChange={() => handleToggle("virgin")}
        />
      </div>
    </div>
  );
};

export default ChoiceApp;
