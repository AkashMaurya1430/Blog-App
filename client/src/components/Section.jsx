import React from "react";
import { cn } from "@/utils/cn";

const Section = ({ className, children }) => {
  return (
    <section className={`${cn(className, "px-10 md:px-16 lg:px-16")}`}>
      {children}
    </section>
  );
};

export default Section;
