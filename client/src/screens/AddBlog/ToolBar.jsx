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

const ToolBar = ({ changeActiveElement }) => {
  const captureActiveInput = (active_input) => {
    changeActiveElement(active_input);
  };
  return (
    <div>
      <div className="py-2 px-1 grid grid-cols-4 bg-light-50 rounded-lg w-fit">
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
            captureActiveInput("image");
          }}
          className="text-dark-100 p-2 rounded-full cursor-pointer hover:underline hover:bg-light-0 hover:underline-offset-1"
          icon={faImage}
        />
      </div>
    </div>
  );
};

export default ToolBar;
