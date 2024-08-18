import {
  faCode,
  faFont,
  faImage,
  faList12,
  faListOl,
  faPlus,
  faQuoteLeft,
  faSquareFull,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ToolBar = () => {
  const [isToolBarOpen, setIsToolbarOpen] = useState(false);

  const captureToolBarClick = (e) => {
    setIsToolbarOpen(!isToolBarOpen);
  };

  const captureActiveInput = (active_input) => {
    console.log("active_input", active_input);
  };
  return (
    <div>
      <FontAwesomeIcon
        onClick={() => {
          captureToolBarClick();
        }}
        className="text-dark-100 bg-light-50 p-2 rounded-full cursor-pointer"
        icon={isToolBarOpen ? faXmark : faPlus}
      />
      {isToolBarOpen && (
        <div className="py-2 px-1 grid grid-cols-7 bg-light-50 rounded-lg w-fit">
          <FontAwesomeIcon
            onClick={() => {
              captureActiveInput("text");
            }}
            className="text-dark-100 p-2 rounded-full cursor-pointer hover:underline hover:bg-light-0 hover:underline-offset-1"
            icon={faFont}
          />
          <FontAwesomeIcon
            onClick={() => {
              captureActiveInput("quote");
            }}
            className="text-dark-100 p-2 rounded-full cursor-pointer hover:underline hover:bg-light-0 hover:underline-offset-1"
            icon={faQuoteLeft}
          />
          <FontAwesomeIcon
            onClick={() => {
              captureActiveInput("code");
            }}
            className="text-dark-100 p-2 rounded-full cursor-pointer hover:underline hover:bg-light-0 hover:underline-offset-1"
            icon={faCode}
          />

          <FontAwesomeIcon
            onClick={() => {
              captureActiveInput("unordered_list");
            }}
            className="text-dark-100 p-2 rounded-full cursor-pointer hover:underline hover:bg-light-0 hover:underline-offset-1"
            icon={faList12}
          />

          <FontAwesomeIcon
            onClick={() => {
              captureActiveInput("ordered_list");
            }}
            className="text-dark-100 p-2 rounded-full cursor-pointer hover:underline hover:bg-light-0 hover:underline-offset-1"
            icon={faListOl}
          />
          <FontAwesomeIcon
            onClick={() => {
              captureActiveInput("image");
            }}
            className="text-dark-100 p-2 rounded-full cursor-pointer hover:underline hover:bg-light-0 hover:underline-offset-1"
            icon={faImage}
          />
          <FontAwesomeIcon
            onClick={() => {
              captureActiveInput("new_section");
            }}
            className="text-dark-100 p-2 rounded-full cursor-pointer hover:underline hover:bg-light-0 hover:underline-offset-1"
            icon={faSquareFull}
          />
        </div>
      )}
    </div>
  );
};

export default ToolBar;
