import React from "react";

function OutlinedButton({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: String;
}) {
  return (
    <div
    className={`flex border border-text-100 hover:bg-primary-hover hover:border-primary-hover transition-all duration-300 ease-linear hover:text-grey-100 cursor-pointer text-text-action text-size_large place-items-center place-content-center text-center rounded py-3 px-8 ${
      classNames && classNames.toString()
    }`}
    >

      {children}
    </div>
  );
}

export default OutlinedButton;
