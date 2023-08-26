import React from "react";

function UnFilledButton({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: String;
}) {
  return (
    <div
    className={`flex hover:text-primary-hover cursor-pointer text-text-100 text-size_onPrimary place-content-center text-center rounded py-2 px-4 ${
      classNames && classNames.toString()
    }`}
    >

      {children}
    </div>
  );
}

export default UnFilledButton;
