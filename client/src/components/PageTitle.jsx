import React from "react";
import { cn } from "@/utils/cn";

const PageTitle = ({ className, title }) => {
  return (
    <div
      className={`${cn(
        className,
        "text-2xl font-normal text-dark-100 capitalize mb-4"
      )}`}
    >
      {title}
    </div>
  );
};

export default PageTitle;
