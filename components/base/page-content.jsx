import React from "react";
import cn from "classnames";
export default function PageContent({ className, children }) {
  return (
    <div className={cn("content max-w-6xl lg:w-2/4", className)}>
      {children}
    </div>
  );
}
