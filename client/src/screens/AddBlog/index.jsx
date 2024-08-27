import PageTitle from "@/components/PageTitle";
import TopBar from "@/components/TopBar";
import ToolBar from "./ToolBar";
import TextEditor from "@/components/TextEditor";

// Add New Section, New Text, New Image, New Code Blog, New ordered list, New unordered list

const AddBlog = () => {
  return (
    <div>
      <TopBar />
      <PageTitle className={"py-2 px-5"} title={"Add Blog"} />
      <div className="w-full flex flex-row gap-2 px-5">
        <div className="flex flex-col w-[80%] ">
          <div className="">Div 1</div>
          <TextEditor />
          <ToolBar />
        </div>
        <div className="flex">Div 2</div>
      </div>
    </div>
  );
};

export default AddBlog;
