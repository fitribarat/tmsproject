import React, { useState } from "react";
import "./DropdownUser.css";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

function DropdownUser({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Fitriyanti Hutabarat", "Dhevatriya Nurul Khasanah", "Alwya Ulfha"];

  return (
    <div className="dd-header">
      <div className="dd-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected} <ArrowDropDownCircleIcon />
      </div>
      {isActive && (
        <div className="dd-content">
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dd-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownUser;
