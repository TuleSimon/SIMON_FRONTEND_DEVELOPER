import React from 'react'

function TextButton({children, classNames}: {
    children: React.ReactNode,
    classNames?:String  }) {
  return (
    <div className={`flex hover:text-primary-hover cursor-pointer font-medium tracking-wide text-textButton text-size_textbutton rounded py-1.5 px-4 ${classNames}`}>

        {children}
      
    </div>
  )
}

export default TextButton 