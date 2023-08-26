import React from 'react'

function FilledButton({
  children,
  classNames,
  onClick,
  disabled
}: {
  children: React.ReactNode;
  classNames?: String;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button disabled={disabled} onClick={e => onClick} className={`flex bg-primary-100 disabled:bg-primary-100/70 disabled:cursor-not-allowed hover:bg-primary-hover cursor-pointer text-onPrimary text-size_onPrimary place-content-center place-items-center text-center rounded py-2 px-4 ${classNames && classNames.toString()}`}>

        {children}
      
    </button>
  )
}

export default FilledButton 
