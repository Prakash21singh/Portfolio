import React from "react";

interface Props {
  children: React.ReactNode;
}
function CustomLayoutProvider({ children }: Props) {
  return <div className="relative p-8 min-h-screen h-full">{children}</div>;
}

export default CustomLayoutProvider;
