import PageTitle from "@/components/PageTitle";
import TopBar from "@/components/TopBar";
import React, { useState } from "react";
import ToolBar from "./ToolBar";
import TextEditor from "@/components/TextEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faPaperPlane,
  faPlane,
  faPlaneDeparture,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Add New Section, New Text, New Image, New Code Blog, New ordered list, New unordered list

const AddBlog = () => {
  const [domElements, setDomElements] = useState([]);
  const [activeElement, setActiveElement] = useState("text");
  const [isContributorContainerActive, setIsContributorContainerActive] =
    useState(false);

  const changeActiveElement = (activeElement) => {
    setActiveElement(activeElement);
  };
  return (
    <div>
      <TopBar />
      <PageTitle className={"py-2 px-5"} title={"Add Blog"} />
      <div className="w-full flex flex-row gap-6 px-5">
        <div className="flex flex-col w-3/4 ">
          <div className="">Div 1</div>
          {domElements.map((element) => {
            return element;
          })}
          <TextEditor />
          <div className="toolbar flex w-fit gap-2">
            <ToolBar changeActiveElement={changeActiveElement} />
            <button className="text-sm bg-transparent text-primary-100 border-none rounded-full py-0 px-2">
              <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <input
              type="text"
              name="title"
              className="focus:border-none active:border-none p-2 h-12 text-dark-50 text-lg font-normal"
              placeholder="TItle Of Your Story"
            />
          </div>
          <div>
            <input
              type="text"
              name="sub-title"
              className="focus:border-none active:border-none p-2 h-12 text-dark-50 text-md font-normal"
              placeholder="Subtitle"
            />
          </div>
          <div className="flex flex-row flex-wrap items-center justify-start gap-4">
            <FontAwesomeIcon
              icon={faUser}
              className="p-2 bg-light-50 text-primary-100 rounded-full"
            />
            <span className="text-sm text-dark-50 font-normal">
              Saransh Shringi
            </span>
          </div>
          <div className="flex flex-col items-start justify-start py-2">
            <button
              className="btn bg-light-50 text-primary-100 font-medium text-sm w-[80%] px-4 py-2 rounded-lg"
              onClick={() => {
                setIsContributorContainerActive(!isContributorContainerActive);
              }}
            >
              Add Contributors
            </button>

            {isContributorContainerActive && <div>Contributors</div>}
          </div>

          <div className="flex items-start justify-start">
            <button className="btn text-md font-medium text-light-0 rounded-lg py-2 bg-primary-100 w-full">
              <span>Publish</span>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="ml-2"
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
