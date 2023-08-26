import React from 'react'
import FilledButton from './buttons/FilledButton'

function GetStartedSection() {
  return (
    <section className="bg-grey-600 relative flex place-content-center mdw:p-[20px] p-[100px]">

    <img src="/backgrounds/join_the_world_background.svg" className="w-full z-0 absolute left-0 top-0 h-full object-cover" alt="background" width={800} height={800}/>
    
    <div className="container z-10 flex flex-col mx-auto place-items-center">

      <p className="font-semibold mdw:text-[32px] smw:text-[18px] text-[42px] md:whitespace-pre-line text-center leading-snug md:w-[80%] text-onPrimary"> {"My name is Tule Simon, and i believe there is a world of endless \npossibilities enabled by ReactJS"} </p>

      <a href="https://react.dev/" rel="noreferrer" target='_blank'>
      <FilledButton classNames="bg-primary-500 mt-[35px] min-w-[171px] py-3">
        {" "}
        Get started{" "}
      </FilledButton>
      </a>

    </div>
    

  </section>
  )
}

export default GetStartedSection
