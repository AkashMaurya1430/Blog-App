import PageTitle from "@/components/PageTitle";
import TopBar from "@/components/TopBar";
import React, { act, useEffect, useState } from "react";
import ToolBar from "./ToolBar";
import TextEditor from "@/components/TextEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faFloppyDisk,
  faPaperPlane,
  faPlane,
  faPlaneDeparture,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Add New Section, New Text, New Image, New Code Blog, New ordered list, New unordered list

const AddBlog = () => {
  const [domElements, setDomElements] = useState(["text"]);
  const [activeElement, setActiveElement] = useState("text");
  const [isContributorContainerActive, setIsContributorContainerActive] =
    useState(false);

  const [isToolBarOpen, setIsToolbarOpen] = useState(false);

  const changeActiveElement = (activeElement) => {
    setActiveElement(activeElement);
    setDomElements([...domElements, activeElement]);
  };

  return (
    <div>
      <TopBar />
      <div>
        <input
          type="text"
          name="title"
          className="border border-none focus:border focus:border-none active:border active:border-none py-5 px-5 mb-4 h-20 text-dark-50 text-2xl font-medium"
          placeholder="TItle Of Your Story"
        />
      </div>
      <div className="w-full flex flex-row gap-6 px-5">
        <div className="flex flex-col w-3/4 ">
          <div className=" flex flex-col gap-4">
            {domElements.map((element, i) => {
              if (element == "text") {
                return <TextEditor key={i} />;
              }
            })}
          </div>

          <div className="toolbar flex w-fit gap-2 mt-4">
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-start gap-2 my-2">
                <button
                  className="btn text-dark-100 bg-light-50 w-9 h-9  font-medium rounded-full cursor-pointer"
                  onClick={() => {
                    setIsToolbarOpen(!isToolBarOpen);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button className="text-sm bg-transparent text-primary-100 border-none rounded-full py-0 px-2 ">
                  <FontAwesomeIcon icon={faFloppyDisk} />
                </button>
              </div>
              {isToolBarOpen && (
                <ToolBar changeActiveElement={changeActiveElement} />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-[70vh]">
          <div className="flex flex-col gap-2">
            <div>
              <input
                type="text"
                name="sub-title"
                className="focus:border-none active:border-none p-2 h-12 text-dark-50 text-md font-normal"
                placeholder="Subtitle"
              />
            </div>
            <div className="p-2 flex  flex-row flex-wrap items-center justify-start gap-4">
              <FontAwesomeIcon
                icon={faUser}
                className="p-2 bg-light-50 text-primary-100 rounded-full"
              />
              <span className="text-sm text-dark-50 font-normal">
                Saransh Shringi
              </span>
            </div>
            <div className="p-2 flex  flex-row flex-wrap items-center justify-start gap-4">
              <FontAwesomeIcon
                icon={faUser}
                className="p-2 bg-light-50 text-primary-100 rounded-full"
              />
              <span className="text-sm text-dark-50 font-normal">
                Akash Maurya
              </span>
            </div>
            <div className="flex flex-col items-start justify-start py-2">
              <button
                className="btn bg-light-50 text-dark-100 font-medium text-sm w-[80%] px-4 py-2 rounded-lg"
                onClick={() => {
                  setIsContributorContainerActive(
                    !isContributorContainerActive
                  );
                }}
              >
                Add Contributors
              </button>

              {isContributorContainerActive && <div>Contributors</div>}
            </div>
          </div>

          <div className=" flex flex-col gap-4 w-full">
            <button className="btn text-md font-medium text-primary-100 bg-primary-25 py-2 rounded-lg">
              <span>Preview</span>
              <FontAwesomeIcon icon={faEye} className="ml-2" />
            </button>
            <button className="btn text-md font-medium text-light-0 rounded-lg py-2 bg-primary-100 ">
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
