import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
}
export const Container = ({ children, className }: Props) => {
  return <div className={`max-w-[1470px] mx-auto ${className}`}>
    {children}
  </div>;
};
